import React from 'react';
import PictureFrame from '@/components/ui/about/picture-frame';
import Picture1 from '@/public/images/family2.1.jpg';
import Picture2 from '@/public/images/vincent2.2.jpg';
import Picture3 from '@/public/images/family3.jpg';

const PictureFrames = () => {
  return (
    <>
      <div className="hidden xl:flex items-center justify-center p-10">
        <div className="relative w-[100%] h-[300px] ">
          <PictureFrame
            src={Picture3}
            rotation="rotate-10"
            zIndex="z-30"
            position="top-6 left-6"
            size={300}
            translateX="translate-x-10"
            translateY="translate-y-30"
          />
          <PictureFrame
            src={Picture1}
            rotation="rotate-20"
            zIndex="z-10"
            position="top-3 left-3"
            size={300}
            translateX="translate-x-50"
            translateY="translate-y-0"
          />
          <PictureFrame
            src={Picture2}
            rotation="rotate-0"
            zIndex="z-20"
            position="top-0 left-0"
            size={300}
            translateX="-translate-x-10"
            translateY="-translate-y-30"
          />
        </div>
      </div>
      <div className="hidden md:flex xl:hidden items-center justify-center p-10">
        <div className="relative w-[100%] h-[300px] ">
          <PictureFrame
            src={Picture3}
            rotation="rotate-45"
            zIndex="z-20"
            position="top-6 left-6"
            size={200}
            translateX="translate-x-10"
            translateY="translate-y-30"
          />
          <PictureFrame
            src={Picture1}
            rotation="rotate-30"
            zIndex="z-10"
            position="top-3 left-3"
            size={200}
            translateX="translate-x-20"
            translateY="translate-y-0"
          />
          <PictureFrame
            src={Picture2}
            rotation="rotate-0"
            zIndex="z-30"
            position="top-0 left-0"
            size={200}
            translateX="-translate-x-10"
            translateY="-translate-y-10"
          />
        </div>
      </div>
    </>
  );
};

export default PictureFrames;
