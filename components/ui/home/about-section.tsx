import AboutTexts from '@/components/ui/about/about-texts';
import PictureFrames from '@/components/ui/about/picture-frames';
import React from 'react';

const AboutSection = () => {
  return (
    <div className="wrapper grid grid-cols-1 md:grid-cols-2 gap-4">
      <div className="">
        <AboutTexts />
      </div>
      <div className="">
        <PictureFrames />
      </div>
    </div>
  );
};

export default AboutSection;
