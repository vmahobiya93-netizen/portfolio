import { IProject } from '@/types';

interface IStackItem {
    name: string;
    icon?: string;
}

export const GENERAL_INFO = {
    email: 'Vmahobiya93@gmail.com',
    phone: '+91 90742 15693',

    emailSubject: "Let's collaborate on a project",
    emailBody: 'Hi, I am reaching out to you because...',

    upworkProfile: 'https://www.upwork.com/freelancers/Vaibhav',
};

export const SOCIAL_LINKS = [
    { name: 'github', url: 'https://github.com/vmahobiya93-netizen' },
    {
        name: 'linkedin',
        url: 'https://www.linkedin.com/in/vaibhav-mahobiya-32a5b63a9',
    },
];

export const MY_STACK: Record<string, IStackItem[]> = {
    Backend: [
        { name: 'PHP', icon: '/logo/php-vector-logo-seeklogo/php-seeklogo.svg' },
        { name: 'Laravel', icon: '/logo/laravel-vector-logo-seeklogo/laravel-seeklogo.svg' },
        { name: 'Node.js', icon: '/logo/node.png' },
        { name: 'CodeIgniter', icon: '/logo/codeigniter-vector-logo-seeklogo/codeigniter-seeklogo.svg' },
        { name: 'OpenCart', icon: '/logo/opencart-vector-logo-seeklogo/opencart-seeklogo.svg' },
    ],
    'Magento 2': [
        { name: 'Magento 2', icon: '/logo/magento-vector-logo-seeklogo/magento-seeklogo.svg' },
        { name: 'Custom Module & Extension Development' },
        { name: 'MVC & OOP Architecture' },
        { name: 'Theme Customization' },
        { name: 'Multi-store Management' },
        { name: 'Upgrades & Deployments' },
    ],
    Frontend: [
        { name: 'React.js', icon: '/logo/react.png' },
        { name: 'JavaScript', icon: '/logo/js.png' },
        { name: 'jQuery', icon: '/logo/jquery-vector-logo-seeklogo/jquery-seeklogo.svg' },
        { name: 'Ajax', icon: '/logo/ajax-vector-logo-seeklogo/ajax-seeklogo.svg' },
        {
            name: 'HTML5',
            icon: '/logo/html5-without-wordmark-color-vector-logo-seeklogo/html5-without-wordmark-color-seeklogo.svg',
        },
        { name: 'CSS3', icon: '/logo/css3-vector-logo-seeklogo/css3-seeklogo.svg' },
        { name: 'Tailwind CSS', icon: '/logo/tailwind.png' },
    ],
    Database: [
        { name: 'MySQL', icon: '/logo/mysql.svg' },
        { name: 'PostgreSQL', icon: '/logo/postgreSQL.png' },
        { name: 'Query Optimization & Performance Tuning' },
    ],
    'Other Platforms': [
        { name: 'WordPress', icon: '/logo/wordpress-vector-logo-seeklogo/wordpress-seeklogo.svg' },
        { name: 'Shopify', icon: '/logo/shopify-vector-logo-seeklogo/shopify-seeklogo.svg' },
    ],
    'APIs & Integration': [
        { name: 'REST API Design & Development' },
        {
            name: 'Postman',
            icon: '/logo/postman-vector-logo-seeklogo/postman-seeklogo.svg',
        },
        { name: 'Third-Party Integrations' },
    ],
    Performance: [
        { name: 'Caching Techniques' },
        { name: 'Lazy Loading' },
        { name: 'Asset Minification' },
        { name: 'Code & Query Optimization' },
    ],
    'Tools & DevOps': [
        { name: 'Git', icon: '/logo/git.png' },
        { name: 'VS Code', icon: '/logo/vscode-seeklogo.svg' },
        { name: 'Linux', icon: '/logo/tux-vector-logo-seeklogo/tux-seeklogo.svg' },
        { name: 'CI/CD' },
        {
            name: 'Adobe Experience Manager',
            icon: '/logo/adobe-experience-manager-vector-logo-seeklogo/adobe-experience-manager-seeklogo.svg',
        },
    ],
    Methodologies: [
        { name: 'JIRA', icon: '/logo/jira-vector-logo-seeklogo/jira-seeklogo.svg' },
        { name: 'Agile/Scrum' },
        { name: 'Coding Standards & Clean Architecture' },
    ],
    App: [
        { name: 'React Native', icon: '/logo/react.png' },
        { name: 'Flutter', icon: '/logo/flutter-vector-logo-seeklogo/flutter-seeklogo.svg' },
    ],
};

