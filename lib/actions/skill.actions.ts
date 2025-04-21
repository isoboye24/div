'use server';

import { prisma } from '@/lib/prisma';
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

export const getSkillById = async (id: number) => {
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

export async function deleteSkill(id: number) {
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
