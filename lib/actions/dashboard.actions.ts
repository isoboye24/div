'use server';

import { prisma } from '@/db/prisma';

export const getTotalSkills = async ({
  activeType,
}: {
  activeType: string;
}) => {
  const whereCondition = {
    category: {
      name: activeType,
    },
  };

  const totalFilteredSkills = await prisma.skill.count({
    where: whereCondition,
  });

  return totalFilteredSkills;
};

export const getTotalProjects = async ({
  activeType,
}: {
  activeType: string;
}) => {
  const whereCondition = {
    category: {
      name: activeType,
    },
  };

  const totalFilteredProjects = await prisma.project.count({
    where: whereCondition,
  });

  return totalFilteredProjects;
};

export const getTotalCategories = async () => {
  const totalFilteredCategories = await prisma.category.count();
  return totalFilteredCategories;
};

export const getTotalMessages = async () => {
  const totalFilteredContactMessages = await prisma.contactMessage.count();
  return totalFilteredContactMessages;
};

export const getTotalCVDownloader = async () => {
  const result = await prisma.dataViewer.aggregate({
    _sum: {
      numberOfDownload: true,
    },
  });

  return result._sum.numberOfDownload ?? 0;
};