export const PROJECTS: IProject[] = [
    {
        title: 'Jim Corbett Wedding',
        slug: 'jim-corbett-wedding',
        company: 'Infosol Technosol Pvt Ltd',
        liveUrl: 'https://jimcorbettwedding.in/',
        description: `
      A destination wedding planning website for Jim Corbett, built on Laravel to showcase venues, services, and packages for couples planning a wedding in the hills. <br/> <br/>

      Key Features:<br/>
      <ul>
        <li>💍 Service Showcase: Wedding band, bridal makeup, mehendi artists, transportation, jungle safari, and wedding chariot offerings</li>
        <li>🏞️ Venue Gallery: Curated venue and destination photography</li>
        <li>📝 Request a Quote: Lead-capture form for budget, guest count, and event dates</li>
        <li>📰 Blog: Wedding planning guides and tips content section</li>
        <li>📱 Fully Responsive: Optimized across desktop and mobile</li>
      </ul>
      `,
        role: `
      Full Stack Developer at Infosol Technosol Pvt Ltd (company project) <br/>
      <ul>
        <li>Built and maintained the Laravel website's venue gallery and service showcase using jQuery.</li>
        <li>Integrated Google Tag Manager for site tracking.</li>
      </ul>
      `,
        techStack: ['Laravel', 'PHP', 'jQuery', 'GTM', 'HTML', 'CSS'],
        thumbnail: '/projects/thumbnail/jim-corbett-wedding.webp',
        longThumbnail: '/projects/long/jim-corbett-wedding.webp',
        images: ['/projects/images/jim-corbett-wedding-1.webp'],
    },
    {
        title: 'Girlion',
        slug: 'girlion',
        company: 'Infosol Technosol Pvt Ltd',
        liveUrl: 'https://www.girlion.in/',
        description: `
      A travel and booking platform for Gir National Park, built on Laravel to support safari, hotel, and tour package reservations. <br/> <br/>

      Key Features:<br/>
      <ul>
        <li>🦁 Safari Booking: Date and guest-based availability checking and booking widget</li>
        <li>🏨 Accommodation Listings: Hotel and resort packages with pricing</li>
        <li>📍 Nearby Attractions: Curated guide to nearby dams, museums, temples, and zoos</li>
        <li>⭐ Reviews: Customer testimonials and ratings section</li>
        <li>📰 Blog: Safari and travel guide content section</li>
        <li>📱 Fully Responsive: Optimized across desktop and mobile</li>
      </ul>
      `,
        role: `
      Full Stack Developer at Infosol Technosol Pvt Ltd (company project) <br/>
      <ul>
        <li>Built Laravel backend logic for safari, hotel, and tour-package listings and bookings.</li>
        <li>Integrated Google Tag Manager for tracking and analytics.</li>
      </ul>
      `,
        techStack: ['Laravel', 'PHP', 'jQuery', 'GTM', 'HTML', 'CSS'],
        thumbnail: '/projects/thumbnail/girlion.webp',
        longThumbnail: '/projects/long/girlion.webp',
        images: ['/projects/images/girlion-1.webp'],
    },
    {
        title: 'Katespade',
        slug: 'katespade',
        company: 'Infosol Technosol Pvt Ltd',
        liveUrl: 'https://katespade.co.id',
        description: `
      An e-commerce storefront built on Magento 2 for Kate Spade Indonesia, covering the full shopping experience: homepage campaigns, product catalog, and checkout. <br/> <br/>

      Key Features:<br/>
      <ul>
        <li>🛍️ Product Catalog: Category browsing and merchandising for handbags, wallets, jewelry, and footwear</li>
        <li>🎯 Campaign Banners: Dynamic homepage promotions and seasonal collection highlights</li>
        <li>🔌 API Integrations: GraphQL and REST APIs powering storefront data and third-party services</li>
        <li>📱 Fully Responsive: Optimized across desktop and mobile</li>
      </ul>
      `,
        role: `
      Full Stack Developer at Infosol Technosol Pvt Ltd (company project) <br/>
      <ul>
        <li>Built the appointment booking feature for the Kate Spade Indonesia storefront.</li>
        <li>Contributed Magento 2 backend customization for its catalog and seasonal campaigns.</li>
      </ul>
      `,
        techStack: [
            'Magento 2',
            'PHP',
            'HTML',
            'CSS',
            'jQuery',
            'Ajax',
            'MySQL',
            'Git',
            'REST API',
            'GraphQL',
            'Postman',
            'Linux',
            'JIRA',
        ],
        thumbnail: '/projects/thumbnail/katespade.webp',
        longThumbnail: '/projects/long/katespade.webp',
        images: ['/projects/images/katespade-1.webp'],
    },
    {
        title: 'Coach',
        slug: 'coach',
        company: 'Infosol Technosol Pvt Ltd',
        liveUrl: 'https://id.coach.com/',
        description: `
      An e-commerce storefront built on Magento 2 for Coach, covering seasonal campaign landing pages, product catalog, and checkout. <br/> <br/>

      Key Features:<br/>
      <ul>
        <li>🛍️ Product Catalog: Category browsing and merchandising for bags, accessories, and apparel</li>
        <li>🎯 Campaign Landing Pages: Seasonal collection and collaboration showcases</li>
        <li>🔌 API Integrations: GraphQL and REST APIs powering storefront data and third-party services</li>
        <li>📱 Fully Responsive: Optimized across desktop and mobile</li>
      </ul>
      `,
        role: `
      Full Stack Developer at Infosol Technosol Pvt Ltd (company project) <br/>
      <ul>
        <li>Built the appointment booking feature for the Coach storefront.</li>
        <li>Contributed Magento 2 backend work for its product catalog and seasonal campaigns.</li>
      </ul>
      `,
        techStack: [
            'Magento 2',
            'PHP',
            'HTML',
            'CSS',
            'jQuery',
            'Ajax',
            'MySQL',
            'Git',
            'REST API',
            'GraphQL',
            'Postman',
            'Linux',
            'JIRA',
        ],
        thumbnail: '/projects/thumbnail/coach.webp',
        longThumbnail: '/projects/long/coach.webp',
        images: ['/projects/images/coach-1.webp', '/projects/images/coach-2.webp'],
    },
    {
        title: 'Methena',
        slug: 'methena',
        description: `
      A WordPress-based marketing and product site for Methena, an AI-driven college admissions guidance platform. <br/> <br/>

      Key Features:<br/>
      <ul>
        <li>🎯 Program Pages: Grade 1-6 and Grade 7-12 package showcases with feature breakdowns</li>
        <li>📊 Product Walkthroughs: Sectioned feature tour of the admissions intelligence dashboard</li>
        <li>👥 Team & Testimonials: Leadership bios and student/parent testimonial sections</li>
        <li>📱 Fully Responsive: Optimized across desktop and mobile</li>
      </ul>
      `,
        role: `
      Full Stack Developer <br/>
      <ul>
        <li>✅ Backend: WordPress theme and custom PHP development</li>
        <li>🎨 Frontend: Interactive page sections and UI built with jQuery</li>
      </ul>
      `,
        techStack: ['WordPress', 'PHP', 'jQuery'],
        thumbnail: '/projects/thumbnail/methena.webp',
        longThumbnail: '/projects/long/methena.webp',
        images: ['/projects/images/methena-1.webp'],
    },
    {
        title: 'HRM System',
        slug: 'hrm-system',
        company: 'Infosol Technosol Pvt Ltd',
        description: `
      Human Resource Management System: a complete HRM platform built with Laravel and React.js to manage employee data, attendance, and internal workflows. <br/> <br/>

      Key Features:<br/>
      <ul>
        <li>🏢 HR Operations: Employee record management, attendance tracking, and internal workflow handling</li>
        <li>🔒 Secure Access: Role-based access control (RBAC) for protected operations</li>
        <li>🔌 API Integrations: REST APIs powering core HR operations and data management</li>
        <li>📱 Fully Responsive: Optimized across desktop and mobile</li>
      </ul>
      `,
        role: `
      Full Stack Developer at Infosol Technosol Pvt Ltd (company project) <br/>
      <ul>
        <li>Architected and built an HRM application covering employee records, attendance, and internal workflows.</li>
        <li>Implemented role-based access control, Laravel REST APIs, and a responsive React interface.</li>
      </ul>
      `,
        techStack: [
            'Laravel',
            'React.js',
            'PHP',
            'JavaScript',
            'Tailwind CSS',
            'REST API',
            'MySQL',
            'Git',
            'Postman',
        ],
        thumbnail: '/projects/thumbnail/hrm.webp',
        longThumbnail: '/projects/long/hrm.webp',
        images: ['/projects/images/hrm-1.webp'],
    },
    {
        title: 'Nespresso',
        slug: 'nespresso',
        company: 'Infosol Technosol Pvt Ltd',
        liveUrl: 'https://www.nespresso.co.id/id/en',
        description: `
      An e-commerce storefront built on Magento 2 for Nespresso, covering the product catalog, machine and capsule listings, and checkout. <br/> <br/>

      Key Features:<br/>
      <ul>
        <li>☕ Product Catalog: Category browsing and merchandising for machines, capsules, and accessories</li>
        <li>🔌 API Integrations: REST APIs powering storefront data and third-party services</li>
        <li>📱 Fully Responsive: Optimized across desktop and mobile</li>
      </ul>
      `,
        role: `
      Full Stack Developer at Infosol Technosol Pvt Ltd (company project) <br/>
      <ul>
        <li>Built a product comparison feature that lets shoppers compare up to three products.</li>
        <li>Built a recommendation quiz that suggests relevant products based on shoppers' answers.</li>
      </ul>
      `,
        techStack: [
            'Magento 2',
            'PHP',
            'HTML',
            'CSS',
            'jQuery',
            'Ajax',
            'MySQL',
            'Git',
            'REST API',
            'GraphQL',
            'Postman',
            'Linux',
            'JIRA',
        ],
        thumbnail: '/projects/thumbnail/nespresso.webp',
        longThumbnail: '/projects/long/nespresso.webp',
        images: ['/projects/images/nespresso-1.webp'],
    },
    {
        title: 'Cole Haan',
        slug: 'cole-haan',
        company: 'Infosol Technosol Pvt Ltd',
        liveUrl: 'https://colehaan.co.id/',
        description: `
      An e-commerce storefront built on Magento 2 for Cole Haan, covering the product catalog, collection pages, and checkout. <br/> <br/>

      Key Features:<br/>
      <ul>
        <li>👞 Product Catalog: Category browsing and merchandising for footwear, bags, and accessories</li>
        <li>🔌 API Integrations: REST APIs powering storefront data and third-party services</li>
        <li>📱 Fully Responsive: Optimized across desktop and mobile</li>
      </ul>
      `,
        role: `
      Full Stack Developer at Infosol Technosol Pvt Ltd (company project) <br/>
      <ul>
        <li>Built the appointment booking feature for the Cole Haan storefront.</li>
        <li>Contributed Magento 2 backend customization for its footwear, bags, and accessories catalog.</li>
      </ul>
      `,
        techStack: [
            'Magento 2',
            'PHP',
            'HTML',
            'CSS',
            'jQuery',
            'Ajax',
            'MySQL',
            'Git',
            'REST API',
            'GraphQL',
            'Postman',
            'Linux',
            'JIRA',
        ],
        thumbnail: '/projects/thumbnail/colehaan.webp',
        longThumbnail: '/projects/long/colehaan.webp',
        images: ['/projects/images/colehaan-1.webp'],
    },
    {
        title: 'Mothercare',
        slug: 'mothercare',
        company: 'Infosol Technosol Pvt Ltd',
        liveUrl: 'https://www.mothercare.co.id/',
        description: `
      An e-commerce storefront built on Magento 2 for Mothercare, covering the product catalog, category pages, and checkout. <br/> <br/>

      Key Features:<br/>
      <ul>
        <li>🛍️ Product Catalog: Category browsing and merchandising for baby, maternity, and kids' products</li>
        <li>🔌 API Integrations: REST APIs powering storefront data and third-party services</li>
        <li>📱 Fully Responsive: Optimized across desktop and mobile</li>
      </ul>
      `,
        role: `
      Full Stack Developer at Infosol Technosol Pvt Ltd (company project) <br/>
      <ul>
        <li>Contributed Magento 2 backend development for Mothercare's baby, maternity, and children's product catalog.</li>
        <li>Worked on custom modules and third-party API integrations as part of the Infosol development team.</li>
      </ul>
      `,
        techStack: [
            'Magento 2',
            'PHP',
            'HTML',
            'CSS',
            'jQuery',
            'Ajax',
            'MySQL',
            'Git',
            'REST API',
            'GraphQL',
            'Postman',
            'Linux',
            'JIRA',
        ],
        thumbnail: '/projects/thumbnail/mothercare.webp',
        longThumbnail: '/projects/long/mothercare.webp',
        images: ['/projects/images/mothercare-1.webp'],
    },
    {
        title: 'Ecabinets',
        slug: 'ecabinets',
        company: 'Infosol Technosol Pvt Ltd',
        liveUrl: 'https://ecabinets.com/',
        description: `
      An e-commerce storefront built on Magento 2 for Ecabinets, covering the product catalog, category pages, and checkout. <br/> <br/>

      Key Features:<br/>
      <ul>
        <li>🗄️ Product Catalog: Category browsing and merchandising for cabinet products</li>
        <li>🔌 API Integrations: GraphQL API powering storefront data</li>
        <li>📱 Fully Responsive: Optimized across desktop and mobile</li>
      </ul>
      `,
        role: `
      Full Stack Developer at Infosol Technosol Pvt Ltd (company project) <br/>
      <ul>
        <li>Contributed Magento 2 backend work for Ecabinets' cabinet catalog and GraphQL-powered storefront.</li>
        <li>Worked on custom modules and database performance tuning as part of the Infosol development team.</li>
      </ul>
      `,
        techStack: [
            'Magento 2',
            'PHP',
            'HTML',
            'CSS',
            'jQuery',
            'Ajax',
            'MySQL',
            'Git',
            'REST API',
            'GraphQL',
            'Postman',
            'Linux',
            'JIRA',
        ],
        thumbnail: '/projects/thumbnail/ecabinets.webp',
        longThumbnail: '/projects/long/ecabinets.webp',
        images: ['/projects/images/ecabinets-1.webp'],
    },
    {
        title: 'DrSnooze',
        slug: 'drsnooze',
        company: 'Infosol Technosol Pvt Ltd',
        liveUrl: 'https://www.drsnooze.com/',
        description: `
      An e-commerce storefront built on Magento 2 for DrSnooze, covering the product catalog, category pages, and checkout. <br/> <br/>

      Key Features:<br/>
      <ul>
        <li>🛍️ Product Catalog: Category browsing and merchandising</li>
        <li>🔌 API Integrations: GraphQL API powering storefront data</li>
        <li>📱 Fully Responsive: Optimized across desktop and mobile</li>
      </ul>
      `,
        role: `
      Full Stack Developer at Infosol Technosol Pvt Ltd (company project) <br/>
      <ul>
        <li>Contributed Magento 2 backend customization for DrSnooze's product and category pages.</li>
        <li>Worked on caching, query optimization, and deployment support as part of the Infosol development team.</li>
      </ul>
      `,
        techStack: [
            'Magento 2',
            'PHP',
            'HTML',
            'CSS',
            'jQuery',
            'Ajax',
            'MySQL',
            'Git',
            'REST API',
            'GraphQL',
            'Postman',
            'Linux',
            'JIRA',
        ],
        thumbnail: '/projects/thumbnail/drsnooze.webp',
        longThumbnail: '/projects/long/drsnooze.webp',
        images: ['/projects/images/drsnooze-1.webp'],
    },
    {
        title: 'H2O Hub',
        slug: 'h2o-hub',
        liveUrl: 'https://h2ohub.com/',
        description: `
      An e-commerce storefront built on BigCommerce for H2O Hub, covering the product catalog, category pages, and checkout. <br/> <br/>

      Key Features:<br/>
      <ul>
        <li>🛍️ Product Catalog: Category browsing and merchandising</li>
        <li>📱 Fully Responsive: Optimized across desktop and mobile</li>
      </ul>
      `,
        role: `
      Full Stack Developer <br/>
      <ul>
        <li>✅ Backend: Custom PHP development on BigCommerce</li>
        <li>🎨 Frontend: Interactive UI built with jQuery</li>
      </ul>
      `,
        techStack: ['BigCommerce', 'PHP', 'jQuery'],
        thumbnail: '/projects/thumbnail/h2o-hub.webp',
        longThumbnail: '/projects/long/h2o-hub.webp',
        images: ['/projects/images/h2o-hub-1.webp'],
    },
    {
        title: 'SilSal',
        slug: 'silsal',
        company: 'Infosol Technosol Pvt Ltd',
        liveUrl: 'https://silsal.qa/',
        description: `
      An e-commerce storefront built on Magento 2 for SilSal, covering the product catalog, category pages, and checkout. <br/> <br/>

      Key Features:<br/>
      <ul>
        <li>💎 Product Catalog: Category browsing and merchandising for jewelry products</li>
        <li>📱 Fully Responsive: Optimized across desktop and mobile</li>
      </ul>
      `,
        role: `
      Full Stack Developer at Infosol Technosol Pvt Ltd (company project) <br/>
      <ul>
        <li>Contributed Magento 2 backend development for SilSal's jewelry storefront.</li>
        <li>Worked on custom modules, storefront performance, and production maintenance as part of the Infosol development team.</li>
      </ul>
      `,
        techStack: [
            'Magento 2',
            'PHP',
            'HTML',
            'CSS',
            'jQuery',
            'Ajax',
            'MySQL',
            'Git',
            'REST API',
            'GraphQL',
            'Postman',
            'Linux',
            'JIRA',
        ],
        thumbnail: '/projects/thumbnail/silsal.webp',
        longThumbnail: '/projects/long/silsal.webp',
        images: ['/projects/images/silsal-1.webp'],
    },
    {
        title: 'Systemq',
        slug: 'systemq',
        liveUrl: 'https://systemq.com/',
           description: `
      An e-commerce storefront built on BigCommerce for Systemq, covering the product catalog, category pages, and checkout. <br/> <br/>

      Key Features:<br/>
      <ul>
        <li>🛍️ Product Catalog: Category browsing and merchandising</li>
        <li>📱 Fully Responsive: Optimized across desktop and mobile</li>
      </ul>
      `,
        role: `
      Full Stack Developer <br/>
      <ul>
        <li>✅ Backend: Custom PHP development on BigCommerce</li>
        <li>🎨 Frontend: Interactive UI built with JavaScript</li>
      </ul>
      `,
        techStack: ['BigCommerce', 'PHP', 'JavaScript'],
        thumbnail: '/projects/thumbnail/systemq.webp',
        longThumbnail: '/projects/long/systemq.webp',
        images: ['/projects/images/systemq-1.webp'],
    },
];

export const MY_EXPERIENCE = [
    {
        title: 'Full Stack Developer',
        company: 'Infosol Technosol Pvt Ltd',
        duration: 'Apr 2023 - Present',
    },
];
