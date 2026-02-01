'use server';

import { prisma } from '@/lib/prisma';
import { upsertProjectSchema } from '../validator';
import { revalidatePath } from 'next/cache';
import { z } from 'zod';
import { formatError } from '../utils';

export const upsertProject = async (
  data: z.infer<typeof upsertProjectSchema>,
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
    short_description,
    description,
    categoryId,
    publish,
    rate,
    skills,
  } = parsed.data;

  try {
    // Upsert the project
    const project = id
      ? await prisma.project.update({
          where: { id },
          data: {
            projectName,
            projectThumbnail,
            siteLink,
            codeLink,
            images,
            slug,
            description,
            short_description,
            categoryId,
            publish,
            rate,
            skills: {
              set: skills.map((id) => ({ id })),
            },
          },
        })
      : await prisma.project.create({
          data: {
            projectName,
            projectThumbnail,
            siteLink,
            codeLink,
            images,
            slug,
            description,
            short_description,
            categoryId,
            publish,
            rate,
            skills: {
              connect: skills.map((id) => ({ id })),
            },
          },
        });

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
    include: {
      skills: {
        select: {
          id: true,
        },
      },
    },
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
      skills: project.skills.map((s) => s.id),
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
  const categoryFilter = ['Web', 'Desktop'];

  const whereCondition = {
    publish: true,
    category: {
      name: activeType === 'All' ? { in: categoryFilter } : activeType,
    },
  };

  const allFilteredProjects = await prisma.project.findMany({
    where: whereCondition,
    include: {
      category: true,
    },
    orderBy: [
      { publish: 'desc' },
      { rate: 'desc' },
      { createdAt: 'desc' },
      { projectName: 'asc' },
    ],
  });

  return allFilteredProjects;
};
export const getAllSimilarProjects = async ({
  categoryId,
  currentProjectId,
}: {
  categoryId: string;
  currentProjectId: string;
}) => {
  const takeCount = 3;

  const allSimilarProjects = await prisma.project.findMany({
    where: {
      publish: true,
      category: {
        id: categoryId,
      },
      NOT: {
        id: currentProjectId, // exclude the current project
      },
    },
    include: {
      category: true,
    },
    orderBy: [
      { publish: 'desc' },
      { rate: 'desc' },
      { createdAt: 'desc' },
      { projectName: 'asc' },
    ],
    take: takeCount,
  });

  return allSimilarProjects;
};

export const getFilterProjects = async ({
  activeType,
}: {
  activeType: string;
}) => {
  const takeCount = 3;
  const filteredProjects = await prisma.project.findMany({
    where: {
      publish: true,
      category: {
        name: activeType,
      },
    },
    include: {
      category: true,
    },
    orderBy: [
      { publish: 'desc' },
      { rate: 'desc' },
      { createdAt: 'desc' },
      { projectName: 'asc' },
    ],
    take: takeCount,
  });

  return filteredProjects;
};
