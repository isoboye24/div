import React from 'react';
import { motion } from 'framer-motion';
import ProjectCard from '../project/project-card';
import { ProjectCardData } from '@/types';

const ProjectComponent = ({ projects }: { projects?: ProjectCardData[] }) => {
  return (
    <>
      {/* Mobile */}
      <div className="grid md:hidden grid-cols-1 gap-4">
        {projects?.map((project: ProjectCardData) => (
          <motion.a
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: 'easeOut' }}
            viewport={{ once: false, amount: 0.3 }}
            key={project.id}
            className="flex text-white rounded-xl justify-center shadow-base text-xs"
          >
            <ProjectCard projectData={project} />
          </motion.a>
        ))}
      </div>

      {/* Desktop */}
      <motion.div
        initial={{ opacity: 0, x: -150 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.8, ease: 'easeOut' }}
        viewport={{ once: false, amount: 0.3 }}
        className="hidden md:grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8"
      >
        {projects?.map((project: ProjectCardData) => (
          <a
            key={project.id}
            className=" text-white rounded-xl flex items-center justify-center text-xl shadow-base"
          >
            <ProjectCard projectData={project} />
          </a>
        ))}
      </motion.div>
    </>
  );
};

export default ProjectComponent;
