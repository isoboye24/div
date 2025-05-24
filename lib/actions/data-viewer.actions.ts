'use server';

import { prisma } from '@/db/prisma';
import { upsertDataViewerSchema } from '../validator';
import { z } from 'zod';
import { formatError } from '../utils';
import { revalidatePath } from 'next/cache';

export const upsertDataViewer = async (
  data: z.infer<typeof upsertDataViewerSchema>
) => {
  const parsed = upsertDataViewerSchema.safeParse(data);

  if (!parsed.success) {
    return {
      success: false,
      message: 'Invalid viewer data',
      errors: parsed.error.flatten().fieldErrors,
    };
  }

  const { id, email, company } = parsed.data;

  try {
    // Upsert the Viewer
    const existingViewer = await prisma.dataViewer.findFirst({
      where: { email, company },
    });

    let viewer;

    if (existingViewer) {
      const { id } = existingViewer;
      viewer = await prisma.dataViewer.update({
        where: { id },
        data: {
          company,
          numberOfDownload: {
            increment: 1,
          },
        },
      });
    } else {
      viewer = await prisma.dataViewer.create({
        data: {
          email,
          company,
          numberOfDownload: 1,
        },
      });
    }

    return {
      success: true,
      message: id
        ? 'Viewer updated successfully'
        : 'data downloaded successfully',
      data: viewer,
    };
  } catch (error) {
    console.error('Upsert data viewer error:', error);
    return {
      success: false,
      message: 'Failed to upsert data viewer',
    };
  }
};

export const getAllDataViewers = async () => {
  try {
    const dataViewed = await prisma.dataViewer.findMany({
      orderBy: [
        { createdAt: 'desc' },
        { numberOfDownload: 'desc' },
        { company: 'desc' },
      ],
    });

    return {
      success: true,
      data: dataViewed,
    };
  } catch (error) {
    console.error('Error fetching data viewer:', error);
    return {
      success: false,
      message: 'Failed to fetch data viewer',
    };
  }
};

export const getTotalDataViewers = async () => {
  try {
    const total = await prisma.dataViewer.count();
    return { success: true, total };
  } catch (error) {
    console.error('Error calculating total data viewer:', error);
    return { success: false, message: 'Failed to count data viewer' };
  }
};

export async function deleteDataViewer(id: string) {
  try {
    const CVDownloaderExists = await prisma.dataViewer.findFirst({
      where: { id },
    });

    if (!CVDownloaderExists) throw new Error('Data viewer not found');

    await prisma.dataViewer.delete({ where: { id } });

    revalidatePath('/admin/data-viewer');

    return {
      success: true,
      message: 'Data viewer deleted successfully',
    };
  } catch (error) {
    return { success: false, message: formatError(error) };
  }
}
