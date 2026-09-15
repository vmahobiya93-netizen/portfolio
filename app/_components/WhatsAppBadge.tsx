'use client';

import { useChatbot } from './ChatbotContext';

const WHATSAPP_NUMBER = '919074215693';
const WHATSAPP_MESSAGE =
    "Hi Vaibhav, I saw your portfolio and I'd like to discuss a project with you.";

const WhatsAppBadge = () => {
    const { isOpen } = useChatbot();

    const whatsappUrl = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(
        WHATSAPP_MESSAGE
    )}`;

    if (isOpen) return null;

    return (
        <div className="fixed bottom-24 right-5 z-[5] sm:bottom-28 sm:right-8">
            <a
                href={whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Chat on WhatsApp"
                className="group relative flex h-12 w-12 items-center justify-center rounded-full bg-[#25D366] shadow-lg shadow-black/30 transition-transform hover:scale-110 sm:h-14 sm:w-14"
            >
                <span className="absolute inset-0 rounded-full bg-[#25D366] opacity-75 animate-ping [animation-duration:2.5s]" />
                <svg viewBox="0 0 24 24" fill="white" className="relative h-6 w-6 sm:h-7 sm:w-7">
                    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.876 1.213 3.074.149.198 2.096 3.2 5.077 4.487.71.306 1.263.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347z" />
                    <path d="M12.001 2C6.478 2 2 6.478 2 12c0 1.86.51 3.68 1.478 5.27L2 22l4.856-1.457A9.96 9.96 0 0012 22c5.523 0 10-4.478 10-10S17.523 2 12.001 2zm0 18.2c-1.746 0-3.44-.472-4.92-1.365l-.352-.21-2.882.865.876-2.808-.23-.363A8.185 8.185 0 013.8 12c0-4.522 3.678-8.2 8.2-8.2s8.2 3.678 8.2 8.2-3.678 8.2-8.199 8.2z" />
                </svg>
                <span className="pointer-events-none absolute right-full mr-3 top-1/2 -translate-y-1/2 whitespace-nowrap rounded-full bg-card px-3 py-1.5 text-sm text-foreground opacity-0 shadow-lg transition-opacity duration-200 group-hover:opacity-100">
                    Chat on WhatsApp
                </span>
            </a>
        </div>
    );
};

export default WhatsAppBadge;
