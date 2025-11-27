'use client';

import React from 'react';
import TopModal from './top-modal';

const HomeTopSection = () => {
  return (
    <section className="flex relative bg-linear-to-br w-full h-[600px] md:h-[900px] lg:h-screen from-teal-100 md:from-teal-300 md:to-white-300 items-center justify-center">
      <TopModal />
    </section>
  );
};

export default HomeTopSection;
