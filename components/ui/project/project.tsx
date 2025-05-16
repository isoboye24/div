import React from 'react';
import { motion } from 'framer-motion';
import ProjectCard from '../project/project-card';
import { Project } from '@prisma/client';

const ProjectComponent = ({ projects }: { projects?: Project[] }) => {
  return (
    <>
      {/* Mobile */}
      <div className="grid md:hidden grid-cols-2 gap-4 w-[70vw]">
        {projects?.map((project: Project) => (
          <motion.a
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: 'easeOut' }}
            viewport={{ once: false, amount: 0.3 }}
            key={project.id}
            className="flex text-white rounded-xl h-[165px] justify-center shadow-base text-xs"
          >
            <ProjectCard projectData={project} size={120} />
          </motion.a>
        ))}
      </div>

      {/* Desktop */}
      <motion.div
        initial={{ opacity: 0, x: -150 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.8, ease: 'easeOut' }}
        viewport={{ once: false, amount: 0.3 }}
        className="hidden md:grid md:grid-cols-4 lg:grid-cols-4 xl:grid-cols-5 gap-8"
      >
        {projects?.map((project: Project) => (
          <a
            key={project.id}
            className=" text-white rounded-xl h-[300px] flex items-center justify-center text-xl shadow-base"
          >
            <ProjectCard projectData={project} size={200} />
          </a>
        ))}
      </motion.div>
    </>
  );
};

export default ProjectComponent;
