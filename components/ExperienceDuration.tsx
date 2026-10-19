'use client';

import { useEffect, useState } from 'react';
import { getExperience } from '@/lib/experience';

export default function ExperienceDuration() {
    const [label, setLabel] = useState<string | null>(null);
    useEffect(() => {
        const refresh = () => setLabel(getExperience().label);
        refresh();
        const interval = window.setInterval(refresh, 60_000);
        window.addEventListener('focus', refresh);
        return () => {
            window.clearInterval(interval);
            window.removeEventListener('focus', refresh);
        };
    }, []);
    return <span>{label ?? '…'}</span>;
}
