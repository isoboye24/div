import React from 'react';
import PageTopSection from '@/components/ui/page-top-section';
import { Metadata } from 'next';
import AllSkills from '@/components/ui/about/skills/all-skills';

export const metadata: Metadata = {
  title: 'About',
};

const About = async () => {
  return (
    <div>
      <PageTopSection pageName="About Me" bgColor="teal-500" />
      <AllSkills tab={['All', 'Frontend', 'Backend']} types="All" />
    </div>
  );
};

export default About;
