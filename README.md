# Vaibhav Mahobiya — Portfolio

Personal portfolio site for Vaibhav Mahobiya, a Full Stack Developer specializing in Magento 2, PHP, Laravel, and React.js. Built with Next.js (App Router), Tailwind CSS, and GSAP.

## Features

- Animated hero, about, skills, experience, and project sections
- Individual project detail pages with tech stack, description, and screenshots
- AI portfolio assistant — an Ollama Cloud-powered chat widget that answers visitor questions using live data from the site (see below)
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

The site includes an Ollama Cloud-powered chat assistant. Create a `.env.local` file in the project root and add your own key from [ollama.com/settings/keys](https://ollama.com/settings/keys):

```env
OLLAMA_API_KEY=your_ollama_api_key
# Optional: defaults to gpt-oss:120b
OLLAMA_MODEL=gpt-oss:120b
```

The key is used only by the `/api/chat` server route and must never be added to client-side code or committed to Git. If a key has been shared publicly, revoke it and create a replacement before using it.

## License

This project is licensed under the [MIT License](./LICENSE).
