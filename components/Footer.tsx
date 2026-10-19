import Contact from '@/app/_components/Contact';

export default function Footer() {
    return (
        <footer>
            <Contact />
            <div className="container flex flex-wrap justify-between gap-4 py-8 text-sm text-muted-foreground">
                <p>Vaibhav Mahobiya · Full Stack Developer</p>
                <a
                    href="https://github.com/vmahobiya93-netizen/portfolio"
                    target="_blank"
                    rel="noreferrer"
                    className="underline underline-offset-4"
                >
                    View portfolio source ↗
                </a>
            </div>
        </footer>
    );
}
