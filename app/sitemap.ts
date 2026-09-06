import type { MetadataRoute } from 'next';
import { PROJECTS } from '@/lib/data';

const SITE_URL = 'https://vaibhav-fullstack.vercel.app';

export default function sitemap(): MetadataRoute.Sitemap {
    return [
        {
            url: SITE_URL,
            lastModified: new Date(),
            changeFrequency: 'monthly',
            priority: 1,
        },
        ...PROJECTS.map((project) => ({
            url: `${SITE_URL}/projects/${project.slug}`,
            lastModified: new Date(),
            changeFrequency: 'monthly' as const,
            priority: 0.7,
        })),
    ];
}
