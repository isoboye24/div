'use client';

import React, { useEffect, useState } from 'react';

import { TabSectionProps } from '@/interfaces';
import ProjectComponent from './project';
import { getAllFilterProjects } from '@/lib/actions/project.actions';
import { Category, Project } from '@prisma/client';

const AllProjects = <T extends string>({ tab, types }: TabSectionProps<T>) => {
  const [activeType, setActiveType] = useState<T>(types);
  const [filteredProjects, setFilteredProjects] = useState<
    (Project & { category: Category })[] | null
  >(null);

  const [loading, setLoading] = useState<boolean>(true);

  useEffect(() => {
    const fetchFilteredProjects = async () => {
      setLoading(true);
      const projects = await getAllFilterProjects({ activeType });
      setFilteredProjects(projects);
      setLoading(false);
    };

    fetchFilteredProjects();
  }, [activeType]);

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
                  : 'text-gray-500 hover:text-gray-600'
              }`}
            >
              {t}
            </button>
          ))}
      </div>

      {loading ? (
        <div className="text-center">Loading skills...</div>
      ) : (
        <ProjectComponent projects={filteredProjects || []} />
      )}
    </div>
  );
};

export default AllProjects;
