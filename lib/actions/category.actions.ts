'use server';

import { prisma } from '@/lib/prisma';
import { upsertCategorySchema } from '../validator';
import { revalidatePath } from 'next/cache';
import { z } from 'zod';
import { formatError } from '../utils';

export const upsertCategory = async (
  data: z.infer<typeof upsertCategorySchema>
) => {
  const parsed = upsertCategorySchema.safeParse(data);

  if (!parsed.success) {
    return {
      success: false,
      message: 'Invalid category data',
      errors: parsed.error.flatten().fieldErrors,
    };
  }

  const { id, name } = parsed.data;

  try {
    let category;

    // Upsert the category
    if (id) {
      category = await prisma.category.upsert({
        where: { id },
        update: { name },
        create: { name },
      });
    } else {
      category = await prisma.category.create({ data: { name } });
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

export const getAllCategory = async () => {
  try {
    const categories = await prisma.category.findMany({
      orderBy: {
        name: 'asc',
      },
    });

    return {
      success: true,
      data: categories,
    };
  } catch (error) {
    console.error('Error fetching categories:', error);
    return {
      success: false,
      message: 'Failed to fetch categories',
    };
  }
};

export const getCategoryById = async (id: number) => {
  try {
    const category = await prisma.category.findFirst({
      where: { id },
    });

    if (!category) {
      return {
        success: false,
        message: 'Category not found',
      };
    }

    return {
      success: true,
      data: category,
    };
  } catch (error) {
    console.error('Error fetching category:', error);
    return {
      success: false,
      message: 'Failed to fetch category',
    };
  }
};

export async function deleteCategory(id: number) {
  try {
    const categoryExists = await prisma.category.findFirst({
      where: { id },
    });

    if (!categoryExists) throw new Error('Category not found');

    await prisma.category.delete({ where: { id } });

    revalidatePath('/admin/categories');

    return {
      success: true,
      message: 'Category deleted successfully',
    };
  } catch (error) {
    return { success: false, message: formatError(error) };
  }
}

export const getTotalCategories = async () => {
  try {
    const total = await prisma.category.count();
    return { success: true, total };
  } catch (error) {
    console.error('Error calculating total categories:', error);
    return { success: false, message: 'Failed to count categories' };
  }
};
