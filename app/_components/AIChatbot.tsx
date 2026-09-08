'use client';

import { FormEvent, useEffect, useRef, useState } from 'react';
import { LoaderCircle, MessageCircle, Send, X } from 'lucide-react';
import { marked } from 'marked';
import parse from 'html-react-parser';

type Message = {
    role: 'user' | 'model';
    text: string;
};

const initialMessage: Message = {
    role: 'model',
    text: 'Hi! I can tell you about Vaibhav’s skills, projects, and experience. What would you like to know?',
};

export default function AIChatbot() {
    const [isOpen, setIsOpen] = useState(false);
    const [input, setInput] = useState('');
    const [messages, setMessages] = useState<Message[]>([initialMessage]);
    const [isLoading, setIsLoading] = useState(false);
    const [error, setError] = useState('');
    const messagesEndRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
    }, [messages, isOpen]);

    async function sendMessage(event: FormEvent<HTMLFormElement>) {
        event.preventDefault();
        const text = input.trim();

        if (!text || isLoading) return;

        const userMessage: Message = { role: 'user', text };
        setInput('');
        setError('');
        setMessages((current) => [...current, userMessage]);
        setIsLoading(true);

        try {
            const response = await fetch('/api/chat', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({
                    message: text,
                    history: messages.slice(-12),
                }),
            });
            const data = (await response.json()) as { reply?: string; error?: string };

            if (!response.ok || !data.reply) {
                throw new Error(data.error || 'Unable to get a response.');
            }

            setMessages((current) => [
                ...current,
                { role: 'model', text: data.reply as string },
            ]);
        } catch (requestError) {
            setError(
                requestError instanceof Error
                    ? requestError.message
                    : 'Unable to get a response.',
            );
        } finally {
            setIsLoading(false);
        }
    }

    return (
        <div className="fixed bottom-5 right-5 z-[5] sm:bottom-8 sm:right-8">
            {isOpen && (
                <section
                    aria-label="Portfolio AI assistant"
                    className="mb-4 flex h-[min(620px,calc(100vh-120px))] w-[calc(100vw-2.5rem)] max-w-[380px] flex-col overflow-hidden rounded-2xl border border-white/10 bg-background-light shadow-2xl shadow-black/40"
                >
                    <header className="flex items-center justify-between border-b border-white/10 px-5 py-4">
                        <div>
                            <p className="font-anton text-lg text-primary">ASK VAIBHAV</p>
                            <p className="text-xs text-muted-foreground">AI portfolio assistant</p>
                        </div>
                        <button
                            type="button"
                            aria-label="Close chat"
                            onClick={() => setIsOpen(false)}
                            className="rounded-full p-2 text-muted-foreground transition hover:bg-white/10 hover:text-foreground"
                        >
                            <X size={18} />
                        </button>
                    </header>

                    <div
                        className="min-h-0 flex-1 space-y-3 overflow-y-auto p-4"
                        data-lenis-prevent
                    >
                        {messages.map((message, index) => (
                            <div
                                key={`${message.role}-${index}`}
                                className={`flex ${message.role === 'user' ? 'justify-end' : 'justify-start'}`}
                            >
                                <div
                                    className={`max-w-[85%] rounded-2xl px-4 py-3 text-sm leading-relaxed ${
                                        message.role === 'user'
                                            ? 'whitespace-pre-wrap rounded-br-sm bg-primary text-primary-foreground'
                                            : 'markdown-text rounded-bl-sm bg-black/20 text-foreground [&_p]:mb-2 [&_p:last-child]:mb-0 [&_strong]:font-semibold'
                                    }`}
                                >
                                    {message.role === 'model'
                                        ? parse(marked.parse(message.text) as string)
                                        : message.text}
                                </div>
                            </div>
                        ))}
                        {isLoading && (
                            <div className="flex justify-start">
                                <div className="rounded-2xl rounded-bl-sm bg-black/20 px-4 py-3">
                                    <LoaderCircle className="animate-spin text-primary" size={17} />
                                </div>
                            </div>
                        )}
                        {error && <p className="text-xs text-red-300">{error}</p>}
                        <div ref={messagesEndRef} />
                    </div>

                    <form onSubmit={sendMessage} className="border-t border-white/10 p-3">
                        <div className="flex items-center gap-2 rounded-xl border border-white/10 bg-black/20 px-3">
                            <input
                                value={input}
                                onChange={(event) => setInput(event.target.value)}
                                maxLength={1000}
                                placeholder="Ask about my work..."
                                aria-label="Message"
                                className="min-w-0 flex-1 bg-transparent py-3 text-sm outline-none placeholder:text-muted-foreground"
                            />
                            <button
                                type="submit"
                                aria-label="Send message"
                                disabled={!input.trim() || isLoading}
                                className="rounded-full p-2 text-primary transition hover:bg-primary/10 disabled:opacity-40"
                            >
                                <Send size={17} />
                            </button>
                        </div>
                    </form>
                </section>
            )}

            <button
                type="button"
                aria-label={isOpen ? 'Close portfolio assistant' : 'Open portfolio assistant'}
                onClick={() => setIsOpen((current) => !current)}
                className="ml-auto flex size-14 items-center justify-center rounded-full bg-primary text-primary-foreground shadow-lg shadow-primary/20 transition hover:scale-105"
            >
                {isOpen ? <X size={22} /> : <MessageCircle size={22} />}
            </button>
        </div>
    );
}
