import React from 'react';
import SectionTitle from '../shared/section-title';

const AboutTexts = () => {
  return (
    <>
      <div className="pr-0 md:pr-5 lg:pr-10">
        <SectionTitle title="About Me" />
        <p className="text-justify">
          Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam
          nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat,
          sed diam voluptua. At vero eos et accusam et justo duo dolores et ea
          rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem
          ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur
          sadipscing elitr,{' '}
          <a href="/about" className="text-amber-500 underline italic">
            ...more
          </a>
        </p>
      </div>
    </>
  );
};

export default AboutTexts;
