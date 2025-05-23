'use server';

import { prisma } from '@/db/prisma';
import { upsertDataViewerSchema } from '../validator';
import { z } from 'zod';

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
    const existingViewer = await prisma.dataViewer.findUnique({
      where: { email },
    });

    let viewer;

    if (existingViewer) {
      viewer = await prisma.dataViewer.update({
        where: { email },
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
