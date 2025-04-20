import React from 'react';
import Image from 'next/image';
import { Project } from '@/types';

const ProjectCard: React.FC<Project> = ({ name, image, size, children }) => {
  return (
    <a
      href="/projects/single-project"
      className="bg-gray-100 shadow-md overflow-hidden transition-transform hover:scale-105 p-2 md:p-4"
    >
      {
        <Image
          src={image}
          alt={name}
          className="w-full object-cover rounded-md mb-2"
          style={{ height: `${size}px` }}
        />
      }
      <h2 className="text-xs md:text-base lg:text-xl lg:font-semibold mb-1 text-gray-950">
        {name}
      </h2>

      {children}
    </a>
  );
};

export default ProjectCard;
