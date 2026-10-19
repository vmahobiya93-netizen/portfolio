'use client';
import SectionTitle from '@/components/SectionTitle';
import { PROJECTS as ALL_PROJECTS } from '@/lib/data';
import { cn } from '@/lib/utils';
import { useGSAP } from '@gsap/react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/all';
import Image from 'next/image';
import React, { useRef, useState, MouseEvent } from 'react';
import Project from './Project';
import Link from 'next/link';
import LiveProjectLink from '@/components/LiveProjectLink';
const featuredSlugs = [
    'coach',
    'girlion',
    'nespresso',
    'jim-corbett-wedding',
];
const PROJECTS = featuredSlugs.map(
    (slug) => ALL_PROJECTS.find((project) => project.slug === slug)!,
);

gsap.registerPlugin(ScrollTrigger, useGSAP);

const ProjectList = () => {
    const containerRef = useRef<HTMLDivElement>(null);
    const projectListRef = useRef<HTMLDivElement>(null);
    const imageContainer = useRef<HTMLDivElement>(null);
    const imageRef = useRef<HTMLImageElement>(null);
    const [selectedProject, setSelectedProject] = useState<string | null>(
        PROJECTS[0].slug,
    );

    // update imageRef.current href based on the cursor hover position
    // also update image position
    useGSAP(
        (context, contextSafe) => {
            // show image on hover
            if (window.innerWidth < 768) {
                setSelectedProject(null);
                return;
            }

            const handleMouseMove = contextSafe?.((e: MouseEvent) => {
                if (!containerRef.current) return;
                if (!imageContainer.current) return;

                if (window.innerWidth < 768) {
                    setSelectedProject(null);
                    return;
                }

                const containerRect =
                    containerRef.current?.getBoundingClientRect();
                const imageRect =
                    imageContainer.current.getBoundingClientRect();
                const offsetTop = e.clientY - containerRect.y;

                // if cursor is outside the container, hide the image
                if (
                    containerRect.y > e.clientY ||
                    containerRect.bottom < e.clientY ||
                    containerRect.x > e.clientX ||
                    containerRect.right < e.clientX
                ) {
                    return gsap.to(imageContainer.current, {
                        duration: 0.3,
                        opacity: 0,
                    });
                }

                gsap.to(imageContainer.current, {
                    y: offsetTop - imageRect.height / 2,
                    duration: 1,
                    opacity: 1,
                });
            }) as any;

            window.addEventListener('mousemove', handleMouseMove);

            return () => {
                window.removeEventListener('mousemove', handleMouseMove);
            };
        },
        { scope: containerRef, dependencies: [containerRef.current] },
    );

    useGSAP(
        () => {
            const tl = gsap.timeline({
                scrollTrigger: {
                    trigger: containerRef.current,
                    start: 'top bottom',
                    end: 'top 80%',
                    toggleActions: 'restart none none reverse',
                    scrub: 1,
                },
            });

            tl.from(containerRef.current, {
                y: 150,
                opacity: 0,
            });
        },
        { scope: containerRef },
    );

    const handleMouseEnter = (slug: string) => {
        if (window.innerWidth < 768) {
            setSelectedProject(null);
            return;
        }

        setSelectedProject(slug);
    };

    return (
        <section className="pb-section" id="selected-projects">
            <div className="container">
                <SectionTitle title="Featured Projects" />

                <div className="group/projects relative" ref={containerRef}>
                    {selectedProject !== null && (
                        <div
                            className="max-md:hidden absolute right-0 top-0 z-[1] pointer-events-none w-[200px] xl:w-[350px] aspect-[3/4] overflow-hidden opacity-0"
                            ref={imageContainer}
                        >
                            {PROJECTS.map((project) => (
                                <Image
                                    src={project.thumbnail}
                                    alt="Project"
                                    width="400"
                                    height="500"
                                    className={cn(
                                        'absolute inset-0 transition-all duration-500 w-full h-full object-cover',
                                        {
                                            'opacity-0':
                                                project.slug !==
                                                selectedProject,
                                        },
                                    )}
                                    ref={imageRef}
                                    key={project.slug}
                                />
                            ))}
                        </div>
                    )}

                    <div
                        className="flex flex-col max-md:gap-10"
                        ref={projectListRef}
                    >
                        {PROJECTS.map((project, index) => (
                            <Project
                                index={index}
                                project={project}
                                selectedProject={selectedProject}
                                onMouseEnter={handleMouseEnter}
                                key={project.slug}
                            />
                        ))}
                    </div>
                </div>
                <details className="mt-10 rounded-xl border p-6">
                    <summary>Explore more projects</summary>
                    <div className="mt-6 grid sm:grid-cols-2 lg:grid-cols-3">
                        {ALL_PROJECTS.filter(
                            (p) => !featuredSlugs.includes(p.slug),
                        ).map((p) => (
                            <article
                                key={p.slug}
                                className="group/more rounded-xl border border-transparent p-4 transition-colors hover:border-primary/40 hover:bg-background-light focus-within:border-primary/40"
                            >
                                <Link
                                    href={'/projects/' + p.slug}
                                    className="block"
                                >
                                    <div className="mb-4 overflow-hidden rounded-lg">
                                        <Image
                                            src={p.thumbnail}
                                            alt={`${p.title} preview`}
                                            width={450}
                                            height={280}
                                            sizes="(max-width: 639px) 100vw, (max-width: 1023px) 50vw, 33vw"
                                            className="aspect-[8/5] w-full object-cover object-top transition-transform duration-500 group-hover/more:scale-105"
                                        />
                                    </div>
                                    <h3 className="text-2xl font-anton transition-colors group-hover/more:text-primary">
                                        {p.title}
                                    </h3>
                                    <ul
                                        aria-label="Tech stack"
                                        className="mt-3 flex flex-wrap gap-2 text-xs text-muted-foreground"
                                    >
                                        {p.techStack.map((tech) => (
                                            <li
                                                key={tech}
                                                className="rounded-full border px-2 py-1"
                                            >
                                                {tech}
                                            </li>
                                        ))}
                                    </ul>
                                    <span className="mt-4 inline-block text-sm underline underline-offset-4">
                                        View project details ↗
                                    </span>
                                </Link>
                                <div className="mt-3">
                                    <LiveProjectLink
                                        url={p.liveUrl}
                                        title={p.title}
                                    />
                                </div>
                            </article>
                        ))}
                    </div>
                </details>
            </div>
        </section>
    );
};

export default ProjectList;
