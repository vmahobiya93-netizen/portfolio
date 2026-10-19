import { ExternalLink } from 'lucide-react';

export default function LiveProjectLink({
    url,
    title,
}: {
    url?: string;
    title: string;
}) {
    if (!url) return null;
    return (
        <a
            href={url}
            target="_blank"
            rel="noopener noreferrer"
            aria-label={`View ${title} live site (opens in a new tab)`}
            className="inline-flex min-h-11 items-center gap-2 rounded-full border border-primary/40 px-4 py-2 text-sm font-medium text-primary transition-colors hover:bg-primary hover:text-primary-foreground focus-visible:bg-primary focus-visible:text-primary-foreground"
        >
            View live site <ExternalLink size={16} aria-hidden="true" />
        </a>
    );
}
