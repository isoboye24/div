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

  const { id, email, company, viewerStatus, numberOfDownload } = parsed.data;

  try {
    let viewer;

    // Upsert the Viewer
    if (id) {
      viewer = await prisma.dataViewer.upsert({
        where: { id },
        update: { email, company, viewerStatus, numberOfDownload },
        create: { email, company, viewerStatus, numberOfDownload },
      });
    } else {
      viewer = await prisma.dataViewer.create({
        data: { email, company, viewerStatus, numberOfDownload },
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
