'use client';

import React, { useState } from 'react';
import CustomCarousel from '../project/custom-carousel';
import ProjectCard from '../project/project-card';
import { Project } from '@/types';
import { ProjectSectionProps } from '@/interfaces';
import { getFilterProjects } from '@/lib/actions/project.actions';

const ProjectCarousel = <T extends string>({
  tab,
  types,
}: ProjectSectionProps<T>) => {
  const [activeType, setActiveType] =
    useState<ProjectSectionProps['types']>(types);

  const filteredProjects = getFilterProjects({ activeType });

  return (
    <div>
      <div className="flex justify-end text-base md:text-lg xl:text-2xl gap-4 md:gap-8 mb-4">
        {tab &&
          tab.map((t) => (
            <button
              key={t}
              onClick={() => setActiveType(t)}
              className={`transition-colors duration-200 ${
                activeType === t
                  ? 'text-amber-500 font-semibold'
                  : 'text-gray-100 hover:text-gray-200'
              }`}
            >
              {t}
            </button>
          ))}
      </div>

      {/* Mobile Carousel */}
      <div className="block xl:hidden">
        <CustomCarousel>
          {filteredProjects.map((project: Project) => (
            <div
              key={project.id}
              className="text-white rounded-xl h-[300px] flex items-center justify-center text-xl shadow-base"
            >
              <ProjectCard
                name={project.name}
                image={project.image}
                codeUrl={project.codeUrl}
                type={project.type}
                size={200}
              />
            </div>
          ))}
        </CustomCarousel>
      </div>

      {/* Desktop Carousel */}
      <div className="hidden xl:block mt-4">
        <CustomCarousel>
          {filteredProjects.map((project: Project) => (
            <div
              key={project.id}
              className="text-white rounded-xl h-[400px] flex items-center justify-center text-xl shadow-base"
            >
              <ProjectCard
                name={project.name}
                image={project.image}
                codeUrl={project.codeUrl}
                type={project.type}
                size={300}
              />
            </div>
          ))}
        </CustomCarousel>
      </div>
    </div>
  );
};

export default ProjectCarousel;
