'use client';

import React, { useEffect, useState } from 'react';
import CustomCarousel from '../project/custom-carousel';
import ProjectCard from '../project/project-card';
import { TabSectionProps } from '@/interfaces';
import { motion } from 'framer-motion';
import { getFilterProjects } from '@/lib/actions/project.actions';
import { ProjectCardData } from '@/types';

const ProjectCarousel = <T extends string>({
  tab,
  types,
}: TabSectionProps<T>) => {
  const [activeType, setActiveType] = useState<TabSectionProps['types']>(types);

  const [filteredProjects, setFilteredProjects] = useState<
    ProjectCardData[] | null
  >(null);

  const [loading, setLoading] = useState<boolean>(true);

  useEffect(() => {
    const fetchFilteredProjects = async () => {
      setLoading(true);

      const projects = await getFilterProjects({ activeType });

      const normalized: ProjectCardData[] = projects.map((p) => ({
        id: p.id,
        projectName: p.projectName,
        projectThumbnail: p.projectThumbnail!,
        short_description: p.short_description,
        siteLink: p.siteLink,
        codeLink: p.codeLink,
        images: p.images,
        skills: p.skills.map((s) => s.skillName),
      }));

      setFilteredProjects(normalized);
      setLoading(false);
    };

    fetchFilteredProjects();
  }, [activeType]);

  return (
    <div>
      <div className="flex justify-center gap-8 mt-12 text-lg mb-0 lg:mb-12">
        {tab &&
          tab.map((t) => (
            <button
              key={t}
              onClick={() => setActiveType(t)}
              className={`transition-colors duration-200 ${
                activeType === t
                  ? 'text-amber-300 font-semibold border-b-2 border-amber-300'
                  : 'text-gray-100 hover:text-gray-200'
              }   `}
            >
              {t}
            </button>
          ))}
      </div>

      {loading ? (
        <div className="text-center text-amber-300">Loading skills...</div>
      ) : (
        <>
          <div className="block md:hidden mt-8">
            <CustomCarousel>
              {filteredProjects?.map((project: ProjectCardData) => (
                <motion.div
                  initial={{ opacity: 0, x: 150 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.8, ease: 'easeOut' }}
                  viewport={{ once: false, amount: 0.3 }}
                  key={project.id}
                  className="text-white  rounded-xl h-75 flex items-center justify-center text-xl shadow-base"
                >
                  <div className="w-full py-5">
                    <ProjectCard projectData={project} />
                  </div>
                </motion.div>
              ))}
            </CustomCarousel>
          </div>
          <div className="hidden md:block xl:hidden mt-12">
            <CustomCarousel>
              {filteredProjects?.map((project: ProjectCardData) => (
                <motion.div
                  initial={{ opacity: 0, x: 150 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.8, ease: 'easeOut' }}
                  viewport={{ once: false, amount: 0.3 }}
                  key={project.id}
                  className="text-white rounded-xl h-75 flex items-center justify-center text-xl shadow-base"
                >
                  <div className="w-full">
                    <ProjectCard projectData={project} />
                  </div>
                </motion.div>
              ))}
            </CustomCarousel>
          </div>

          <div className="hidden xl:block mt-4">
            <CustomCarousel>
              {filteredProjects?.map((project: ProjectCardData) => (
                <motion.div
                  initial={{ opacity: 0, x: 150 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.8, ease: 'easeOut' }}
                  viewport={{ once: false, amount: 0.3 }}
                  key={project.id}
                  className="text-white rounded-xl h-100 flex items-center justify-center text-xl shadow-base"
                >
                  <div className="w-full">
                    <ProjectCard projectData={project} />
                  </div>
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
