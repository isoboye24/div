import React from 'react';
import PageTopSection from '@/components/ui/page-top-section';
import { Metadata } from 'next';
import AllSkills from '@/components/ui/about/skills/all-skills';
import AboutMe from '@/components/ui/about/about-me';
import SoftSkills from '@/components/ui/about/soft-skills';

export const metadata: Metadata = {
  title: 'About',
};

const About = async () => {
  return (
    <div>
      <PageTopSection pageName="About Me" bgColor="teal-500" />
      <div className="my-10">
        <AboutMe />
      </div>
      <div className="my-10">
        <SoftSkills />
      </div>
      <div className="mb-20">
        <AllSkills
          tab={['All', 'Frontend', 'Backend', 'Database', 'UX-UI Design']}
          types="All"
        />
      </div>
    </div>
  );
};

export default About;
