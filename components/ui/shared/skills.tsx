'use client';

import SkillCircle from '@/components/ui/shared/skillCircle';
import { Skill } from '@/types';

const Skills = ({ skills = [] }: { skills?: Skill[] }) => {
  return (
    <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6 gap-4">
      {skills.map((skill) => (
        <SkillCircle
          key={skill.id}
          name={skill.skillName}
          level={skill.level}
        />
      ))}
    </div>
  );
};

export default Skills;
