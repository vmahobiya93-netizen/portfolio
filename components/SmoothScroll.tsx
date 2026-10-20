'use client';

import { ReactLenis } from 'lenis/react';
import { useEffect, useState } from 'react';

export default function SmoothScroll({ children }: { children: React.ReactNode }) {
    const [enabled, setEnabled] = useState(false);

    useEffect(() => {
        const query = window.matchMedia(
            '(min-width: 768px) and (prefers-reduced-motion: no-preference)',
        );
        const update = () => setEnabled(query.matches);
        update();
        query.addEventListener('change', update);
        return () => query.removeEventListener('change', update);
    }, []);

    return (
        <ReactLenis
            root
            options={{
                lerp: 0.1,
                duration: 1.4,
                smoothWheel: enabled,
                autoRaf: enabled,
            }}
        >
            {children}
        </ReactLenis>
    );
}
