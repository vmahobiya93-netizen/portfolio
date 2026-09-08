# Vaibhav Mahobiya — Portfolio

Personal portfolio site for Vaibhav Mahobiya, a Full Stack Developer specializing in Magento 2, PHP, Laravel, and React.js. Built with Next.js (App Router), Tailwind CSS, and GSAP.

## Features

- Animated hero, about, skills, experience, and project sections
- Individual project detail pages with tech stack, description, and screenshots
- AI portfolio assistant — a Gemini-powered chat widget that answers visitor questions using live data from the site (see below)
- SEO: sitemap, robots.txt, Open Graph metadata, and JSON-LD structured data

## Tech Stack

Next.js, React, TypeScript, Tailwind CSS, GSAP, Lenis (smooth scroll)

## Getting Started

```bash
pnpm install
pnpm dev
```

Open [http://localhost:3000](http://localhost:3000) to see the result.

### AI portfolio assistant

The site includes a Gemini-powered chat assistant. Create a `.env.local` file in the project root and add your own key from Google AI Studio:

```env
GEMINI_API_KEY=your_gemini_api_key
# Optional: defaults to gemini-2.0-flash
GEMINI_MODEL=gemini-2.0-flash
```

The key is used only by the `/api/chat` server route and must never be added to client-side code or committed to Git. If a key has been shared publicly, revoke it and create a replacement before using it.

## License

This project is licensed under the [MIT License](./LICENSE).
