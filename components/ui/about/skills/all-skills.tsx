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

      <div className="flex flex-wrap justify-center md:justify-end gap-6 mb-14">
        {tab?.map((t) => (
          <button
            key={t}
            onClick={() => setActiveType(t)}
            className={`relative text-sm md:text-base transition-all ${
              activeType === t
                ? 'text-amber-500 font-semibold'
                : 'text-gray-500 hover:text-gray-700'
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
