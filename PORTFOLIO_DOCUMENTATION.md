# Vaibhav Mahobiya - Portfolio Documentation

Last documented: 20 October 2026 (Asia/Calcutta).

This is a reference to the current project source, covering public portfolio content and implementation. Project descriptions and contributions are recorded as supplied in the portfolio; external websites, employment details, and deployment status were not independently verified for this document. This file is a snapshot and does not update automatically when the code changes. Credentials and private environment values are deliberately excluded.

## Contents

1. [Profile and positioning](#profile-and-positioning)
2. [Contact and links](#contact-and-links)
3. [Experience](#experience)
4. [Services](#services)
5. [Skills](#skills)
6. [Project directory](#project-directory)
7. [Complete project records](#complete-project-records)
8. [Website structure and visitor flows](#website-structure-and-visitor-flows)
9. [Design and animations](#design-and-animations)
10. [Technical architecture](#technical-architecture)
11. [Configuration and external services](#configuration-and-external-services)
12. [Local development and deployment](#local-development-and-deployment)
13. [Editing guide](#editing-guide)
14. [Content maintenance](#content-maintenance)

## Profile and positioning

- **Name:** Vaibhav Mahobiya
- **Role:** Full Stack Developer
- **Primary audience:** Freelance clients looking for project development, improvements, or maintenance.
- **Secondary audience:** Recruiters and teams hiring for full-time or remote roles.
- **Availability shown:** Open to freelance projects and remote full-time roles.
- **Positioning:** Full stack development across frontend, backend, eCommerce, business applications, and API integrations. Magento is one area of expertise, not the sole specialization.

### Professional introduction

Vaibhav is a full stack developer whose work spans PHP and Laravel backends, React interfaces, eCommerce platforms, and API integrations. He builds and improves web applications and business systems, translating requirements into usable functionality.

### Current hero content

Heading: **HI, I'M VAIBHAV! FULL STACK DEVELOPER.**

The introduction describes building web applications, eCommerce platforms, and API integrations, connecting backend systems with the interfaces people use. It includes the automatically calculated experience duration. Actions are **Discuss a project**, **View my work**, and a recruiter link to the experience section.

## Contact and links

| Channel | Value |
| --- | --- |
| Email | Vmahobiya93@gmail.com |
| Phone | +91 90742 15693 |
| WhatsApp | https://wa.me/919074215693 |
| github | https://github.com/vmahobiya93-netizen |
| linkedin | https://www.linkedin.com/in/vaibhav-mahobiya-32a5b63a9 |
| Portfolio URL configured in code | https://vaibhav-fullstack.vercel.app |
| Source repository | https://github.com/vmahobiya93-netizen/portfolio |
| Upwork URL stored in data | https://www.upwork.com/freelancers/Vaibhav |

The Upwork value is stored in GENERAL_INFO; its presence in data does not mean it is displayed in the current social navigation or that its destination has been verified. The configured website URL is used for metadata and sitemap generation.

Contact defaults stored in lib/data.ts:

- Email subject: Let's collaborate on a project
- Email body: Hi, I am reaching out to you because...

## Experience

- **Full Stack Developer**, Infosol Technosol Pvt Ltd — Apr 2023 - Present

### Automatic duration

- Start month: **April 2023**.
- Snapshot on 20 October 2026: **3 years 6 months**.
- Source: [lib/experience.ts](lib/experience.ts).
- Calculation uses calendar months in **Asia/Kolkata**, not fractional years or exact employment days.
- November 2026 displays 3 years 7 months; April 2027 displays 4 years.
- [components/ExperienceDuration.tsx](components/ExperienceDuration.tsx) updates after mount, every minute, and on window focus. A consistent placeholder is used before hydration.
- The same helper supplies the chatbot context at request time.
- Changing the start date requires updating the helper and checking the employment date in lib/data.ts.

## Services

| Service | Offering |
| --- | --- |
| eCommerce development | Storefront improvements, custom functionality, integrations, and upgrades. |
| Custom web applications | Dashboards, HR systems, and internal tools with Laravel and React. |
| API integrations | REST and GraphQL connections between storefronts, applications, and third-party services. |
| Maintenance and improvements | Bug fixes, database optimization, and ongoing development for existing websites and applications. |

### Working process

Discuss requirements → agree on scope and milestones → build and review together → launch and handover.

The portfolio does not publish fixed rates, project budgets, guaranteed turnaround times, or a guaranteed response time.

## Skills

### Backend

- PHP
- Laravel
- Node.js
- CodeIgniter
- OpenCart

### Magento 2

- Magento 2
- Custom Module & Extension Development
- MVC & OOP Architecture
- Theme Customization
- Multi-store Management
- Upgrades & Deployments

### Frontend

- React.js
- JavaScript
- jQuery
- Ajax
- HTML5
- CSS3
- Tailwind CSS

### Database

- MySQL
- PostgreSQL
- Query Optimization & Performance Tuning

### Other Platforms

- WordPress
- Shopify

### APIs & Integration

- REST API Design & Development
- Postman
- Third-Party Integrations

### Performance

- Caching Techniques
- Lazy Loading
- Asset Minification
- Code & Query Optimization

### Tools & DevOps

- Git
- VS Code
- Linux
- CI/CD
- Adobe Experience Manager

### Methodologies

- JIRA
- Agile/Scrum
- Coding Standards & Clean Architecture

### App

- React Native
- Flutter

Skills are maintained in [lib/data.ts](lib/data.ts). The display uses compact category panels, small technology labels and icons, two columns on larger screens, and one column on mobile. Individual project stacks may include technologies that are not listed as separate entries above.

## Project directory

There are **14 project records**. Featured order: **Coach → Girlion → Nespresso → Jim Corbett Wedding**. HRM System is in Explore more projects.

| Project | Placement | Detail route | Live website |
| --- | --- | --- | --- |
| Jim Corbett Wedding | Featured | /projects/jim-corbett-wedding | [https://jimcorbettwedding.in/](https://jimcorbettwedding.in/) |
| Girlion | Featured | /projects/girlion | [https://www.girlion.in/](https://www.girlion.in/) |
| Katespade | Explore more projects | /projects/katespade | [https://katespade.co.id](https://katespade.co.id) |
| Coach | Featured | /projects/coach | [https://id.coach.com/](https://id.coach.com/) |
| Methena | Explore more projects | /projects/methena | Not provided |
| HRM System | Explore more projects | /projects/hrm-system | Not provided |
| Nespresso | Featured | /projects/nespresso | [https://www.nespresso.co.id/id/en](https://www.nespresso.co.id/id/en) |
| Cole Haan | Explore more projects | /projects/cole-haan | [https://colehaan.co.id/](https://colehaan.co.id/) |
| Mothercare | Explore more projects | /projects/mothercare | [https://www.mothercare.co.id/](https://www.mothercare.co.id/) |
| Ecabinets | Explore more projects | /projects/ecabinets | [https://ecabinets.com/](https://ecabinets.com/) |
| DrSnooze | Explore more projects | /projects/drsnooze | [https://www.drsnooze.com/](https://www.drsnooze.com/) |
| H2O Hub | Explore more projects | /projects/h2o-hub | [https://h2ohub.com/](https://h2ohub.com/) |
| SilSal | Explore more projects | /projects/silsal | [https://silsal.qa/](https://silsal.qa/) |
| Systemq | Explore more projects | /projects/systemq | [https://systemq.com/](https://systemq.com/) |

Live-site buttons are only rendered when liveUrl exists. Their URLs come from project data and are not uptime guarantees. Internal project-detail links and external live-site links are separate actions.

## Complete project records

The following records preserve the descriptions, features, and contributions in lib/data.ts. The Magento and Laravel entries are company projects at Infosol Technosol Pvt Ltd, where Vaibhav contributed as a developer rather than owning the client sites. Appointment booking work is specifically documented for Coach, Kate Spade, and Cole Haan. No project year or measured outcome is published because those details have not been verified; do not invent them.

### Jim Corbett Wedding

- **Slug:** jim-corbett-wedding
- **Placement:** Featured
- **Detail route:** /projects/jim-corbett-wedding
- **Live website:** https://jimcorbettwedding.in/
- **Source code:** Not provided in the project data
- **Project year:** Not specified
- **Tech stack:** Laravel, PHP, jQuery, GTM, HTML, CSS

#### Description and features

A destination wedding planning website for Jim Corbett, built on Laravel to showcase venues, services, and packages for couples planning a wedding in the hills.

Key Features:

- 💍 Service Showcase: Wedding band, bridal makeup, mehendi artists, transportation, jungle safari, and wedding chariot offerings

- 🏞️ Venue Gallery: Curated venue and destination photography

- 📝 Request a Quote: Lead-capture form for budget, guest count, and event dates

- 📰 Blog: Wedding planning guides and tips content section

- 📱 Fully Responsive: Optimized across desktop and mobile

#### Listed role and contributions

Full Stack Developer at Infosol Technosol Pvt Ltd (company project)

- Built and maintained the Laravel website's venue gallery and service showcase using jQuery.

- Integrated Google Tag Manager for site tracking.

#### Image assets

- Thumbnail: /projects/thumbnail/jim-corbett-wedding.webp
- Long thumbnail: /projects/long/jim-corbett-wedding.webp
- Screenshot: /projects/images/jim-corbett-wedding-1.webp

### Girlion

- **Slug:** girlion
- **Placement:** Featured
- **Detail route:** /projects/girlion
- **Live website:** https://www.girlion.in/
- **Source code:** Not provided in the project data
- **Project year:** Not specified
- **Tech stack:** Laravel, PHP, jQuery, GTM, HTML, CSS

#### Description and features

A travel and booking platform for Gir National Park, built on Laravel to support safari, hotel, and tour package reservations.

Key Features:

- 🦁 Safari Booking: Date and guest-based availability checking and booking widget

- 🏨 Accommodation Listings: Hotel and resort packages with pricing

- 📍 Nearby Attractions: Curated guide to nearby dams, museums, temples, and zoos

- ⭐ Reviews: Customer testimonials and ratings section

- 📰 Blog: Safari and travel guide content section

- 📱 Fully Responsive: Optimized across desktop and mobile

#### Listed role and contributions

Full Stack Developer at Infosol Technosol Pvt Ltd (company project)

- Built Laravel backend logic for safari, hotel, and tour-package listings and bookings.

- Integrated Google Tag Manager for tracking and analytics.

#### Image assets

- Thumbnail: /projects/thumbnail/girlion.webp
- Long thumbnail: /projects/long/girlion.webp
- Screenshot: /projects/images/girlion-1.webp

### Katespade

- **Slug:** katespade
- **Placement:** Explore more projects
- **Detail route:** /projects/katespade
- **Live website:** https://katespade.co.id
- **Source code:** Not provided in the project data
- **Project year:** Not specified
- **Tech stack:** Magento 2, PHP, HTML, CSS, jQuery, Ajax, MySQL, Git, REST API, GraphQL, Postman, Linux, JIRA

#### Description and features

An e-commerce storefront built on Magento 2 for Kate Spade Indonesia, covering the full shopping experience: homepage campaigns, product catalog, and checkout.

Key Features:

- 🛍️ Product Catalog: Category browsing and merchandising for handbags, wallets, jewelry, and footwear

- 🎯 Campaign Banners: Dynamic homepage promotions and seasonal collection highlights

- 🔌 API Integrations: GraphQL and REST APIs powering storefront data and third-party services

- 📱 Fully Responsive: Optimized across desktop and mobile

#### Listed role and contributions

Full Stack Developer at Infosol Technosol Pvt Ltd (company project)

- Built the appointment booking feature for the Kate Spade Indonesia storefront.

- Contributed Magento 2 backend customization for its catalog and seasonal campaigns.

#### Image assets

- Thumbnail: /projects/thumbnail/katespade.webp
- Long thumbnail: /projects/long/katespade.webp
- Screenshot: /projects/images/katespade-1.webp

### Coach

- **Slug:** coach
- **Placement:** Featured
- **Detail route:** /projects/coach
- **Live website:** https://id.coach.com/
- **Source code:** Not provided in the project data
- **Project year:** Not specified
- **Tech stack:** Magento 2, PHP, HTML, CSS, jQuery, Ajax, MySQL, Git, REST API, GraphQL, Postman, Linux, JIRA

#### Description and features

An e-commerce storefront built on Magento 2 for Coach, covering seasonal campaign landing pages, product catalog, and checkout.

Key Features:

- 🛍️ Product Catalog: Category browsing and merchandising for bags, accessories, and apparel

- 🎯 Campaign Landing Pages: Seasonal collection and collaboration showcases

- 🔌 API Integrations: GraphQL and REST APIs powering storefront data and third-party services

- 📱 Fully Responsive: Optimized across desktop and mobile

#### Listed role and contributions

Full Stack Developer at Infosol Technosol Pvt Ltd (company project)

- Built the appointment booking feature for the Coach storefront.

- Contributed Magento 2 backend work for its product catalog and seasonal campaigns.

#### Image assets

- Thumbnail: /projects/thumbnail/coach.webp
- Long thumbnail: /projects/long/coach.webp
- Screenshot: /projects/images/coach-1.webp
- Screenshot: /projects/images/coach-2.webp

### Methena

- **Slug:** methena
- **Placement:** Explore more projects
- **Detail route:** /projects/methena
- **Live website:** Not provided in the project data
- **Source code:** Not provided in the project data
- **Project year:** Not specified
- **Tech stack:** WordPress, PHP, jQuery

#### Description and features

A WordPress-based marketing and product site for Methena, an AI-driven college admissions guidance platform.

Key Features:

- 🎯 Program Pages: Grade 1-6 and Grade 7-12 package showcases with feature breakdowns

- 📊 Product Walkthroughs: Sectioned feature tour of the admissions intelligence dashboard

- 👥 Team & Testimonials: Leadership bios and student/parent testimonial sections

- 📱 Fully Responsive: Optimized across desktop and mobile

#### Listed role and contributions

Full Stack Developer

- ✅ Backend: WordPress theme and custom PHP development

- 🎨 Frontend: Interactive page sections and UI built with jQuery

#### Image assets

- Thumbnail: /projects/thumbnail/methena.webp
- Long thumbnail: /projects/long/methena.webp
- Screenshot: /projects/images/methena-1.webp

### HRM System

- **Slug:** hrm-system
- **Placement:** Explore more projects
- **Detail route:** /projects/hrm-system
- **Live website:** Not provided in the project data
- **Source code:** Not provided in the project data
- **Project year:** Not specified
- **Tech stack:** Laravel, React.js, PHP, JavaScript, Tailwind CSS, REST API, MySQL, Git, Postman

#### Description and features

Human Resource Management System: a complete HRM platform built with Laravel and React.js to manage employee data, attendance, and internal workflows.

Key Features:

- 🏢 HR Operations: Employee record management, attendance tracking, and internal workflow handling

- 🔒 Secure Access: Role-based access control (RBAC) for protected operations

- 🔌 API Integrations: REST APIs powering core HR operations and data management

- 📱 Fully Responsive: Optimized across desktop and mobile

#### Listed role and contributions

Full Stack Developer at Infosol Technosol Pvt Ltd (company project)

- Architected and built an HRM application covering employee records, attendance, and internal workflows.

- Implemented role-based access control, Laravel REST APIs, and a responsive React interface.

#### Image assets

- Thumbnail: /projects/thumbnail/hrm.webp
- Long thumbnail: /projects/long/hrm.webp
- Screenshot: /projects/images/hrm-1.webp

### Nespresso

- **Slug:** nespresso
- **Placement:** Featured
- **Detail route:** /projects/nespresso
- **Live website:** https://www.nespresso.co.id/id/en
- **Source code:** Not provided in the project data
- **Project year:** Not specified
- **Tech stack:** Magento 2, PHP, HTML, CSS, jQuery, Ajax, MySQL, Git, REST API, GraphQL, Postman, Linux, JIRA

#### Description and features

An e-commerce storefront built on Magento 2 for Nespresso, covering the product catalog, machine and capsule listings, and checkout.

Key Features:

- ☕ Product Catalog: Category browsing and merchandising for machines, capsules, and accessories

- 🔌 API Integrations: REST APIs powering storefront data and third-party services

- 📱 Fully Responsive: Optimized across desktop and mobile

#### Listed role and contributions

Full Stack Developer at Infosol Technosol Pvt Ltd (company project)

- Built a product comparison feature that lets shoppers compare up to three products.

- Built a recommendation quiz that suggests relevant products based on shoppers' answers.

#### Image assets

- Thumbnail: /projects/thumbnail/nespresso.webp
- Long thumbnail: /projects/long/nespresso.webp
- Screenshot: /projects/images/nespresso-1.webp

### Cole Haan

- **Slug:** cole-haan
- **Placement:** Explore more projects
- **Detail route:** /projects/cole-haan
- **Live website:** https://colehaan.co.id/
- **Source code:** Not provided in the project data
- **Project year:** Not specified
- **Tech stack:** Magento 2, PHP, HTML, CSS, jQuery, Ajax, MySQL, Git, REST API, GraphQL, Postman, Linux, JIRA

#### Description and features

An e-commerce storefront built on Magento 2 for Cole Haan, covering the product catalog, collection pages, and checkout.

Key Features:

- 👞 Product Catalog: Category browsing and merchandising for footwear, bags, and accessories

- 🔌 API Integrations: REST APIs powering storefront data and third-party services

- 📱 Fully Responsive: Optimized across desktop and mobile

#### Listed role and contributions

Full Stack Developer at Infosol Technosol Pvt Ltd (company project)

- Built the appointment booking feature for the Cole Haan storefront.

- Contributed Magento 2 backend customization for its footwear, bags, and accessories catalog.

#### Image assets

- Thumbnail: /projects/thumbnail/colehaan.webp
- Long thumbnail: /projects/long/colehaan.webp
- Screenshot: /projects/images/colehaan-1.webp

### Mothercare

- **Slug:** mothercare
- **Placement:** Explore more projects
- **Detail route:** /projects/mothercare
- **Live website:** https://www.mothercare.co.id/
- **Source code:** Not provided in the project data
- **Project year:** Not specified
- **Tech stack:** Magento 2, PHP, HTML, CSS, jQuery, Ajax, MySQL, Git, REST API, GraphQL, Postman, Linux, JIRA

#### Description and features

An e-commerce storefront built on Magento 2 for Mothercare, covering the product catalog, category pages, and checkout.

Key Features:

- 🛍️ Product Catalog: Category browsing and merchandising for baby, maternity, and kids' products

- 🔌 API Integrations: REST APIs powering storefront data and third-party services

- 📱 Fully Responsive: Optimized across desktop and mobile

#### Listed role and contributions

Full Stack Developer at Infosol Technosol Pvt Ltd (company project)

- Contributed Magento 2 backend development for Mothercare's baby, maternity, and children's product catalog.

- Worked on custom modules and third-party API integrations as part of the Infosol development team.

#### Image assets

- Thumbnail: /projects/thumbnail/mothercare.webp
- Long thumbnail: /projects/long/mothercare.webp
- Screenshot: /projects/images/mothercare-1.webp

### Ecabinets

- **Slug:** ecabinets
- **Placement:** Explore more projects
- **Detail route:** /projects/ecabinets
- **Live website:** https://ecabinets.com/
- **Source code:** Not provided in the project data
- **Project year:** Not specified
- **Tech stack:** Magento 2, PHP, HTML, CSS, jQuery, Ajax, MySQL, Git, REST API, GraphQL, Postman, Linux, JIRA

#### Description and features

An e-commerce storefront built on Magento 2 for Ecabinets, covering the product catalog, category pages, and checkout.

Key Features:

- 🗄️ Product Catalog: Category browsing and merchandising for cabinet products

- 🔌 API Integrations: GraphQL API powering storefront data

- 📱 Fully Responsive: Optimized across desktop and mobile

#### Listed role and contributions

Full Stack Developer at Infosol Technosol Pvt Ltd (company project)

- Contributed Magento 2 backend work for Ecabinets' cabinet catalog and GraphQL-powered storefront.

- Worked on custom modules and database performance tuning as part of the Infosol development team.

#### Image assets

- Thumbnail: /projects/thumbnail/ecabinets.webp
- Long thumbnail: /projects/long/ecabinets.webp
- Screenshot: /projects/images/ecabinets-1.webp

### DrSnooze

- **Slug:** drsnooze
- **Placement:** Explore more projects
- **Detail route:** /projects/drsnooze
- **Live website:** https://www.drsnooze.com/
- **Source code:** Not provided in the project data
- **Project year:** Not specified
- **Tech stack:** Magento 2, PHP, HTML, CSS, jQuery, Ajax, MySQL, Git, REST API, GraphQL, Postman, Linux, JIRA

#### Description and features

An e-commerce storefront built on Magento 2 for DrSnooze, covering the product catalog, category pages, and checkout.

Key Features:

- 🛍️ Product Catalog: Category browsing and merchandising

- 🔌 API Integrations: GraphQL API powering storefront data

- 📱 Fully Responsive: Optimized across desktop and mobile

#### Listed role and contributions

Full Stack Developer at Infosol Technosol Pvt Ltd (company project)

- Contributed Magento 2 backend customization for DrSnooze's product and category pages.

- Worked on caching, query optimization, and deployment support as part of the Infosol development team.

#### Image assets

- Thumbnail: /projects/thumbnail/drsnooze.webp
- Long thumbnail: /projects/long/drsnooze.webp
- Screenshot: /projects/images/drsnooze-1.webp

### H2O Hub

- **Slug:** h2o-hub
- **Placement:** Explore more projects
- **Detail route:** /projects/h2o-hub
- **Live website:** https://h2ohub.com/
- **Source code:** Not provided in the project data
- **Project year:** Not specified
- **Tech stack:** BigCommerce, PHP, jQuery

#### Description and features

An e-commerce storefront built on BigCommerce for H2O Hub, covering the product catalog, category pages, and checkout.

Key Features:

- 🛍️ Product Catalog: Category browsing and merchandising

- 📱 Fully Responsive: Optimized across desktop and mobile

#### Listed role and contributions

Full Stack Developer

- ✅ Backend: Custom PHP development on BigCommerce

- 🎨 Frontend: Interactive UI built with jQuery

#### Image assets

- Thumbnail: /projects/thumbnail/h2o-hub.webp
- Long thumbnail: /projects/long/h2o-hub.webp
- Screenshot: /projects/images/h2o-hub-1.webp

### SilSal

- **Slug:** silsal
- **Placement:** Explore more projects
- **Detail route:** /projects/silsal
- **Live website:** https://silsal.qa/
- **Source code:** Not provided in the project data
- **Project year:** Not specified
- **Tech stack:** Magento 2, PHP, HTML, CSS, jQuery, Ajax, MySQL, Git, REST API, GraphQL, Postman, Linux, JIRA

#### Description and features

An e-commerce storefront built on Magento 2 for SilSal, covering the product catalog, category pages, and checkout.

Key Features:

- 💎 Product Catalog: Category browsing and merchandising for jewelry products

- 📱 Fully Responsive: Optimized across desktop and mobile

#### Listed role and contributions

Full Stack Developer at Infosol Technosol Pvt Ltd (company project)

- Contributed Magento 2 backend development for SilSal's jewelry storefront.

- Worked on custom modules, storefront performance, and production maintenance as part of the Infosol development team.

#### Image assets

- Thumbnail: /projects/thumbnail/silsal.webp
- Long thumbnail: /projects/long/silsal.webp
- Screenshot: /projects/images/silsal-1.webp

### Systemq

- **Slug:** systemq
- **Placement:** Explore more projects
- **Detail route:** /projects/systemq
- **Live website:** https://systemq.com/
- **Source code:** Not provided in the project data
- **Project year:** Not specified
- **Tech stack:** BigCommerce, PHP, JavaScript

#### Description and features

An e-commerce storefront built on BigCommerce for Systemq, covering the product catalog, category pages, and checkout.

Key Features:

- 🛍️ Product Catalog: Category browsing and merchandising

- 📱 Fully Responsive: Optimized across desktop and mobile

#### Listed role and contributions

Full Stack Developer

- ✅ Backend: Custom PHP development on BigCommerce

- 🎨 Frontend: Interactive UI built with JavaScript

#### Image assets

- Thumbnail: /projects/thumbnail/systemq.webp
- Long thumbnail: /projects/long/systemq.webp
- Screenshot: /projects/images/systemq-1.webp

## Website structure and visitor flows

### Homepage order

1. Hero — introduction, automatic experience, project/work links, and recruiter link.
2. Featured Projects — Coach, Girlion, Nespresso, and Jim Corbett Wedding.
3. Explore more projects — expandable list with screenshots, technologies, and project/live links.
4. Services — four service offerings and collaboration process.
5. About — professional introduction.
6. Experience — company, role, employment dates, and résumé/contact links.
7. My Stack — compact grouped skills.
8. Contact and footer — inquiry form, direct email, WhatsApp, and portfolio-source link.

### Navigation anchors

| Section | Anchor |
| --- | --- |
| Hero | #banner |
| Featured work | #selected-projects |
| Services | #services |
| About | #about-me |
| Experience | #my-experience |
| Skills | #my-stack |
| Contact | #contact |

### Project detail pages

Each /projects/[slug] page looks up its record in PROJECTS. Unknown slugs return a not-found page. Known slugs are generated from the dataset during the build. Detail pages show project title, stack, description, contributions, screenshots, and optional live/source links. Project screenshots use small WebP previews on the page, with the full WebP image available from the open-image link. Project metadata is derived from the project title, stack, and description.

### Contact form

- Inquiry types: Project or Job opportunity.
- Required information: name, email, and message.
- Optional project fields: budget and timeline.
- Continue to email opens an encoded mailto draft in the visitor's email application.
- The visitor must review and send the message from that application.
- This form does not send email through a server or store submissions in a database.
- Direct email and WhatsApp links provide alternatives.
- The résumé action requests a résumé by email; no downloadable résumé PDF is currently included.

### Floating and global controls

WhatsApp link, AI chatbot, sticky email, custom cursor, page progress indicator, page transitions, loading animation, and background particles are part of the site. The WhatsApp badge is hidden while the chatbot is open.

## Design and animations

- Overall palette: dark navy background with turquoise accents.
- Global background: hsl(222 47% 11%).
- Lighter background: hsl(222 30% 18%).
- Shared primary turquoise: hsl(174 100% 45%).
- Hero accent: hsl(var(--primary)), matching the chatbot button.
- Hero-specific background: #0b111b, with #101923 and #0e1620 geometric areas.
- Fonts: Roboto Flex and Anton, loaded through next/font/google.
- Hero: bold left-aligned introduction, rectangular main action, circular-arrow work action, and portrait in a rounded hexagonal SVG frame.
- Portrait source: public/profile-pic.jpg.
- Animations: GSAP/ScrollTrigger section movement, project hover effects, SVG arrow animation, custom cursor, particles, and preloader; Lenis supplies smooth scrolling.
- GSAP effects, decorative particles, the preloader, custom cursor, and smooth-wheel scrolling are disabled below 768px and when the visitor requests reduced motion. Native scrolling and visible project content remain available.
- Project source screenshots are retained as originals; `scripts/optimize-project-images.py` creates WebP thumbnails, detail previews, and full screenshots. Public project URLs in `lib/data.ts` point to WebP assets. The generated WebP assets total about 17 MB versus about 258 MB for the source images; browser transfer sizes vary with caching and Next.js image optimization.
- To regenerate these assets after changing a screenshot, install Pillow (`python -m pip install Pillow`) and run `python scripts/optimize-project-images.py` from the repository root.

Hero appearance is scoped to [app/_components/Banner.module.css](app/_components/Banner.module.css). Shared tokens are in [app/globals.css](app/globals.css) and exposed through [tailwind.config.ts](tailwind.config.ts).

## Technical architecture

- Framework: Next.js App Router.
- Language: TypeScript / TSX.
- UI: React, Tailwind CSS, Lucide icons.
- Content: local TypeScript data rather than a CMS.
- Server functionality: Next.js route handlers for chat and visit notifications.
- Styling: global Tailwind/theme rules plus a CSS module for the hero.
- No application database is configured for portfolio content or contact submissions.

### Runtime dependencies declared in package.json

| Package | Version/range |
| --- | --- |
| @gsap/react | ^2.1.1 |
| @next/third-parties | ^15.2.0 |
| class-variance-authority | ^0.7.0 |
| clsx | ^2.1.1 |
| gsap | ^3.12.5 |
| html-react-parser | ^5.2.3 |
| lenis | ^1.1.16 |
| lucide-react | ^0.460.0 |
| marked | ^18.0.12 |
| next | 15.2.8 |
| react | 19.0.0-rc-66855b96-20241106 |
| react-dom | 19.0.0-rc-66855b96-20241106 |
| tailwind-merge | ^2.5.4 |
| tailwindcss-animate | ^1.0.7 |

### Development dependencies declared in package.json

| Package | Version/range |
| --- | --- |
| @svgr/cli | ^8.1.0 |
| @types/node | ^20 |
| @types/react | ^18 |
| @types/react-dom | ^18 |
| eslint | ^8 |
| eslint-config-next | 15.0.3 |
| postcss | ^8 |
| tailwindcss | ^3.4.15 |
| typescript | ^5 |

Version ranges above are declarations, not a claim that each range resolves to its latest release. pnpm-lock.yaml records the resolved dependency graph.

### Source map

| File or directory | Responsibility |
| --- | --- |
| lib/data.ts | Contact, social links, skills, employment, and all project records |
| lib/experience.ts | Calendar-month experience calculation |
| components/ExperienceDuration.tsx | Hydration-safe client display and refresh |
| app/page.tsx | Homepage section order |
| app/layout.tsx | Global layout, fonts, metadata, analytics, animation wrappers, and floating widgets |
| app/_components/Banner.tsx | Hero content, portrait frame, links, and scroll animation |
| app/_components/Banner.module.css | Hero-specific layout, colors, and responsive styles |
| app/_components/ProjectList.tsx | Featured order, expandable projects, and preview behavior |
| app/_components/Project.tsx | Featured project row and hover interaction |
| components/LiveProjectLink.tsx | Labeled external live-site button |
| app/projects/[slug]/page.tsx | Project lookup, static routes, and metadata |
| app/projects/[slug]/_components/ProjectDetails.tsx | Project detail presentation and screenshots |
| app/_components/Services.tsx | Service descriptions and working process |
| app/_components/AboutMe.tsx | About content |
| app/_components/Experiences.tsx | Employment and recruiter section |
| app/_components/Skills.tsx | Compact skills presentation |
| app/_components/Contact.tsx | Inquiry form and email-draft creation |
| components/Footer.tsx | Contact section and footer |
| components/Navbar.tsx | Desktop links and expandable menu |
| app/_components/AIChatbot.tsx | Chat interface |
| app/_components/ChatbotContext.tsx | Shared chatbot-open state |
| app/api/chat/route.ts | Ollama request handling and portfolio context |
| app/_components/VisitTracker.tsx | Client visit notification trigger |
| app/api/notify-visit/route.ts | Location lookup and Telegram notifications |
| app/globals.css | Theme variables and shared CSS |
| tailwind.config.ts | Tailwind tokens, fonts, layout settings |
| app/sitemap.ts | Homepage and project sitemap |
| app/robots.ts | Crawler rules and sitemap location |
| app/icon.tsx | Generated site icon |
| next.config.ts | Next.js image settings |
| public/ | Portrait, project screenshots, and technology logos |

## Configuration and external services

### Environment variables

Private values belong in .env.local for local development and in the hosting environment for deployment. .env files are ignored by Git. Only variable names and intended use are documented here.

| Variable | Purpose |
| --- | --- |
| OLLAMA_API_KEY | Server-side key for the portfolio chatbot. |
| OLLAMA_MODEL | Optional model override; defaults to gpt-oss:120b. |
| TELEGRAM_BOT_TOKEN | Server-side bot credential for visit alerts. |
| TELEGRAM_CHAT_ID | Destination for visit alerts. |

### AI assistant

The chat API builds context from portfolio contact data, skills, project descriptions, and the experience helper. Its instructions restrict replies to Vaibhav's portfolio and direct unknown questions to contact channels. The server accepts messages up to 1,000 characters and limits conversation history to 12 entries. The route declares a 60-second maximum duration. Missing chatbot configuration returns HTTP 503. Answers are model-generated, so the source dataset remains the authoritative content.

### Visit notifications and analytics

VisitTracker posts the current path and referrer after mounting. The server obtains the IP and user agent from request headers, prefers Vercel location headers, and may fall back to ipapi.co for location. It sends page, location, referrer, IP, and user agent to the configured Telegram chat. Missing Telegram configuration returns HTTP 500; Telegram send failures return HTTP 502. The UI does not wait for this notification to succeed.

The layout also includes Google Analytics (via @next/third-parties) and a Contentsquare script. Google Fonts supplies typography. These are separate third-party integrations; the contact form itself uses the visitor's email client.

### Search and sharing

The root layout defines title, description, Open Graph metadata, a Twitter summary card, Google site verification, and Person JSON-LD. The portrait is the configured social image. robots.ts permits crawling, and sitemap.ts lists the homepage plus every project. Update the configured base URL in layout.tsx, sitemap.ts, and robots.ts together when changing domains.

## Local development and deployment

### Install and run

Use Node.js and pnpm. During this project setup Node.js 24.19.0 and pnpm 11.20.0 were present locally; these are observed versions, not enforced requirements. The supplied Vercel log used pnpm 10.x. package.json currently does not pin a packageManager version.

~~~sh
pnpm install --frozen-lockfile
pnpm dev
~~~

Default local URL: http://localhost:3000. To use the review port explicitly:

~~~sh
pnpm dev --hostname 127.0.0.1 --port 3001
~~~

After dependencies are installed, npm run dev -- --hostname 127.0.0.1 --port 3001 also runs the same development script.

### Validation and production mode

~~~sh
pnpm lint
pnpm exec tsc --noEmit
pnpm build
pnpm start
~~~

Stop the development server before building in the same checkout: both use .next, and concurrent development/production runs previously caused cache conflicts. A TypeScript check alone does not cover Next.js build lint requirements. The latest local production build before this documentation passed and generated 23 pages. That result does not independently confirm the status of any hosted deployment.

### Git and hosting

- Repository: https://github.com/vmahobiya93-netizen/portfolio
- Main branch: main.
- Hosting workflow: Vercel builds from GitHub pushes, as shown by the deployment logs provided during setup.
- Commit only intended source/documentation changes, keeping .env.local, node_modules, .next, and local caches untracked.
- pnpm-workspace.yaml currently disables the sharp install build script with allowBuilds: sharp: false.
- On the current Windows machine, Git was available at C:/Program Files/Git/cmd/git.exe even when git was not on PATH.

### Troubleshooting notes

- Font-download errors: next/font/google needs access to Google Fonts during the production build. A restricted local sandbox can block this.
- Build lint failures: remove unused imports and use Next.js Link for internal page navigation.
- Cache conflicts: stop concurrent dev servers before rebuilding.
- Hydration warnings with body attributes such as bis_register or __processed_: test without browser extensions; these attributes were absent from the application source and server HTML during investigation.
- Contact button does not deliver email automatically: it opens an email draft by design.
- Chat or visitor alerts unavailable: verify the relevant environment configuration without exposing its values.
- Missing live button: add a valid liveUrl to the project record; do not invent a destination.

## Editing guide

1. **Profile/contact/social links:** edit GENERAL_INFO and SOCIAL_LINKS in lib/data.ts. Also check the WhatsApp URL/number in Contact.tsx and WhatsAppBadge.tsx, which are separately specified.
2. **Skills:** edit MY_STACK; optional icons use public/logo assets.
3. **Employment:** edit MY_EXPERIENCE; keep EXPERIENCE_START consistent if the career start month changes.
4. **Projects:** edit PROJECTS. Keep slugs unique, provide title/description/techStack/thumbnail/longThumbnail/images, and provide role/liveUrl/sourceCode/year where applicable.
5. **Featured order:** edit featuredSlugs in ProjectList.tsx. Other projects automatically appear in Explore more projects.
6. **Services and biography:** edit their section components; the chatbot does not automatically ingest every section's JSX copy.
7. **Hero:** edit Banner.tsx and Banner.module.css. Keep the shared primary variable for the turquoise accent.
8. **Shared theme:** edit app/globals.css and tailwind.config.ts.
9. **Contact behavior:** edit Contact.tsx; a server-delivered form would require a new backend integration.
10. **Domain and SEO:** keep metadata, sitemap, and robots base URLs consistent.
11. **After changes:** verify responsive layouts, project links, contact actions, type checks, and a production build before deployment.

## Content maintenance

- Refresh this document after changing the portfolio; its embedded project records and dependency declarations are snapshots.
- Keep the automatic experience start date accurate rather than hardcoding durations.
- Confirm live URLs and project asset paths when updating projects.
- Add measurable results only when supported by actual evidence.
- Confirm individual contribution details for each company project when more specific implementation notes become available.
- Add a project year or outcome only when a reliable source or actual measurement is available. None is currently verified.
- No rates, education history, certifications, notice period, downloadable résumé, or reference video are supplied in the current source; these should not be inferred.
- The repository includes an MIT LICENSE file.
- Private keys, tokens, passwords, and environment values must stay out of this document.
