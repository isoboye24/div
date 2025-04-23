import { projectList } from '@/db/project-data';
import { Project } from '@/types';

export const getFilterProjects = ({ activeType }: { activeType: string }) => {
  const filteredProjects = projectList
    .filter((project: Project) => project.type === activeType)
    .slice(0, 3); // limit to 3

  return filteredProjects;
};

export const getAllFilterProjects = ({
  activeType,
}: {
  activeType: string;
}) => {
  const allFilteredProjects = projectList.filter((project: Project) =>
    activeType === 'All' ? true : project.type === activeType
  );

  return allFilteredProjects;
};
