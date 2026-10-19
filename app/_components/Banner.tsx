'use client';
import { useGSAP } from '@gsap/react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/all';
import React from 'react';
gsap.registerPlugin(ScrollTrigger, useGSAP);
import ArrowAnimation from '@/components/ArrowAnimation';
import ExperienceDuration from '@/components/ExperienceDuration';
import Image from 'next/image';
import Link from 'next/link';

export default function Banner() {
    const containerRef = React.useRef<HTMLDivElement>(null);

    // move the content a little up on scroll
    useGSAP(
        () => {
            const tl = gsap.timeline({
                scrollTrigger: {
                    trigger: containerRef.current,
                    start: 'bottom 70%',
                    end: 'bottom 10%',
                    scrub: 1,
                },
            });

            tl.fromTo(
                '.slide-up-and-fade',
                { y: 0 },
                { y: -150, opacity: 0, stagger: 0.02 },
            );
        },
        { scope: containerRef },
    );

    return (
        <section
            ref={containerRef}
            id="banner"
            className="relative overflow-hidden container grid items-center gap-12 py-24 md:grid-cols-[1.5fr_1fr] md:py-32"
        >
            <ArrowAnimation />
            <div className="relative z-[1]">
                <p className="slide-up-and-fade mb-6 text-sm uppercase tracking-[0.2em] text-primary">
                    Vaibhav Mahobiya / Full Stack Developer
                </p>
                <h1 className="slide-up-and-fade font-anton text-5xl leading-[1.1] sm:text-7xl">
                    FULL STACK
                    <br />
                    <span className="text-primary">
                        DEVELOPER.
                    </span>
                </h1>
                <p className="slide-up-and-fade mt-7 max-w-xl text-lg leading-relaxed text-muted-foreground">
                    I help businesses turn ideas into reliable web applications,
                    eCommerce platforms, and connected systems, from backend
                    architecture to responsive user interfaces.
                </p>
                <div className="slide-up-and-fade mt-8 flex flex-wrap gap-4">
                    <Link
                        className="rounded-full bg-primary px-6 py-3 font-semibold text-primary-foreground hover:bg-primary/90"
                        href="#contact"
                    >
                        Discuss a project ↗
                    </Link>
                    <Link
                        className="rounded-full border px-6 py-3 hover:border-primary hover:text-primary"
                        href="#selected-projects"
                    >
                        View my work
                    </Link>
                </div>
                <p className="slide-up-and-fade mt-6 flex items-center gap-3 text-sm text-muted-foreground">
                    <span className="size-2 shrink-0 rounded-full bg-primary" />
                    Open to freelance projects and remote full-time roles
                </p>
                <a
                    href="#my-experience"
                    className="slide-up-and-fade mt-4 inline-block text-sm underline underline-offset-4 hover:text-primary"
                >
                    Hiring for your team? View my experience
                </a>
            </div>
            <div className="mx-auto w-full max-w-sm overflow-hidden rounded-3xl border bg-background-light p-3">
                <Image
                    src="/profile-pic.jpg"
                    alt="Vaibhav Mahobiya"
                    width={480}
                    height={480}
                    priority
                    className="slide-up-and-fade aspect-square w-full rounded-2xl object-cover"
                />
                <div className="grid grid-cols-2 divide-x py-6 text-center">
                    <div>
                        <p className="slide-up-and-fade font-anton text-3xl text-primary">
                            <ExperienceDuration />
                        </p>
                        <p className="slide-up-and-fade mt-1 text-sm text-muted-foreground">
                            Development experience
                        </p>
                    </div>
                    <div>
                        <p className="slide-up-and-fade font-anton text-3xl text-primary">
                            Full Stack
                        </p>
                        <p className="slide-up-and-fade mt-1 text-sm text-muted-foreground">
                            Frontend & Backend
                        </p>
                    </div>
                </div>
            </div>
        </section>
    );
}
