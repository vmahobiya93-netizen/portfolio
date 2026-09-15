'use client';

import { useEffect } from 'react';

const VisitTracker = () => {
    useEffect(() => {
        fetch('/api/notify-visit', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({
                path: window.location.pathname,
                referrer: document.referrer,
            }),
        }).catch(() => {});
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    return null;
};

export default VisitTracker;
