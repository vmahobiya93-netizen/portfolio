import { GENERAL_INFO, MY_STACK, PROJECTS, SOCIAL_LINKS } from '@/lib/data';
import { NextResponse } from 'next/server';

export const maxDuration = 60;

const MAX_MESSAGE_LENGTH = 1000;
const MAX_HISTORY_MESSAGES = 12;

type ChatMessage = {
    role: 'user' | 'model';
    text: string;
};

const portfolioContext = `
You are the portfolio assistant for Vaibhav Mahobiya, a Full Stack Developer.
Answer questions about Vaibhav using only the portfolio information below.
Be concise, friendly, and professional. Do not invent employers, dates, skills,
projects, prices, or availability. If the information is not present, say you
do not know and suggest contacting Vaibhav at ${GENERAL_INFO.email}.

Name: Vaibhav Mahobiya
Role: Full Stack Developer
Experience: 3.5+ years
Availability: Available for full-time opportunities
Email: ${GENERAL_INFO.email}
GitHub: ${SOCIAL_LINKS.find((link) => link.name === 'github')?.url}
LinkedIn: ${SOCIAL_LINKS.find((link) => link.name === 'linkedin')?.url}

Skills:
${Object.entries(MY_STACK)
    .map(([category, skills]) => `${category}: ${skills.map((skill) => skill.name).join(', ')}`)
    .join('\n')}

Projects:
${PROJECTS.map(
    (project) =>
        `- ${project.title}: ${project.techStack.join(', ')}. ${project.description.replace(/<[^>]*>/g, ' ').replace(/\s+/g, ' ').trim()}`,
).join('\n')}
`;

export async function POST(request: Request) {
    const apiKey = process.env.GEMINI_API_KEY;

    if (!apiKey) {
        return NextResponse.json(
            { error: 'The chatbot is not configured yet.' },
            { status: 503 },
        );
    }

    let body: { message?: unknown; history?: unknown };

    try {
        body = (await request.json()) as { message?: unknown; history?: unknown };
    } catch {
        return NextResponse.json({ error: 'Invalid request body.' }, { status: 400 });
    }

    const message = typeof body.message === 'string' ? body.message.trim() : '';

    if (!message || message.length > MAX_MESSAGE_LENGTH) {
        return NextResponse.json(
            { error: `Message must be between 1 and ${MAX_MESSAGE_LENGTH} characters.` },
            { status: 400 },
        );
    }

    const history = Array.isArray(body.history)
        ? body.history
              .filter(
                  (item): item is ChatMessage =>
                      typeof item === 'object' &&
                      item !== null &&
                      ((item as ChatMessage).role === 'user' ||
                          (item as ChatMessage).role === 'model') &&
                      typeof (item as ChatMessage).text === 'string',
              )
              .slice(-MAX_HISTORY_MESSAGES)
        : [];

    try {
        const response = await fetch(
            `https://generativelanguage.googleapis.com/v1beta/models/${process.env.GEMINI_MODEL || 'gemini-2.0-flash'}:generateContent`,
            {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                    'X-goog-api-key': apiKey,
                },
                body: JSON.stringify({
                    systemInstruction: {
                        parts: [{ text: portfolioContext }],
                    },
                    contents: [
                        ...history.map(({ role, text }) => ({
                            role,
                            parts: [{ text }],
                        })),
                        { role: 'user', parts: [{ text: message }] },
                    ],
                    generationConfig: {
                        temperature: 0.4,
                        maxOutputTokens: 500,
                        thinkingConfig: {
                            thinkingBudget: 128,
                        },
                    },
                }),
                signal: AbortSignal.timeout(55000),
            },
        );

        const data = (await response.json()) as {
            candidates?: Array<{ content?: { parts?: Array<{ text?: string }> } }>;
            error?: { message?: string };
        };

        if (!response.ok) {
            console.error('Gemini API error:', data.error?.message || response.status);

            if (response.status === 429) {
                return NextResponse.json(
                    {
                        error: "I'm getting a lot of questions right now - please wait a few seconds and try again.",
                    },
                    { status: 429 },
                );
            }

            return NextResponse.json(
                { error: 'The AI service could not answer right now.' },
                { status: 502 },
            );
        }

        const reply = data.candidates?.[0]?.content?.parts
            ?.map((part) => part.text || '')
            .join('')
            .trim();

        if (!reply) {
            return NextResponse.json(
                { error: 'The AI service returned an empty response.' },
                { status: 502 },
            );
        }

        return NextResponse.json({ reply });
    } catch (error) {
        console.error('Chat request failed:', error);
        return NextResponse.json(
            { error: 'The chatbot is temporarily unavailable.' },
            { status: 502 },
        );
    }
}
