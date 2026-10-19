'use client';
import { useGSAP } from '@gsap/react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/all';
import React from 'react';
gsap.registerPlugin(ScrollTrigger, useGSAP);
import ExperienceDuration from '@/components/ExperienceDuration';

export default function AboutMe() {
    const container = React.useRef<HTMLDivElement>(null);

    useGSAP(
        () => {
            const tl = gsap.timeline({
                scrollTrigger: {
                    id: 'about-me-in',
                    trigger: container.current,
                    start: 'top 70%',
                    end: 'bottom bottom',
                    scrub: 0.5,
                },
            });

            tl.from('.slide-up-and-fade', {
                y: 150,
                opacity: 0,
                stagger: 0.05,
            });
        },
        { scope: container },
    );

    useGSAP(
        () => {
            const tl = gsap.timeline({
                scrollTrigger: {
                    id: 'about-me-out',
                    trigger: container.current,
                    start: 'bottom 50%',
                    end: 'bottom 10%',
                    scrub: 0.5,
                },
            });

            tl.to('.slide-up-and-fade', {
                y: -150,
                opacity: 0,
                stagger: 0.02,
            });
        },
        { scope: container },
    );

    return (
        <section
            ref={container}
            id="about-me"
            className="container grid py-20 md:grid-cols-[1fr_1.5fr]"
        >
            <div>
                <p className="slide-up-and-fade text-sm uppercase tracking-[0.2em] text-primary">
                    About me
                </p>
                <h2 className="slide-up-and-fade mt-4 font-anton text-4xl">
                    HI, I&apos;M VAIBHAV.
                </h2>
            </div>
            <div className="space-y-4 text-lg leading-relaxed text-muted-foreground">
                <p className="slide-up-and-fade">
                    I’m a full stack developer with <ExperienceDuration /> of
                    experience working on eCommerce stores and business
                    applications.
                </p>
                <p className="slide-up-and-fade">
                    My work spans backend development with PHP and Laravel,
                    React interfaces, eCommerce platforms, and API integrations.
                    I enjoy turning business requirements into features that
                    people can use every day.
                </p>
                <p className="slide-up-and-fade">
                    I’m open to freelance projects and remote full-time
                    opportunities where I can contribute across the backend and
                    frontend.
                </p>
            </div>
        </section>
    );
}
