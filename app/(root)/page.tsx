// import HomeTopSection from '@/components/ui/home/home-top-section';
import AboutSection from '../../components/ui/home/about-section';
import ProjectSection from '@/components/ui/home/project-section';
import { Metadata } from 'next';
import Hero from '@/components/ui/home/hero';

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
      <section className=" xl:pt-25 xl:pb-40 bg-teal-600" id="projects">
        <ProjectSection />
      </section>
    </div>
  );
};

export default HomePage;
