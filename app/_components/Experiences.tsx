'use client';
import { useGSAP } from '@gsap/react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/all';
import React, { useRef } from 'react';
gsap.registerPlugin(ScrollTrigger, useGSAP);
import { MY_EXPERIENCE, SOCIAL_LINKS, GENERAL_INFO } from '@/lib/data';
import { isMotionEnabled } from '@/lib/motion';

export default function Experiences() {
    const containerRef = useRef<HTMLDivElement>(null);

    useGSAP(
        () => {
            if (!isMotionEnabled()) return;
            const tl = gsap.timeline({
                scrollTrigger: {
                    trigger: containerRef.current,
                    start: 'top 60%',
                    end: 'bottom 50%',
                    toggleActions: 'restart none none reverse',
                    scrub: 1,
                },
            });

            tl.from('.experience-item', {
                y: 50,
                opacity: 0,
                stagger: 0.3,
            });
        },
        { scope: containerRef },
    );

    useGSAP(
        () => {
            if (!isMotionEnabled()) return;
            const tl = gsap.timeline({
                scrollTrigger: {
                    trigger: containerRef.current,
                    start: 'bottom 50%',
                    end: 'bottom 20%',
                    scrub: 1,
                },
            });

            tl.to(containerRef.current, {
                y: -150,
                opacity: 0,
            });
        },
        { scope: containerRef },
    );

    return (
        <section
            ref={containerRef}
            id="my-experience"
            className="container pb-20"
        >
            <p className="text-sm uppercase tracking-[0.2em] text-primary">
                For teams & recruiters
            </p>
            <h2 className="mt-4 font-anton text-4xl sm:text-5xl">
                EXPERIENCE THAT CONNECTS THE STACK.
            </h2>
            {MY_EXPERIENCE.map((item) => (
                <div
                    key={item.company}
                    className="experience-item mt-8 rounded-2xl border p-6 sm:p-8"
                >
                    <p className="text-primary">{item.duration}</p>
                    <h3 className="mt-3 text-2xl font-semibold">
                        {item.title}
                    </h3>
                    <p className="mt-2 text-muted-foreground">{item.company}</p>
                </div>
            ))}
            <p className="mt-6 max-w-2xl leading-relaxed text-muted-foreground">
                Interested in discussing a full stack or eCommerce development
                role? Explore my project contributions above, connect on
                LinkedIn, or email me for my résumé and availability.
            </p>
            <div className="mt-6 flex flex-wrap gap-5">
                <a
                    className="text-primary underline underline-offset-4"
                    href={
                        'mailto:' +
                        GENERAL_INFO.email +
                        '?subject=' +
                        encodeURIComponent('Job opportunity — résumé request')
                    }
                >
                    Request my résumé ↗
                </a>
                {SOCIAL_LINKS.map((link) => (
                    <a
                        key={link.name}
                        href={link.url}
                        target="_blank"
                        rel="noreferrer"
                        className="capitalize underline underline-offset-4"
                    >
                        {link.name} ↗
                    </a>
                ))}
            </div>
        </section>
    );
}
