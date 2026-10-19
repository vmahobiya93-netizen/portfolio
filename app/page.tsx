import AboutMe from './_components/AboutMe';
import Banner from './_components/Banner';
import Experiences from './_components/Experiences';
import Skills from './_components/Skills';
import ProjectList from './_components/ProjectList';
import Services from './_components/Services';

export default function Home() {
    return (
        <div className="page-">
            <Banner />
            <ProjectList />
            <Services />
            <AboutMe />
            <Experiences />
            <Skills />
        </div>
    );
}
