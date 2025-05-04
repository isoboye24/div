'use server';

import { prisma } from '@/db/prisma';
import { upsertProjectSchema } from '../validator';
import { revalidatePath } from 'next/cache';
import { z } from 'zod';
import { formatError } from '../utils';

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
    let project;

    // Upsert the project
    if (id) {
      project = await prisma.project.upsert({
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
      project = await prisma.project.create({
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
        ? 'Project updated successfully'
        : 'Project created successfully',
      data: project,
    };
  } catch (error) {
    console.error('Upsert project error:', error);
    return {
      success: false,
      message: 'Failed to upsert project',
    };
  }
};

export const checkIfProjectExists = async (name: string) => {
  try {
    const existing = await prisma.project.findFirst({
      where: {
        projectName: {
          equals: name,
          mode: 'insensitive',
        },
      },
    });

    return !!existing;
  } catch (error) {
    console.error('Error checking for existing project:', error);
    return false;
  }
};

export const getAllProjects = async () => {
  try {
    const projects = await prisma.project.findMany({
      orderBy: [
        { publish: 'desc' },
        { rate: 'desc' },
        { createdAt: 'desc' },
        { projectName: 'asc' },
      ],
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

export const getProjectById = async (id: string) => {
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

export async function deleteProject(id: string) {
  try {
    const project = await prisma.project.findFirst({
      where: { id },
    });

    if (!project) throw new Error('Project not found');

    await prisma.project.delete({ where: { id } });

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

export const getAllFilterProjects = async ({
  activeType,
}: {
  activeType: string;
}) => {
  const categories = await prisma.category.findMany({
    orderBy: [{ name: 'asc' }],
  });

  const projects = await prisma.project.findMany({
    orderBy: [
      { publish: 'desc' },
      { rate: 'desc' },
      { createdAt: 'desc' },
      { projectName: 'asc' },
    ],
  });

  const filteredProjects = projects.filter((project) => {
    const category = categories.find((cat) => cat.id === project.categoryId);
    return activeType === 'All' || category?.name === activeType;
  });

  return filteredProjects.slice(0, 3);
};

export const getFilterProjects = async ({
  activeType,
}: {
  activeType: string;
}) => {
  const categories = await prisma.category.findMany({
    orderBy: [{ name: 'asc' }],
  });

  const projects = await prisma.project.findMany({
    orderBy: [
      { publish: 'desc' },
      { rate: 'desc' },
      { createdAt: 'desc' },
      { projectName: 'asc' },
    ],
  });

  const allFilteredProjects = projects.filter((project) => {
    const category = categories.find((cat) => cat.id === project.categoryId);
    return activeType === 'All' ? true : category?.name === activeType;
  });

  return allFilteredProjects;
};
