import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { Project } from '@prisma/client';

const ProjectCard = ({ projectData }: { projectData?: Project }) => {
  if (!projectData) return null;

  const teckList = ['Next.js', 'PostgreSQL', 'Stripe'];

  return (
    <Link
      href={`/projects/${projectData.id}`}
      className="group relative bg-[#0b122c] rounded-2xl overflow-hidden shadow-lg block"
    >
      <div className="relative h-56">
        <Image
          src={projectData.projectThumbnail}
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
          Language learning web application.
        </p>

        {/* Tech stack */}
        <div className="flex flex-wrap gap-2 mt-4">
          {teckList.map((tech) => (
            <span
              key={tech}
              className="text-xs px-3 py-1 rounded-full bg-[#141b3d] text-gray-300"
            >
              {tech}
            </span>
          ))}
        </div>
      </div>
    </Link>
  );
};

export default ProjectCard;
