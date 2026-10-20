'use client';

import { useRef } from 'react';
import Link from 'next/link';
import { ArrowUpRight } from 'lucide-react';
import { useGSAP } from '@gsap/react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/all';
import ArrowAnimation from '@/components/ArrowAnimation';
import ExperienceDuration from '@/components/ExperienceDuration';
import styles from './Banner.module.css';

gsap.registerPlugin(ScrollTrigger, useGSAP);

export default function Banner() {
    const containerRef = useRef<HTMLElement>(null);

    useGSAP(
        () => {
            const timeline = gsap.timeline({
                scrollTrigger: {
                    trigger: containerRef.current,
                    start: 'bottom 70%',
                    end: 'bottom 10%',
                    scrub: 1,
                },
            });
            timeline.fromTo(
                '.slide-up-and-fade',
                { y: 0 },
                { y: -150, opacity: 0, stagger: 0.02 },
            );
        },
        { scope: containerRef },
    );

    return (
        <section
            id="banner"
            ref={containerRef}
            aria-labelledby="hero-heading"
            className={styles.hero}
        >
            <div aria-hidden="true" className={styles.backdrop} />
            <div aria-hidden="true" className={styles.arrowBackdrop}>
                <ArrowAnimation />
            </div>
            <div className={'container ' + styles.layout}>
                <div className={styles.copy}>
                    <h1
                        id="hero-heading"
                        className={'slide-up-and-fade ' + styles.heading}
                    >
                        <span>HI, I&apos;M VAIBHAV!</span>
                        <span>
                            FULL STACK
                            <br className={styles.headingBreak} />{' '}
                            <span className={styles.accent}>DEVELOPER.</span>
                        </span>
                    </h1>
                    <p className={'slide-up-and-fade ' + styles.description}>
                        I&apos;m a full stack developer with{' '}
                        <span className={styles.experience}>
                            <ExperienceDuration />
                        </span>{' '}
                        of experience building web applications, eCommerce
                        platforms, and API integrations. I turn business ideas
                        into reliable products, from backend systems to the
                        interfaces people use.
                    </p>
                    <div className={'slide-up-and-fade ' + styles.actions}>
                        <Link href="#contact" className={styles.primaryAction}>
                            Discuss a project{' '}
                            <ArrowUpRight size={17} aria-hidden="true" />
                        </Link>
                        <Link
                            href="#selected-projects"
                            className={styles.workAction}
                        >
                            <span className={styles.actionIcon}>
                                <ArrowUpRight size={22} aria-hidden="true" />
                            </span>
                            <span>View my work</span>
                        </Link>
                    </div>
                    <div className={'slide-up-and-fade ' + styles.availability}>
                        <span className={styles.statusDot} aria-hidden="true" />
                        <span>
                            Open to freelance projects & remote full-time roles
                        </span>
                    </div>
                    <Link
                        href="#my-experience"
                        className={'slide-up-and-fade ' + styles.recruiterLink}
                    >
                        Hiring for your team? Explore my experience{' '}
                        <ArrowUpRight size={14} aria-hidden="true" />
                    </Link>
                </div>

                <div className={'slide-up-and-fade ' + styles.portrait}>
                    <svg
                        viewBox="0 0 440 500"
                        role="img"
                        aria-labelledby="hero-portrait-title"
                        className={styles.portraitSvg}
                    >
                        <title id="hero-portrait-title">
                            Vaibhav Mahobiya, full stack developer
                        </title>
                        <defs>
                            <clipPath id="hero-portrait-clip">
                                <path d="M199 32 Q220 20 241 32 L393 120 Q410 130 410 150 L410 350 Q410 370 393 380 L241 468 Q220 480 199 468 L47 380 Q30 370 30 350 L30 150 Q30 130 47 120 Z" />
                            </clipPath>
                        </defs>
                        <image
                            href="/profile-pic.jpg"
                            x="30"
                            y="20"
                            width="380"
                            height="460"
                            preserveAspectRatio="xMidYMid slice"
                            clipPath="url(#hero-portrait-clip)"
                        />
                        <g
                            fill="none"
                            stroke="currentColor"
                            strokeWidth="10"
                            strokeLinejoin="round"
                        >
                            <path d="M10 177 L10 150 Q10 120 37 104 L196 12 Q220 -2 244 12 L403 104 Q430 120 430 150 L430 177" />
                            <path d="M430 323 L430 350 Q430 380 403 396 L244 488 Q220 502 196 488 L37 396 Q10 380 10 350 L10 323" />
                        </g>
                    </svg>
                </div>
            </div>
        </section>
    );
}
