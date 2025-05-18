import { Project } from '@prisma/client';
import React from 'react';
import { Button } from '../button';
import ImageCarousel from './image-carousel';

const SingleProject = ({ project }: { project: Project }) => {
  return (
    <div className="wrapper grid grid-cols-1 lg:grid-cols-[1.5fr_1fr] gap-5">
      <div className=" justify-items-center">
        <div className="w-[100%] lg:w-[100%]">
          <ImageCarousel images={project.images} />
        </div>
      </div>
      <div className="flex flex-col justify-between">
        <div>
          <h1 className="text-xl md:text-3xl">{project?.projectName}</h1>
          <p className="mt-10 mb-30 text-base text-gray-400">
            {project?.description}
          </p>
        </div>

        <div
          className={`mt-10 px-10 md:p-0 grid ${
            project?.siteLink ? 'grid-cols-2' : 'grid-cols-1'
          }`}
        >
          <div>
            {project?.siteLink && (
              <a target="_blank" href={`${project.siteLink}`}>
                <Button>Visit Site</Button>
              </a>
            )}
          </div>
          <div
            className={`${
              project?.siteLink
                ? 'flex justify-end'
                : 'flex justify-center items-center'
            }`}
          >
            {project?.codeLink && (
              <a target="_blank" href={`${project.codeLink}`}>
                <Button>Code</Button>
              </a>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default SingleProject;
