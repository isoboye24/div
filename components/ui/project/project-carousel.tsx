'use client';

import React, { useEffect, useState } from 'react';
import CustomCarousel from '../project/custom-carousel';
import ProjectCard from '../project/project-card';
import { TabSectionProps } from '@/interfaces';
import { motion } from 'framer-motion';
import { getFilterProjects } from '@/lib/actions/project.actions';
import { Category, Project } from '@prisma/client';

const ProjectCarousel = <T extends string>({
  tab,
  types,
}: TabSectionProps<T>) => {
  const [activeType, setActiveType] = useState<TabSectionProps['types']>(types);
  const [filteredProjects, setFilteredProjects] = useState<
    (Project & { category: Category })[] | null
  >(null);

  const [loading, setLoading] = useState<boolean>(true);

  useEffect(() => {
    const fetchFilteredProjects = async () => {
      setLoading(true);
      const projects = await getFilterProjects({ activeType });
      setFilteredProjects(projects);
      setLoading(false);
    };

    fetchFilteredProjects();
  }, [activeType]);

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

      {loading ? (
        <div className="text-center">Loading skills...</div>
      ) : (
        <>
          <div className="block xl:hidden">
            <CustomCarousel>
              {filteredProjects?.map((project: Project) => (
                <motion.div
                  initial={{ opacity: 0, x: 150 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.8, ease: 'easeOut' }}
                  viewport={{ once: false, amount: 0.3 }}
                  key={project.id}
                  className="text-white rounded-xl h-[300px] flex items-center justify-center text-xl shadow-base"
                >
                  <ProjectCard projectData={project} size={200} />
                </motion.div>
              ))}
            </CustomCarousel>
          </div>

          <div className="hidden xl:block mt-4">
            <CustomCarousel>
              {filteredProjects?.map((project: Project) => (
                <motion.div
                  initial={{ opacity: 0, x: 150 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.8, ease: 'easeOut' }}
                  viewport={{ once: false, amount: 0.3 }}
                  key={project.id}
                  className="text-white rounded-xl h-[400px] flex items-center justify-center text-xl shadow-base"
                >
                  <ProjectCard projectData={project} size={200} />
                </motion.div>
              ))}
            </CustomCarousel>
          </div>
        </>
      )}
    </div>
  );
};

export default ProjectCarousel;
