'use client';
import SectionTitle from '@/components/SectionTitle';
import { MY_STACK } from '@/lib/data';
import { useGSAP } from '@gsap/react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/all';
import Image from 'next/image';
import React, { useRef } from 'react';

gsap.registerPlugin(ScrollTrigger, useGSAP);

const Skills = () => {
    const containerRef = useRef<HTMLDivElement>(null);

    useGSAP(
        () => {
            const slideUpEl =
                containerRef.current?.querySelectorAll('.slide-up');

            if (!slideUpEl?.length) return;

            const tl = gsap.timeline({
                scrollTrigger: {
                    trigger: containerRef.current,
                    start: 'top 80%',
                    end: 'bottom 80%',
                    scrub: 0.5,
                },
            });

            tl.from('.slide-up', {
                opacity: 0,
                y: 40,
                ease: 'none',
                stagger: 0.4,
            });
        },
        { scope: containerRef },
    );

    useGSAP(
        () => {
            const tl = gsap.timeline({
                scrollTrigger: {
                    trigger: containerRef.current,
                    start: 'bottom 50%',
                    end: 'bottom 10%',
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
        <section id="my-stack" ref={containerRef} className="pb-16 md:pb-20">
            <div className="container">
                <SectionTitle title="My Stack" className="mb-6" />

                <div className="grid !gap-4 md:grid-cols-2">
                    {Object.entries(MY_STACK).map(([key, value]) => (
                        <div
                            className="slide-up min-w-0 rounded-xl border bg-background-light/20 p-4 sm:p-5"
                            key={key}
                        >
                            <h3 className="mb-3 font-anton text-xl leading-tight uppercase text-primary">
                                {key}
                            </h3>
                            <ul className="flex flex-wrap gap-2">
                                {value.map((item) => (
                                    <li
                                        className="flex min-w-0 max-w-full items-center gap-2 rounded-lg border border-white/10 bg-background/60 px-2.5 py-2 text-sm leading-snug"
                                        key={item.name}
                                    >
                                        {item.icon && (
                                            <Image
                                                src={item.icon}
                                                alt=""
                                                width={20}
                                                height={20}
                                                className="size-5 shrink-0 object-contain"
                                            />
                                        )}
                                        <span className="min-w-0 break-words">
                                            {item.name}
                                        </span>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Skills;
