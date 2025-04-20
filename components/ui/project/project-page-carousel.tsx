import React from 'react';
import AllProjects from '@/components/ui/project/all-projects';

const ProjectPageCarousel = () => {
  return (
    <div className="">
      <AllProjects tab={['All', 'Web', 'Desktop']} types="All" />
    </div>
  );
};

export default ProjectPageCarousel;
