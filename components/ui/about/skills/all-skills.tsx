'use client';

import Skills from '@/app/(root)/about/skills';
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
      <h2 className="text-2xl font-bold text-center mb-6">My Skills</h2>

      <div className="flex justify-center md:justify-end text-base md:text-lg xl:text-2xl gap-4 md:gap-8 mb-12 lg:mb-25">
        {tab?.map((t) => (
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
        <Skills skills={filteredSkills || []} />
      )}
    </div>
  );
};

export default AllSkills;
