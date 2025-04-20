import React from 'react';
import TopModal from './top-modal';

const HomeTopSection = () => {
  return (
    <div className="flex relative bg-gradient-to-br w-full h-[600px] md:h-[700px] lg:h-[100vh] from-teal-100 md:from-teal-300 md:to-white-300 items-center justify-center">
      <TopModal />
    </div>
  );
};

export default HomeTopSection;
