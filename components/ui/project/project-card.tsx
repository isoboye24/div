import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { ProjectCardData } from '@/types';

const ProjectCard = ({ projectData }: { projectData?: ProjectCardData }) => {
  if (!projectData) return null;

  return (
    <Link
      href={`/projects/${projectData.id}`}
      className="group relative bg-[#0b122c] rounded-2xl overflow-hidden shadow-lg block"
    >
      <div className="relative h-56 w-60 md:w-75">
        <Image
          src={projectData.projectThumbnail!}
          alt={projectData.projectName}
          className="object-cover transition-transform duration-500 group-hover:scale-105"
          fill
        />
      </div>

      <div className="py-6 px-4">
        <h3 className=" text-base lg:text-xl lg:font-semibold mb-1 font-semibold text-white">
          {projectData.projectName}
        </h3>

        <p className="mt-2 text-gray-400 text-sm">
          {projectData.short_description}
        </p>

        {/* Tech stack */}
        <div className="flex flex-wrap gap-2 mt-4">
          {projectData.skills.map((skill) => (
            <span
              key={skill}
              className="text-xs px-3 py-1 rounded-full bg-[#141b3d] text-gray-300"
            >
              {skill}
            </span>
          ))}
        </div>
      </div>
    </Link>
  );
};

export default ProjectCard;
