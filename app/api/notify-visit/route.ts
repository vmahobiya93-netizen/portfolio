import { NextRequest, NextResponse } from 'next/server';

async function getLocation(req: NextRequest, ip: string): Promise<string> {
    const city = req.headers.get('x-vercel-ip-city');
    const region = req.headers.get('x-vercel-ip-country-region');
    const country = req.headers.get('x-vercel-ip-country');

    if (city || region || country) {
        return [city && decodeURIComponent(city), region, country]
            .filter(Boolean)
            .join(', ');
    }

    if (ip === 'unknown' || ip === '::1' || ip.startsWith('127.') || ip.startsWith('192.168.')) {
        return 'unknown (local)';
    }

    try {
        const response = await fetch(`https://ipapi.co/${ip}/json/`);
        if (!response.ok) return 'unknown';

        const data = await response.json();
        return [data.city, data.region, data.country_name].filter(Boolean).join(', ') || 'unknown';
    } catch {
        return 'unknown';
    }
}

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
    const location = await getLocation(req, ip);

    const text = [
        '👀 New portfolio visit',
        `Page: ${path}`,
        `Location: ${location}`,
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
