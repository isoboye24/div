import { projectList } from '@/db/project-data';
import { Project } from '@/types';
import { prisma } from '@/lib/prisma';
import { upsertProjectSchema } from '../validator';
import { revalidatePath } from 'next/cache';
import { z } from 'zod';
import { formatError } from '../utils';

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

export const upsertProject = async (
  data: z.infer<typeof upsertProjectSchema>
) => {
  const parsed = upsertProjectSchema.safeParse(data);

  if (!parsed.success) {
    return {
      success: false,
      message: 'Project not found',
      errors: parsed.error.flatten().fieldErrors,
    };
  }

  const {
    id,
    projectName,
    projectThumbnail,
    siteLink,
    codeLink,
    images,
    slug,
    description,
    categoryId,
    publish,
    rate,
  } = parsed.data;

  try {
    let category;

    // Upsert the category
    if (id) {
      category = await prisma.project.upsert({
        where: { id },
        update: {
          projectName,
          projectThumbnail,
          siteLink,
          codeLink,
          images,
          slug,
          description,
          categoryId,
          publish,
          rate,
        },
        create: {
          projectName,
          projectThumbnail,
          siteLink,
          codeLink,
          images,
          slug,
          description,
          categoryId,
          publish,
          rate,
        },
      });
    } else {
      category = await prisma.project.create({
        data: {
          projectName,
          projectThumbnail,
          siteLink,
          codeLink,
          images,
          slug,
          description,
          categoryId,
          publish,
          rate,
        },
      });
    }

    return {
      success: true,
      message: id
        ? 'Category updated successfully'
        : 'Category created successfully',
      data: category,
    };
  } catch (error) {
    console.error('Upsert category error:', error);
    return {
      success: false,
      message: 'Failed to upsert category',
    };
  }
};

export const getAllProjects = async () => {
  try {
    const projects = await prisma.project.findMany({
      orderBy: [{ publish: 'desc' }, { rate: 'desc' }, { createdAt: 'desc' }],
    });

    return {
      success: true,
      data: projects,
    };
  } catch (error) {
    console.error('Error fetching projects:', error);
    return {
      success: false,
      message: 'Failed to fetch projects',
    };
  }
};

export const getProjectById = async (id: number) => {
  try {
    const project = await prisma.project.findFirst({
      where: { id },
    });

    if (!project) {
      return {
        success: false,
        message: 'Project not found',
      };
    }

    return {
      success: true,
      data: project,
    };
  } catch (error) {
    console.error('Error fetching project:', error);
    return {
      success: false,
      message: 'Failed to fetch project',
    };
  }
};

export async function deleteProject(id: number) {
  try {
    const project = await prisma.project.findFirst({
      where: { id },
    });

    if (!project) throw new Error('Project not found');

    await prisma.category.delete({ where: { id } });

    revalidatePath('/admin/projects');

    return {
      success: true,
      message: 'Project deleted successfully',
    };
  } catch (error) {
    return { success: false, message: formatError(error) };
  }
}

export const getTotalProjects = async () => {
  try {
    const total = await prisma.project.count();
    return { success: true, total };
  } catch (error) {
    console.error('Error calculating total projects:', error);
    return { success: false, message: 'Failed to count projects' };
  }
};
