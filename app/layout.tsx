import type { Metadata } from 'next';
import { Anton, Roboto_Flex } from 'next/font/google';
import { ReactLenis } from 'lenis/react';

import 'lenis/dist/lenis.css';
import './globals.css';
import Footer from '@/components/Footer';
import ScrollProgressIndicator from '@/components/ScrollProgressIndicator';
import ParticleBackground from '@/components/ParticleBackground';
import Navbar from '@/components/Navbar';
import CustomCursor from '@/components/CustomCursor';
import Preloader from '../components/Preloader';
import StickyEmail from './_components/StickyEmail';
import { GoogleAnalytics } from '@next/third-parties/google';
import Script from 'next/script';
import { GENERAL_INFO, SOCIAL_LINKS } from '@/lib/data';

const antonFont = Anton({
    weight: '400',
    style: 'normal',
    subsets: ['latin'],
    variable: '--font-anton',
});

const robotoFlex = Roboto_Flex({
    weight: ['100', '400', '500', '600', '700', '800'],
    style: 'normal',
    subsets: ['latin'],
    variable: '--font-roboto-flex',
});

const SITE_URL = 'https://vaibhav-fullstack.vercel.app';
const SITE_TITLE = 'Vaibhav Mahobiya - Full Stack Developer';
const SITE_DESCRIPTION =
    'Vaibhav Mahobiya is a Full Stack Developer specializing in Magento 2, PHP, Laravel, and React.js. Explore his portfolio, projects, and experience.';

export const metadata: Metadata = {
    metadataBase: new URL(SITE_URL),
    title: SITE_TITLE,
    description: SITE_DESCRIPTION,
    openGraph: {
        title: SITE_TITLE,
        description: SITE_DESCRIPTION,
        url: SITE_URL,
        siteName: SITE_TITLE,
        images: ['/profile-pic.png'],
        type: 'website',
    },
    twitter: {
        card: 'summary',
        title: SITE_TITLE,
        description: SITE_DESCRIPTION,
        images: ['/profile-pic.png'],
    },
    verification: {
        google: 'h6onKUK-NgKy5AsDcXo1UDTLjGziTfhXrEU4EJ5IoTs',
    },
};

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang="en">
            <GoogleAnalytics gaId="G-RMH1P0B7SW" />
            <Script
                id="contentsquare"
                strategy="afterInteractive"
                src="https://t.contentsquare.net/uxa/a588bad1889e4.js"
            />
            <Script id="person-schema" type="application/ld+json">
                {JSON.stringify({
                    '@context': 'https://schema.org',
                    '@type': 'Person',
                    name: 'Vaibhav Mahobiya',
                    url: SITE_URL,
                    image: `${SITE_URL}/profile-pic.png`,
                    jobTitle: 'Full Stack Developer',
                    email: GENERAL_INFO.email,
                    sameAs: SOCIAL_LINKS.map((link) => link.url),
                })}
            </Script>
            <body
                className={`${antonFont.variable} ${robotoFlex.variable} antialiased`}
            >
                <ReactLenis
                    root
                    options={{
                        lerp: 0.1,
                        duration: 1.4,
                    }}
                >
                    {/* <a
                        href="https://forms.gle/t73XYJgWD5cJNr6e8"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="px-4 block bg-black text-center z-[1] text-sm py-2 hover:text-primary transition-all"
                    >
                        Full Stack dev? I&apos;ll help you polish your resume —
                        completely free.
                    </a> */}
                    <Navbar />
                    <main>{children}</main>
                    <Footer />

                    <CustomCursor />
                    <Preloader />
                    <ScrollProgressIndicator />
                    <ParticleBackground />
                    <StickyEmail />
                </ReactLenis>
            </body>
        </html>
    );
}
