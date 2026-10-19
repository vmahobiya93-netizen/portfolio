'use client';
import { useState, type FormEvent } from 'react';
import { GENERAL_INFO } from '@/lib/data';

export default function Contact() {
    const [kind, setKind] = useState('Project');
    function handleSubmit(event: FormEvent<HTMLFormElement>) {
        event.preventDefault();
        const form = new FormData(event.currentTarget);
        const body = [
            'Hi Vaibhav,',
            '',
            'Name: ' + form.get('name'),
            'Email: ' + form.get('email'),
            '',
            String(form.get('message')),
            ...(kind === 'Project'
                ? [
                      '',
                      'Budget: ' + form.get('budget'),
                      'Timeline: ' + form.get('timeline'),
                  ]
                : []),
        ].join('\n');
        window.location.href =
            'mailto:' +
            GENERAL_INFO.email +
            '?subject=' +
            encodeURIComponent(kind + ' inquiry from ' + form.get('name')) +
            '&body=' +
            encodeURIComponent(body);
    }
    const inputClass =
        'mt-2 w-full rounded-lg border bg-background px-4 py-3 text-foreground';
    return (
        <section id="contact" className="border-t bg-background-light/40 py-20">
            <div className="container grid lg:grid-cols-2">
                <div>
                    <p className="text-sm uppercase tracking-[0.2em] text-primary">
                        Let’s work together
                    </p>
                    <h2 className="mt-4 font-anton text-4xl sm:text-5xl">
                        HAVE A PROJECT
                        <br />
                        OR ROLE IN MIND?
                    </h2>
                    <p className="mt-6 max-w-md leading-relaxed text-muted-foreground">
                        Tell me what you’re building or who you’re hiring. I’ll
                        review the details and reply with next steps.
                    </p>
                    <a
                        className="mt-6 inline-block break-all text-lg text-primary underline underline-offset-4"
                        href={'mailto:' + GENERAL_INFO.email}
                    >
                        {GENERAL_INFO.email}
                    </a>
                    <p className="mt-4">
                        <a
                            className="underline underline-offset-4"
                            href="https://wa.me/919074215693"
                            target="_blank"
                            rel="noreferrer"
                        >
                            Prefer WhatsApp? Start a conversation ↗
                        </a>
                    </p>
                </div>
                <form
                    onSubmit={handleSubmit}
                    className="space-y-5 rounded-2xl border bg-background-light p-6 sm:p-8"
                >
                    <label className="block text-sm">
                        I’m reaching out about
                        <select
                            name="kind"
                            value={kind}
                            onChange={(event) => setKind(event.target.value)}
                            className={inputClass}
                        >
                            <option>Project</option>
                            <option>Job opportunity</option>
                        </select>
                    </label>
                    <div className="grid sm:grid-cols-2">
                        <label className="block text-sm">
                            Name
                            <input
                                name="name"
                                autoComplete="name"
                                required
                                maxLength={100}
                                className={inputClass}
                            />
                        </label>
                        <label className="block text-sm">
                            Email
                            <input
                                name="email"
                                type="email"
                                autoComplete="email"
                                required
                                maxLength={200}
                                className={inputClass}
                            />
                        </label>
                    </div>
                    <label className="block text-sm">
                        {kind === 'Project'
                            ? 'What would you like to build or improve?'
                            : 'Tell me about the role and your team'}
                        <textarea
                            name="message"
                            required
                            rows={4}
                            maxLength={2000}
                            className={inputClass}
                        />
                    </label>
                    {kind === 'Project' && (
                        <div className="grid sm:grid-cols-2">
                            <label className="block text-sm">
                                Budget (optional)
                                <input
                                    name="budget"
                                    maxLength={100}
                                    placeholder="Amount and currency"
                                    className={inputClass}
                                />
                            </label>
                            <label className="block text-sm">
                                Timeline (optional)
                                <input
                                    name="timeline"
                                    maxLength={100}
                                    placeholder="Your preferred timeframe"
                                    className={inputClass}
                                />
                            </label>
                        </div>
                    )}
                    <button
                        type="submit"
                        className="rounded-full bg-primary px-6 py-3 font-semibold text-primary-foreground hover:bg-primary/90"
                    >
                        Continue to email ↗
                    </button>
                    <p className="text-xs leading-relaxed text-muted-foreground">
                        This opens a draft in your email app. Review it and send
                        it there. You can also email me directly using the
                        address shown here.
                    </p>
                </form>
            </div>
        </section>
    );
}
