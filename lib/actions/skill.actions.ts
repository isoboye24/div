'use server';

import { prisma } from '@/db/prisma';
import { upsertSkillSchema } from '../validator';
import { revalidatePath } from 'next/cache';
import { z } from 'zod';
import { formatError } from '../utils';
import { PAGE_SIZE } from '../constants';
import { GetAllSkillsParams } from '@/types';

export const upsertSkill = async (data: z.infer<typeof upsertSkillSchema>) => {
  const parsed = upsertSkillSchema.safeParse(data);

  if (!parsed.success) {
    return {
      success: false,
      message: 'Invalid skill data',
      errors: parsed.error.flatten().fieldErrors,
    };
  }

  const { id, skillName, categoryId, level, publish } = parsed.data;

  try {
    let skillData;

    // Upsert the skill
    if (id) {
      skillData = await prisma.skill.upsert({
        where: { id },
        update: { skillName, categoryId, level, publish },
        create: { skillName, categoryId, level, publish },
      });
    } else {
      skillData = await prisma.skill.create({
        data: { skillName, categoryId, level, publish },
      });
    }

    return {
      success: true,
      message: id ? 'Skill updated successfully' : 'Skill created successfully',
      data: skillData,
    };
  } catch (error) {
    console.error('Upsert skill error:', error);
    return {
      success: false,
      message: 'Failed to upsert skill',
    };
  }
};

export const checkIfSkillExists = async (
  skillName: string,
  categoryId: string
) => {
  try {
    const existing = await prisma.skill.findFirst({
      where: {
        skillName: {
          equals: skillName,
          mode: 'insensitive', //case-insensitive
        },
        categoryId,
      },
    });

    return !!existing;
  } catch (error) {
    console.error('Error checking for existing skill:', error);
    return false;
  }
};

export const getAllSkill = async ({
  limit = PAGE_SIZE,
  page,
}: {
  limit?: number;
  page: number;
}) => {
  try {
    const skillData = await prisma.skill.findMany({
      orderBy: [{ publish: 'desc' }, { level: 'desc' }],
      take: limit,
      skip: (page - 1) * limit,
    });

    const dataCount = await prisma.skill.count();

    return {
      success: true,
      data: skillData,
      totalPages: Math.ceil(dataCount / limit),
    };
  } catch (error) {
    console.error('Error fetching skill:', error);
    return {
      success: false,
      message: 'Failed to fetch skill',
    };
  }
};

export async function getAllSkills({
  page = 1,
  limit = PAGE_SIZE,
}: GetAllSkillsParams) {
  const skip = (page - 1) * limit;

  const [skills, total] = await Promise.all([
    prisma.skill.findMany({
      skip,
      take: limit,
      orderBy: [{ publish: 'desc' }, { level: 'desc' }],
    }),
    prisma.skill.count(),
  ]);

  return {
    skills,
    total,
    currentPage: page,
    totalPages: Math.ceil(total / limit),
  };
}

export const getAllFilterSkills = async ({
  activeType,
}: {
  activeType: string;
}) => {
  const categoryFilter = ['Frontend', 'Backend', 'Graphics'];

  const whereCondition = {
    publish: true,
    category: {
      name: activeType === 'All' ? { in: categoryFilter } : activeType,
    },
  };

  const allFilteredSkills = await prisma.skill.findMany({
    where: whereCondition,
    include: {
      category: true, // optional, if you want to access category info in results
    },
    orderBy: {
      level: 'desc',
    },
  });

  return allFilteredSkills;
};

export const getSkillById = async (id: string) => {
  try {
    const skillData = await prisma.skill.findFirst({
      where: { id },
    });

    if (!skillData) {
      return {
        success: false,
        message: 'Skill not found',
      };
    }

    return {
      success: true,
      data: skillData,
    };
  } catch (error) {
    console.error('Error fetching skill:', error);
    return {
      success: false,
      message: 'Failed to fetch skill',
    };
  }
};

export async function deleteSkill(id: string) {
  try {
    const skillData = await prisma.skill.findFirst({
      where: { id },
    });

    if (!skillData) throw new Error('Skill not found');

    await prisma.skill.delete({ where: { id } });

    revalidatePath('/admin/skills');

    return {
      success: true,
      message: 'Skill deleted successfully',
    };
  } catch (error) {
    return { success: false, message: formatError(error) };
  }
}
