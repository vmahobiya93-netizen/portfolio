'use client';
import { useGSAP } from '@gsap/react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/all';
import Image from 'next/image';
import React from 'react';


gsap.registerPlugin(ScrollTrigger, useGSAP);

const AboutMe = () => {
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
        <section className="pb-section" id="about-me">
            <div className="container" ref={container}>
                <h2 className="text-4xl md:text-6xl font-thin mb-20 slide-up-and-fade">
                  I believe in a solution-driven development approach, ensuring that every project I work on is built to be scalable, maintainable, and tailored to real business needs.
                </h2>

                <p className="pb-3 border-b text-muted-foreground slide-up-and-fade">
                    This is me.
                </p>

                <div className="grid md:grid-cols-12 mt-9">
                    
                    <div className="md:col-span-5">
                        <p className="text-5xl slide-up-and-fade">
                            Hi, I&apos;m Vaibhav.
                        </p>

                        <div className="mt-8 w-[280px] h-[280px] rounded-full overflow-hidden slide-up-and-fade">
                            <Image
                                src="/profile-pic.png"
                                alt="Vaibhav Mahobiya"
                                width={280}
                                height={280}
                                className="w-full h-full object-cover"
                            />
                        </div>
                    </div>
                    <div className="md:col-span-7">
                        <div className="text-lg text-muted-foreground max-w-[450px] md:max-w-none">
                            <p className="slide-up-and-fade">
                                I&apos;m a Full Stack Developer who turns your ideas into scalable, high-performing web solutions that actually deliver results.
                            </p>
                            <p className="mt-3 slide-up-and-fade">
                                From robust backend architecture to seamless user experiences, I build products that work flawlessly — and grow with your business.
                            </p>
                            <p className="mt-3 slide-up-and-fade">
                                My approach is simple: clean code, solid performance, and solutions built to last.
                            </p>
                            <p className="mt-3 slide-up-and-fade">
                                Whether it&apos;s a custom web application, an eCommerce platform, or a complex backend system, I focus on what matters most — speed, security, and scalability — so you get a product that not only impresses users but drives real business growth.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default AboutMe;
