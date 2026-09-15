'use client';

import { createContext, useContext, useState, type ReactNode } from 'react';

type ChatbotContextValue = {
    isOpen: boolean;
    setIsOpen: (isOpen: boolean) => void;
};

const ChatbotContext = createContext<ChatbotContextValue | null>(null);

export const ChatbotProvider = ({ children }: { children: ReactNode }) => {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <ChatbotContext.Provider value={{ isOpen, setIsOpen }}>
            {children}
        </ChatbotContext.Provider>
    );
};

export const useChatbot = () => {
    const context = useContext(ChatbotContext);

    if (!context) {
        throw new Error('useChatbot must be used within a ChatbotProvider');
    }

    return context;
};
