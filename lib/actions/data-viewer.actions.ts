'use server';

import { prisma } from '@/db/prisma';
import { upsertDataViewerSchema } from '../validator';
import { z } from 'zod';

export const upsertCVDownloader = async (
  data: z.infer<typeof upsertDataViewerSchema>
) => {
  const parsed = upsertDataViewerSchema.safeParse(data);

  if (!parsed.success) {
    return {
      success: false,
      message: 'Invalid CV Downloader data',
      errors: parsed.error.flatten().fieldErrors,
    };
  }

  const { id, company, email, numberOfDownload } = parsed.data;

  try {
    let downloader;

    // Upsert the CV Downloader
    if (id) {
      downloader = await prisma.cVDownloader.upsert({
        where: { id },
        update: { company, email, numberOfDownload },
        create: { company, email, numberOfDownload },
      });
    } else {
      downloader = await prisma.cVDownloader.create({
        data: { company, email, numberOfDownload },
      });
    }

    return {
      success: true,
      message: id
        ? 'CV downloader updated successfully'
        : 'CV download successful',
      data: downloader,
    };
  } catch (error) {
    console.error('Upsert CV download error:', error);
    return {
      success: false,
      message: 'Failed to upsert CV download',
    };
  }
};
