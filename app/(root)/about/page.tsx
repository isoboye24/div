import React from 'react';
import PageTopSection from '@/components/ui/page-top-section';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'About',
};

const About = () => {
  return (
    <div>
      <PageTopSection pageName="About Me" bgColor="teal-500" />
    </div>
  );
};

export default About;
