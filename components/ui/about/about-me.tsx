import React from 'react';
import AboutMeText from './about-me-text';
import PolygonPictureFrame from '../shared/polygon-picture-frame';
import Picture from '@/public/images/vincent2.2.jpg';

const AboutMe = () => {
  return (
    <div className="wrapper">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-10 md:gap-5 sm:justify-items-center">
        <div className="order-2 md:order-1">
          <AboutMeText />
        </div>
        <div className="block md:hidden order-1 md:order-2">
          <PolygonPictureFrame
            src={Picture}
            sides={20}
            borderColor="#07c5c5"
            size={300}
          />
        </div>
        <div className="hidden md:block lg:hidden order-1 md:order-2">
          <PolygonPictureFrame
            src={Picture}
            sides={20}
            borderColor="#07c5c5"
            size={300}
          />
        </div>
        <div className="hidden lg:block xl:hidden order-1 md:order-2">
          <PolygonPictureFrame
            src={Picture}
            sides={20}
            borderColor="#07c5c5"
            size={400}
          />
        </div>
        <div className="hidden xl:block order-1 md:order-2">
          <PolygonPictureFrame
            src={Picture}
            sides={20}
            borderColor="#07c5c5"
            size={400}
          />
        </div>
      </div>
    </div>
  );
};

export default AboutMe;
