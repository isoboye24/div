'use client';

import Link from 'next/link';
import ProjectCarousel from '../project/project-carousel';

const ProjectSection = () => {
  return (
    <div className="wrapper border-0 lg:border-30 border-amber-200 border-">
      <div className="text-center max-w-2xl mx-auto mt-5">
        <h2 className="text-3xl md:text-4xl font-bold text-white inline-block">
          Projects
          <span className="block h-1 w-14 bg-orange-500 mx-auto mt-3"></span>
        </h2>
        <p className="mt-6 text-gray-200">
          A selection of projects demonstrating my experience in web and desktop
          application development.
        </p>
      </div>
      <div className="pt-10 overflow-hidden">
        <ProjectCarousel tab={['Web', 'Desktop']} types="Web" />
      </div>
      <div className="text-center mt-16 mb-5">
        <Link
          href="/projects"
          className="inline-block px-8 py-4 bg-orange-500 text-black font-semibold rounded-xl hover:bg-orange-400 transition"
        >
          View All Projects
        </Link>
      </div>
    </div>
  );
};

export default ProjectSection;
