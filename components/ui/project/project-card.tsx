import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { Project } from '@prisma/client';

const ProjectCard = ({
  projectData,
  size,
}: {
  projectData?: Project;
  size: number;
}) => {
  if (!projectData) return null;

  return (
    <Link
      href={`/projects/${projectData.id}`}
      className="bg-gray-100 shadow-md overflow-hidden transition-transform hover:scale-105 p-2 md:p-4 block"
    >
      <Image
        src={projectData.projectThumbnail}
        alt={projectData.projectName}
        className="w-full object-cover rounded-md mb-2"
        style={{ height: `${size}px` }}
        width={500}
        height={size}
      />
      <h2 className="text-xs md:text-base lg:text-xl lg:font-semibold mb-1 text-gray-950">
        {projectData.projectName}
      </h2>
    </Link>
  );
};

export default ProjectCard;
