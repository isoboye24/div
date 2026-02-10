'use client';

import Link from 'next/link';
import ProjectCarousel from '../project/project-carousel';

const ProjectSection = () => {
  return (
    <div className="wrapper">
      {/* Header */}
      <div className="max-w-3xl mx-auto text-center mb-14">
        <h2 className="text-3xl md:text-4xl font-semibold text-white">
          Projects
        </h2>
        <p className="mt-4 text-gray-200 leading-relaxed">
          Selected projects showcasing my experience in web and desktop
          application development.
        </p>
      </div>

      {/* Projects */}
      <div className="mb-16">
        <ProjectCarousel tab={['Web', 'Desktop']} types="Web" />
      </div>

      {/* CTA */}
      <div className="text-center">
        <Link
          href="/projects"
          className="
            inline-flex items-center justify-center
            px-7 py-3
            text-sm font-medium
            text-black bg-orange-500
            rounded-lg
            hover:bg-orange-400
            transition-colors
          "
        >
          View all projects
        </Link>
      </div>
    </div>
  );
};

export default ProjectSection;
