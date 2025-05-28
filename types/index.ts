import {
  upsertCategorySchema,
  upsertContactMessageSchema,
  upsertProjectSchema,
  upsertSkillSchema,
  signUpFormSchema,
  upsertDataViewerSchema,
} from '@/lib/validator';
// import { StaticImageData } from 'next/image';
import { z } from 'zod';

export type Category = z.infer<typeof upsertCategorySchema>;

export type ContactMessage = z.infer<typeof upsertContactMessageSchema>;
export type ViewerData = z.infer<typeof upsertDataViewerSchema>;

export type Skill = z.infer<typeof upsertSkillSchema>;
export type Project = z.infer<typeof upsertProjectSchema>;

export type CarouselProps = {
  children: React.ReactNode;
};

export type User = z.infer<typeof signUpFormSchema>;

export type PaginationProps = {
  page?: number | string;
  totalPages?: number;
  urlParamName?: string;
};

export type GetAllSkillsParams = {
  page?: number;
  limit?: number;
};

export type NewPaginationProps = {
  currentPage: number;
  totalPages: number;
};

export type ImageCarouselProps = {
  images: string[];
  interval?: number;
};

export type UserProps = {
  session: {
    user: {
      image?: string;
      name?: string;
      email?: string;
      role?: string;
    };
  } | null;
};
