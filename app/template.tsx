'use client';

import { useGSAP } from '@gsap/react';
import gsap from 'gsap';
import { isMotionEnabled } from '@/lib/motion';

gsap.registerPlugin(useGSAP);

export default function Template({ children }: { children: React.ReactNode }) {
    useGSAP(() => {
        if (!isMotionEnabled()) return;
        const tl = gsap.timeline();

        tl.to('.page-transition--inner', {
            yPercent: 0,
            duration: 0.2,
        })
            .to('.page-transition--inner', {
                yPercent: -100,
                duration: 0.2,
            })
            .to('.page-transition', {
                yPercent: -100,
            });
    });

    return (
        <div>
            <div className="page-transition w-screen h-screen fixed top-0 left-0 bg-background-light z-[5]">
                <div className="page-transition--inner w-screen h-screen fixed top-0 left-0 bg-primary z-[5] translate-y-full"></div>
            </div>

            {children}
        </div>
    );
}
