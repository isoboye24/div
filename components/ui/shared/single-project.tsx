import { Project } from '@prisma/client';
import React from 'react';
import { Button } from '../button';
import ImageCarousel from './image-carousel';
import { getAllSimilarProjects } from '@/lib/actions/project.actions';
import ProjectCard from '../project/project-card';
import CustomCarousel from '../project/custom-carousel';

const SingleProject = async ({ project }: { project: Project }) => {
  const similarProjects = await getAllSimilarProjects({
    categoryId: project.categoryId,
    currentProjectId: project.id,
  });

  return (
    <div className="wrapper">
      <div className="grid grid-cols-1 lg:grid-cols-[1.5fr_1fr] gap-5">
        <div className="justify-items-center">
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

      <div className="mb-30">
        {similarProjects.length === 0 ? (
          ''
        ) : (
          <div className="">
            <hr className="mt-30 mb-5" />
            <h1 className="text-2xl font-semibold">Similar Projects</h1>
          </div>
        )}
        <div className="hidden md:flex mt-10 gap-5">
          {similarProjects.map((similarProj) => (
            <div key={similarProj.id} className="">
              <ProjectCard projectData={similarProj} size={150} />
            </div>
          ))}
        </div>
        <div className="flex md:hidden mt-10 gap-5">
          <CustomCarousel>
            {similarProjects.map((similarProj) => (
              <div key={similarProj.id}>
                <ProjectCard projectData={similarProj} size={150} />
              </div>
            ))}
          </CustomCarousel>
        </div>
      </div>
    </div>
  );
};

export default SingleProject;
