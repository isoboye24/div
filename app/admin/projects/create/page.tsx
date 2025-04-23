import { Metadata } from 'next';
import React from 'react';
import ProjectForm from '../../project-form';

export const metadata: Metadata = {
  title: 'Create Category',
};

const CreateProject = () => {
  return (
    <div className="">
      <h2 className="h2-bold text-center">Create Project</h2>
      <div className="my-8 justify-items-center">
        <div className="w-full lg:w-[50vw]">
          <ProjectForm type="Create" />
        </div>
      </div>
    </div>
  );
};

export default CreateProject;
