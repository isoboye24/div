import React from 'react';

const SectionTitle = ({ title }: { title: string }) => {
  return (
    <>
      <div className="text-center justify-items-center mb-10">
        <h2 className="text-dark text-bold text-2xl md:text-3xl">{title}</h2>
        <hr className="w-[50px] md:w-[60px] border-amber-500 border-2 mt-3" />
      </div>
    </>
  );
};

export default SectionTitle;
