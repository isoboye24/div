import React from 'react';
import SectionTitle from '../shared/section-title';

const AboutTexts = () => {
  return (
    <>
      <div className="pr-0 md:pr-5 lg:pr-10">
        <SectionTitle title="About Me" />
        <p className="text-justify">
          I am a Software Developer graduated at Belarussian State University of
          Informatics and Radio-electronics, Minsk, Belarus and currently
          located in Baunatal, Hessen, Germany. I am looking to take on more
          work to increase my skills as a Software Developer
          <a href="/about" className="text-amber-500 underline italic ml-1">
            ... more
          </a>
        </p>
      </div>
    </>
  );
};

export default AboutTexts;
