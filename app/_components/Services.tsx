const services = [
    [
        '01',
        'eCommerce development',
        'Storefront improvements, custom functionality, integrations, and upgrades for your online store.',
    ],
    [
        '02',
        'Custom web applications',
        'Dashboards, HR systems, and internal tools built around your workflows with Laravel and React.',
    ],
    [
        '03',
        'API integrations',
        'REST and GraphQL integrations that connect your storefront, application, and third-party services.',
    ],
    [
        '04',
        'Maintenance & improvements',
        'Bug fixes, database optimization, and ongoing development for existing websites and applications.',
    ],
];

export default function Services() {
    return (
        <section
            id="services"
            className="border-y bg-background-light/40 py-20"
        >
            <div className="container">
                <p className="text-sm uppercase tracking-[0.2em] text-primary">
                    How I can help
                </p>
                <h2 className="mt-4 font-anton text-4xl sm:text-5xl">
                    FROM A NEW IDEA TO A BETTER PRODUCT.
                </h2>
                <div className="mt-10 grid md:grid-cols-2">
                    {services.map(([number, title, description]) => (
                        <div key={number} className="border-t py-7">
                            <span className="text-sm text-primary">
                                {number}
                            </span>
                            <h3 className="mt-3 text-2xl font-semibold">
                                {title}
                            </h3>
                            <p className="mt-3 max-w-lg leading-relaxed text-muted-foreground">
                                {description}
                            </p>
                        </div>
                    ))}
                </div>
                <div className="mt-8 border-t pt-8">
                    <h3 className="text-xl font-semibold">
                        A clear way to work together
                    </h3>
                    <p className="mt-3 max-w-3xl leading-relaxed text-muted-foreground">
                        We start with your requirements, agree on the scope and
                        milestones, then build and review the work together
                        before launch and handover.
                    </p>
                    <a
                        href="#contact"
                        className="mt-5 inline-block text-primary underline underline-offset-4"
                    >
                        Tell me what you have in mind ↗
                    </a>
                </div>
            </div>
        </section>
    );
}
