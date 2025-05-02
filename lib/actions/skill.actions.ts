'use server';

import { prisma } from '@/db/prisma';
import { upsertSkillSchema } from '../validator';
import { revalidatePath } from 'next/cache';
import { z } from 'zod';
import { formatError } from '../utils';

export const upsertSkill = async (data: z.infer<typeof upsertSkillSchema>) => {
  const parsed = upsertSkillSchema.safeParse(data);

  if (!parsed.success) {
    return {
      success: false,
      message: 'Invalid skill data',
      errors: parsed.error.flatten().fieldErrors,
    };
  }

  const { id, skillName, categoryId, level } = parsed.data;

  try {
    let skillData;

    // Upsert the skill
    if (id) {
      skillData = await prisma.skill.upsert({
        where: { id },
        update: { skillName, categoryId, level },
        create: { skillName, categoryId, level },
      });
    } else {
      skillData = await prisma.skill.create({
        data: { skillName, categoryId, level },
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

export const getAllSkill = async () => {
  try {
    const skillData = await prisma.skill.findMany({
      orderBy: {
        level: 'desc',
      },
    });

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

export const getAllFilterSkills = async ({
  activeType,
}: {
  activeType: string;
}) => {
  const categoryFilter = ['Frontend', 'Backend'];

  const whereCondition =
    activeType === 'All'
      ? {
          category: {
            name: {
              in: categoryFilter,
            },
          },
        }
      : {
          category: {
            name: activeType,
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

export const getTotalSkills = async () => {
  try {
    const total = await prisma.skill.count();
    return { success: true, total };
  } catch (error) {
    console.error('Error calculating total skills:', error);
    return { success: false, message: 'Failed to count skills' };
  }
};
