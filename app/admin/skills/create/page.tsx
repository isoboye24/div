import { Metadata } from 'next';
import React from 'react';
import SkillForm from '../../skill-form';

export const metadata: Metadata = {
  title: 'Create Skill',
};

const CreateSkill = () => {
  return (
    <div className="">
      <h2 className="h2-bold text-center">Create Skill</h2>
      <div className="my-8 justify-items-center">
        <div className="w-full lg:w-[50vw]">
          <SkillForm type="Create" />
        </div>
      </div>
    </div>
  );
};

export default CreateSkill;
