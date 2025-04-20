import React from 'react';
import QuickLink from './quick-link';

const QuickLinks = () => {
  return (
    <>
      <h2 className="text-gray-300 mb-6">Quick Links</h2>
      <div className="">
        <p className="mb-3 ">
          <QuickLink linkText="About Me" url="/about" />
        </p>
        <p className="mb-3">
          <QuickLink linkText="Contact Me" url="/contact" />
        </p>
        <p className="mb-3">
          <QuickLink linkText="My Projects" url="/projects" />
        </p>
        <p className="mb-3">
          <QuickLink linkText="My Skills" url="/about" />
        </p>
        <p className="mb-3">
          <QuickLink linkText="Blog" url="/blog" />
        </p>
      </div>
    </>
  );
};

export default QuickLinks;
