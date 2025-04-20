'use client';

import { Button } from '../button';
import ProjectCarousel from '../project/project-carousel';
import SectionTitle from '../shared/section-title';

const ProjectSection = () => {
  return (
    <div className="wrapper">
      <SectionTitle title="My projects" />
      <div className="pt-10 overflow-hidden">
        <ProjectCarousel tab={['Web', 'Desktop']} types="Web" />
      </div>
      <div className="flex justify-center mt-0 xl:mt-10">
        <a href="/projects">
          <Button className="bg-amber-500 hover:bg-amber-400 text-gray-900 px-6 py-4 xl:px-10 xl:py-6 text-base md:text-lg xl:text-2xl">
            View All
          </Button>
        </a>
      </div>
    </div>
  );
};

export default ProjectSection;
