'use client';

import { Skill } from '@/types';
import React from 'react';
import { motion } from 'framer-motion';

const Skills = ({ skills }: { skills?: Skill[] }) => {
  return (
    <div className=" max-w-3xl mx-auto">
      <div className="space-y-4 grid grid-cols-2 lg:grid-cols-3 gap-5 ">
        {skills?.map((skill) => (
          <div key={skill.id}>
            <div className="flex justify-between mb-1">
              <span className="font-medium">{skill.skillName}</span>
              <span className="text-sm text-gray-500">{skill.level}%</span>
            </div>
            <div className="w-full bg-gray-200 rounded-full h-2 md:h-3">
              <motion.div
                initial={{ opacity: 0, x: -50 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8, ease: 'easeOut' }}
                viewport={{ once: false, amount: 0.3 }}
                className={`h-2 md:h-3 rounded-full ${
                  skill.level >= 90
                    ? 'bg-amber-500'
                    : skill.level >= 75
                    ? 'bg-teal-500'
                    : 'bg-red-400'
                }`}
                style={{ width: `${skill.level}%` }}
              ></motion.div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Skills;
