import { IProject } from '@/types';

interface IStackItem {
    name: string;
    icon?: string;
}

export const GENERAL_INFO = {
    email: 'Vmahobiya93@gmail.com',

    emailSubject: "Let's collaborate on a project",
    emailBody: 'Hi, I am reaching out to you because...',

    upworkProfile: 'https://www.upwork.com/freelancers/Vaibhav',
};

export const SOCIAL_LINKS = [
    { name: 'github', url: 'https://github.com/vmahobiya93-netizen' },
    {
        name: 'linkedin',
        url: 'https://www.linkedin.com/in/vaibhav-mahobiya-051b8b136/',
    },
];

export const MY_STACK: Record<string, IStackItem[]> = {
    Backend: [
        { name: 'PHP', icon: '/logo/php-vector-logo-seeklogo/php-seeklogo.svg' },
        { name: 'Laravel', icon: '/logo/laravel-vector-logo-seeklogo/laravel-seeklogo.svg' },
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
        title: 'Katespade',
        slug: 'katespade',
        liveUrl: 'https://katespade.co.id',
        description: `
      An e-commerce storefront built on Magento 2 for Kate Spade Indonesia, covering the full shopping experience — homepage campaigns, product catalog, and checkout. <br/> <br/>

      Key Features:<br/>
      <ul>
        <li>🛍️ Product Catalog: Category browsing and merchandising for handbags, wallets, jewelry, and footwear</li>
        <li>🎯 Campaign Banners: Dynamic homepage promotions and seasonal collection highlights</li>
        <li>🔌 API Integrations: GraphQL and REST APIs powering storefront data and third-party services</li>
        <li>📱 Fully Responsive: Optimized across desktop and mobile</li>
      </ul>
      `,
        role: `
      Full Stack Developer <br/>
      <ul>
        <li>Developed, customized, and maintained backend components of Magento 2 eCommerce websites, including custom modules, extensions, and theme customization.</li>
        <li>Built custom Magento 2 modules to extend core functionality across multi-store setups, following Magento coding standards and MVC/OOP best practices.</li>
        <li>Designed and developed RESTful APIs in Magento 2 and PHP frameworks for third-party system integrations supporting web and mobile applications.</li>
        <li>Optimized MySQL queries and database indexing, improving backend performance and reducing page load times.</li>
        <li>Applied performance optimization techniques including caching, lazy loading, and asset minification to improve application speed.</li>
        <li>Managed Magento upgrades, deployments, and bug fixes across staging and production, ensuring platform stability and minimal downtime.</li>
        <li>Collaborated with frontend developers and QA teams in an Agile (Scrum) environment to ensure quality integration of UI components.</li>
        <li>Conducted API testing and documentation using Postman for reliable third-party integrations.</li>
        <li>Handled CI/CD-based deployments across staging and production environments using Git.</li>
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
        thumbnail: '/projects/thumbnail/katespade.png',
        longThumbnail: '/projects/long/katespade.png',
        images: ['/projects/images/katespade-1.png'],
    },
    {
        title: 'Coach',
        slug: 'coach',
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
      Full Stack Developer <br/>
      <ul>
        <li>Developed, customized, and maintained backend components of Magento 2 eCommerce websites, including custom modules, extensions, and theme customization.</li>
        <li>Built custom Magento 2 modules to extend core functionality across multi-store setups, following Magento coding standards and MVC/OOP best practices.</li>
        <li>Designed and developed RESTful APIs in Magento 2 and PHP frameworks for third-party system integrations supporting web and mobile applications.</li>
        <li>Optimized MySQL queries and database indexing, improving backend performance and reducing page load times.</li>
        <li>Applied performance optimization techniques including caching, lazy loading, and asset minification to improve application speed.</li>
        <li>Managed Magento upgrades, deployments, and bug fixes across staging and production, ensuring platform stability and minimal downtime.</li>
        <li>Collaborated with frontend developers and QA teams in an Agile (Scrum) environment to ensure quality integration of UI components.</li>
        <li>Conducted API testing and documentation using Postman for reliable third-party integrations.</li>
        <li>Handled CI/CD-based deployments across staging and production environments using Git.</li>
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
        thumbnail: '/projects/thumbnail/coach.png',
        longThumbnail: '/projects/long/coach.png',
        images: ['/projects/images/coach-1.png', '/projects/images/coach-2.png'],
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
        thumbnail: '/projects/thumbnail/methena.png',
        longThumbnail: '/projects/long/methena.png',
        images: ['/projects/images/methena-1.png'],
    },
    {
        title: 'HRM System',
        slug: 'hrm-system',
        description: `
      Human Resource Management System — a complete HRM platform built with Laravel and React.js to manage employee data, attendance, and internal workflows. <br/> <br/>

      Key Features:<br/>
      <ul>
        <li>🏢 HR Operations: Employee record management, attendance tracking, and internal workflow handling</li>
        <li>🔒 Secure Access: Role-based access control (RBAC) for protected operations</li>
        <li>🔌 API Integrations: REST APIs powering core HR operations and data management</li>
        <li>📱 Fully Responsive: Optimized across desktop and mobile</li>
      </ul>
      `,
        role: `
      Full Stack Developer <br/>
      <ul>
        <li>Architected and built a complete HRM system from scratch, managing employee data, attendance, and internal workflows.</li>
        <li>Engineered secure role-based access control (RBAC) and optimized database queries for efficient, protected operations.</li>
        <li>Designed and built scalable REST APIs in Laravel to handle core HR operations and data management.</li>
        <li>Developed a dynamic, responsive front-end in React.js for seamless interaction for HR staff and employees.</li>
        <li>Implemented authentication, employee record management, and attendance tracking modules end-to-end.</li>
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
        thumbnail: '/projects/thumbnail/hrm.jpg',
        longThumbnail: '/projects/long/hrm.jpg',
        images: ['/projects/images/hrm-1.jpg'],
    },
    {
        title: 'Nespresso',
        slug: 'nespresso',
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
      Full Stack Developer <br/>
      <ul>
      <li>Built a product comparison feature allowing customers to compare up to 3 products at a time.</li>
        <li>Built a product recommendation quiz that asks customers about their preferences and recommends relevant products based on their answers.</li>
        <li>Developed, customized, and maintained backend components of Magento 2 eCommerce websites, including custom modules, extensions, and theme customization.</li>
        <li>Built custom Magento 2 modules to extend core functionality across multi-store setups, following Magento coding standards and MVC/OOP best practices.</li>
        <li>Designed and developed RESTful APIs in Magento 2 and PHP frameworks for third-party system integrations supporting web and mobile applications.</li>
        <li>Optimized MySQL queries and database indexing, improving backend performance and reducing page load times.</li>
        <li>Applied performance optimization techniques including caching, lazy loading, and asset minification to improve application speed.</li>
        <li>Managed Magento upgrades, deployments, and bug fixes across staging and production, ensuring platform stability and minimal downtime.</li>
        <li>Collaborated with frontend developers and QA teams in an Agile (Scrum) environment to ensure quality integration of UI components.</li>
        <li>Conducted API testing and documentation using Postman for reliable third-party integrations.</li>
       
        
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
        thumbnail: '/projects/thumbnail/nespresso.png',
        longThumbnail: '/projects/long/nespresso.png',
        images: ['/projects/images/nespresso-1.png'],
    },
    {
        title: 'Cole Haan',
        slug: 'cole-haan',
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
      Full Stack Developer <br/>
      <ul>
        <li>Developed, customized, and maintained backend components of Magento 2 eCommerce websites, including custom modules, extensions, and theme customization.</li>
        <li>Built custom Magento 2 modules to extend core functionality across multi-store setups, following Magento coding standards and MVC/OOP best practices.</li>
        <li>Designed and developed RESTful APIs in Magento 2 and PHP frameworks for third-party system integrations supporting web and mobile applications.</li>
        <li>Optimized MySQL queries and database indexing, improving backend performance and reducing page load times.</li>
        <li>Applied performance optimization techniques including caching, lazy loading, and asset minification to improve application speed.</li>
        <li>Managed Magento upgrades, deployments, and bug fixes across staging and production, ensuring platform stability and minimal downtime.</li>
        <li>Collaborated with frontend developers and QA teams in an Agile (Scrum) environment to ensure quality integration of UI components.</li>
        <li>Conducted API testing and documentation using Postman for reliable third-party integrations.</li>
        <li>Handled CI/CD-based deployments across staging and production environments using Git.</li>
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
        thumbnail: '/projects/thumbnail/colehaan.png',
        longThumbnail: '/projects/long/colehaan.png',
        images: ['/projects/images/colehaan-1.png'],
    },
    {
        title: 'Mothercare',
        slug: 'mothercare',
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
      Full Stack Developer <br/>
      <ul>
        <li>Developed, customized, and maintained backend components of Magento 2 eCommerce websites, including custom modules, extensions, and theme customization.</li>
        <li>Built custom Magento 2 modules to extend core functionality across multi-store setups, following Magento coding standards and MVC/OOP best practices.</li>
        <li>Designed and developed RESTful APIs in Magento 2 and PHP frameworks for third-party system integrations supporting web and mobile applications.</li>
        <li>Optimized MySQL queries and database indexing, improving backend performance and reducing page load times.</li>
        <li>Applied performance optimization techniques including caching, lazy loading, and asset minification to improve application speed.</li>
        <li>Managed Magento upgrades, deployments, and bug fixes across staging and production, ensuring platform stability and minimal downtime.</li>
        <li>Collaborated with frontend developers and QA teams in an Agile (Scrum) environment to ensure quality integration of UI components.</li>
        <li>Conducted API testing and documentation using Postman for reliable third-party integrations.</li>
        <li>Handled CI/CD-based deployments across staging and production environments using Git.</li>
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
        thumbnail: '/projects/thumbnail/mothercare.png',
        longThumbnail: '/projects/long/mothercare.png',
        images: ['/projects/images/mothercare-1.png'],
    },
    {
        title: 'Ecabinets',
        slug: 'ecabinets',
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
      Full Stack Developer <br/>
      <ul>
        <li>Developed, customized, and maintained backend components of Magento 2 eCommerce websites, including custom modules, extensions, and theme customization.</li>
        <li>Built custom Magento 2 modules to extend core functionality across multi-store setups, following Magento coding standards and MVC/OOP best practices.</li>
        <li>Designed and developed RESTful APIs in Magento 2 and PHP frameworks for third-party system integrations supporting web and mobile applications.</li>
        <li>Optimized MySQL queries and database indexing, improving backend performance and reducing page load times.</li>
        <li>Applied performance optimization techniques including caching, lazy loading, and asset minification to improve application speed.</li>
        <li>Managed Magento upgrades, deployments, and bug fixes across staging and production, ensuring platform stability and minimal downtime.</li>
        <li>Collaborated with frontend developers and QA teams in an Agile (Scrum) environment to ensure quality integration of UI components.</li>
        <li>Conducted API testing and documentation using Postman for reliable third-party integrations.</li>
        <li>Handled CI/CD-based deployments across staging and production environments using Git.</li>
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
        thumbnail: '/projects/thumbnail/ecabinets.png',
        longThumbnail: '/projects/long/ecabinets.png',
        images: ['/projects/images/ecabinets-1.png'],
    },
    {
        title: 'DrSnooze',
        slug: 'drsnooze',
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
      Full Stack Developer <br/>
      <ul>
        <li>Developed, customized, and maintained backend components of Magento 2 eCommerce websites, including custom modules, extensions, and theme customization.</li>
        <li>Built custom Magento 2 modules to extend core functionality across multi-store setups, following Magento coding standards and MVC/OOP best practices.</li>
        <li>Designed and developed RESTful APIs in Magento 2 and PHP frameworks for third-party system integrations supporting web and mobile applications.</li>
        <li>Optimized MySQL queries and database indexing, improving backend performance and reducing page load times.</li>
        <li>Applied performance optimization techniques including caching, lazy loading, and asset minification to improve application speed.</li>
        <li>Managed Magento upgrades, deployments, and bug fixes across staging and production, ensuring platform stability and minimal downtime.</li>
        <li>Collaborated with frontend developers and QA teams in an Agile (Scrum) environment to ensure quality integration of UI components.</li>
        <li>Conducted API testing and documentation using Postman for reliable third-party integrations.</li>
        <li>Handled CI/CD-based deployments across staging and production environments using Git.</li>
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
        thumbnail: '/projects/thumbnail/drsnooze.png',
        longThumbnail: '/projects/long/drsnooze.png',
        images: ['/projects/images/drsnooze-1.png'],
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
        thumbnail: '/projects/thumbnail/h2o-hub.png',
        longThumbnail: '/projects/long/h2o-hub.png',
        images: ['/projects/images/h2o-hub-1.png'],
    },
    {
        title: 'SilSal',
        slug: 'silsal',
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
      Full Stack Developer <br/>
      <ul>
        <li>Developed, customized, and maintained backend components of Magento 2 eCommerce websites, including custom modules, extensions, and theme customization.</li>
        <li>Built custom Magento 2 modules to extend core functionality across multi-store setups, following Magento coding standards and MVC/OOP best practices.</li>
        <li>Designed and developed RESTful APIs in Magento 2 and PHP frameworks for third-party system integrations supporting web and mobile applications.</li>
        <li>Optimized MySQL queries and database indexing, improving backend performance and reducing page load times.</li>
        <li>Applied performance optimization techniques including caching, lazy loading, and asset minification to improve application speed.</li>
        <li>Managed Magento upgrades, deployments, and bug fixes across staging and production, ensuring platform stability and minimal downtime.</li>
        <li>Collaborated with frontend developers and QA teams in an Agile (Scrum) environment to ensure quality integration of UI components.</li>
        <li>Conducted API testing and documentation using Postman for reliable third-party integrations.</li>
        <li>Handled CI/CD-based deployments across staging and production environments using Git.</li>
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
        thumbnail: '/projects/thumbnail/silsal.png',
        longThumbnail: '/projects/long/silsal.png',
        images: ['/projects/images/silsal-1.png'],
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
        thumbnail: '/projects/thumbnail/systemq.png',
        longThumbnail: '/projects/long/systemq.png',
        images: ['/projects/images/systemq-1.png'],
    },
];

export const MY_EXPERIENCE = [
    {
        title: 'Full Stack Developer',
        company: 'Infosol Technosol Pvt Ltd',
        duration: 'Apr 2023 - Present',
    },
];
