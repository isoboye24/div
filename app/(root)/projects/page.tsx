import React from 'react';
import PageTopSection from '@/components/ui/page-top-section';
import { Metadata } from 'next';
import ProjectPageCarousel from '@/components/ui/project/project-page-carousel';

export const metadata: Metadata = {
  title: 'Projects',
};

const Projects = () => {
  return (
    <div className="pb-30">
      <div className="">
        <PageTopSection pageName="Projects" bgColor="teal-500" />
      </div>
      <div className="wrapper mt-20 ">
        <ProjectPageCarousel />
      </div>
    </div>
  );
};

export default Projects;
