'use client';

import Skills from '@/components/ui/shared/skills';
import { TabSectionProps } from '@/interfaces';
import { getAllFilterSkills } from '@/lib/actions/skill.actions';
import { useEffect, useState } from 'react';
import { Skill } from '@/types';

const AllSkills = <T extends string>({ tab, types }: TabSectionProps<T>) => {
  const [activeType, setActiveType] = useState<T>(types);
  const [filteredSkills, setFilteredSkills] = useState<Skill[] | null>(null);
  const [loading, setLoading] = useState<boolean>(true);

  useEffect(() => {
    const fetchFilteredSkills = async () => {
      setLoading(true);
      const skills = await getAllFilterSkills({ activeType });
      setFilteredSkills(skills);
      setLoading(false);
    };

    fetchFilteredSkills();
  }, [activeType]);

  return (
    <div className="wrapper">
      <div className="mb-16 text-center">
        <h2 className="text-4xl font-bold text-black dark:text-gray-100">
          Skills & Technologies
        </h2>
        <p className="mt-4 text-black/80 max-w-2xl mx-auto dark:text-gray-300">
          Technologies I use to design, build, and scale modern web and desktop
          applications.
        </p>
      </div>

      <div className="flex flex-wrap justify-center md:justify-end gap-6 mb-14">
        {tab?.map((t) => (
          <button
            key={t}
            onClick={() => setActiveType(t)}
            className={`relative text-sm md:text-base transition-all ${
              activeType === t
                ? 'text-amber-500 font-semibold'
                : 'text-gray-700 hover:text-gray-400 dark:text-gray-300 dark:hover:text-gray-400'
            }`}
          >
            {t}
            {activeType === t && (
              <span className="absolute -bottom-2 left-0 h-0.5 w-full bg-amber-500 rounded-full" />
            )}
          </button>
        ))}
      </div>

      {loading ? (
        <div className="text-center">Loading skills...</div>
      ) : (
        <Skills skills={filteredSkills || []} />
      )}
    </div>
  );
};

export default AllSkills;
