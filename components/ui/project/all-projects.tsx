'use client';

import React, { useState } from 'react';
import ProjectCard from '../project/project-card';
import { Project } from '@/types';
import { TabSectionProps } from '@/interfaces';
import { getAllFilterProjects } from '@/lib/actions/old-project.actions';
import { motion } from 'framer-motion';

const AllProjects = <T extends string>({ tab, types }: TabSectionProps<T>) => {
  const [activeType, setActiveType] = useState<TabSectionProps['types']>(types);

  const filteredProjects = getAllFilterProjects({ activeType });

  return (
    <div className="justify-items-center">
      <div className="flex justify-center md:justify-end text-base md:text-lg xl:text-2xl gap-4 md:gap-8 mb-12 lg:mb-25">
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

      {/* Mobile */}
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: 'easeOut' }}
        viewport={{ once: false, amount: 0.3 }}
        className="grid md:hidden grid-cols-2 gap-4 w-[70vw]"
      >
        {filteredProjects.map((project: Project) => (
          <a
            key={project.id}
            className="flex text-white rounded-xl h-[165px] justify-center shadow-base text-xs"
            href="/projects/single-project"
          >
            <ProjectCard
              name={project.name}
              image={project.image}
              codeUrl={project.codeUrl}
              type={project.type}
              size={120}
            />
          </a>
        ))}
      </motion.div>

      {/* Desktop */}
      <motion.div
        initial={{ opacity: 0, x: -150 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.8, ease: 'easeOut' }}
        viewport={{ once: false, amount: 0.3 }}
        className="hidden md:grid md:grid-cols-4 lg:grid-cols-4 xl:grid-cols-5 gap-8"
      >
        {filteredProjects.map((project: Project) => (
          <a
            key={project.id}
            className=" text-white rounded-xl h-[300px] flex items-center justify-center text-xl shadow-base"
            href="/projects/single-project"
          >
            <ProjectCard
              name={project.name}
              image={project.image}
              codeUrl={project.codeUrl}
              type={project.type}
              size={200}
            />
          </a>
        ))}
      </motion.div>
    </div>
  );
};

export default AllProjects;
