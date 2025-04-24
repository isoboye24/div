import { Metadata } from 'next';
import React from 'react';
import CategoryForm from '../../category-form';

export const metadata: Metadata = {
  title: 'Create Category',
};

const CreateCategory = () => {
  return (
    <div className="">
      <h2 className="h2-bold">Create Category</h2>
      <div className="my-8 justify-items-center">
        <div className="w-full lg:w-[50vw]">
          <CategoryForm type="Create" />
        </div>
      </div>
    </div>
  );
};

export default CreateCategory;
