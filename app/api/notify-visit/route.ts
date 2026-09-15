import { NextRequest, NextResponse } from 'next/server';

export async function POST(req: NextRequest) {
    const botToken = process.env.TELEGRAM_BOT_TOKEN;
    const chatId = process.env.TELEGRAM_CHAT_ID;

    if (!botToken || !chatId) {
        return NextResponse.json(
            { error: 'Telegram notifications are not configured' },
            { status: 500 }
        );
    }

    const body = await req.json().catch(() => ({}));
    const path = typeof body.path === 'string' && body.path ? body.path : '/';
    const referrer =
        typeof body.referrer === 'string' && body.referrer ? body.referrer : 'direct';

    const ip =
        req.headers.get('x-forwarded-for')?.split(',')[0]?.trim() ||
        req.headers.get('x-real-ip') ||
        'unknown';
    const userAgent = req.headers.get('user-agent') || 'unknown';

    const text = [
        '👀 New portfolio visit',
        `Page: ${path}`,
        `Referrer: ${referrer}`,
        `IP: ${ip}`,
        `User agent: ${userAgent}`,
    ].join('\n');

    const telegramResponse = await fetch(
        `https://api.telegram.org/bot${botToken}/sendMessage`,
        {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ chat_id: chatId, text }),
        }
    );

    if (!telegramResponse.ok) {
        return NextResponse.json(
            { error: 'Failed to send Telegram notification' },
            { status: 502 }
        );
    }

    return NextResponse.json({ ok: true });
}
