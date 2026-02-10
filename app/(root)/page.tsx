// import HomeTopSection from '@/components/ui/home/home-top-section';
import AboutSection from '../../components/ui/home/about-section';
import ProjectSection from '@/components/ui/home/project-section';
import { Metadata } from 'next';
import Hero from '@/components/ui/home/hero';
import AllSkills from '@/components/ui/about/skills/all-skills';

export const metadata: Metadata = {
  title: 'Home',
};

const HomePage = () => {
  return (
    <div className="overflow-hidden">
      <section className="">
        <Hero />
      </section>
      <section id="about">
        <AboutSection />
      </section>
      <section className="py-24 bg-teal-600" id="projects">
        <ProjectSection />
      </section>
      <section className="py-24" id="skills">
        <AllSkills
          tab={['All', 'Frontend', 'Backend', 'Database', 'UX-UI Design']}
          types="All"
        />
      </section>
    </div>
  );
};

export default HomePage;
