import {
  upsertCategorySchema,
  upsertContactMessageSchema,
  upsertProjectSchema,
  upsertSkillSchema,
  signUpFormSchema,
} from '@/lib/validator';
import { StaticImageData } from 'next/image';
import { z } from 'zod';

export type Category = z.infer<typeof upsertCategorySchema>;

export type ContactMessage = z.infer<typeof upsertContactMessageSchema>;

export type Skill = z.infer<typeof upsertSkillSchema>;
export type ProjectNew = z.infer<typeof upsertProjectSchema>;

export type Project = {
  id?: number;
  name: string;
  previewUrl?: string;
  image: string | StaticImageData;
  type: string;
  codeUrl: string;
  description?: string;
  size?: number;
  children?: React.ReactNode;
};

export type CarouselProps = {
  children: React.ReactNode;
};

export type User = z.infer<typeof signUpFormSchema>;
