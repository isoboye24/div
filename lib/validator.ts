import { z } from 'zod';

export const insertProjectSchema = z.object({
  projectName: z.string().min(1, 'Project name is required'),
  siteLink: z
    .string()
    .min(3, 'If provided, site link must be at least 3 characters long')
    .optional()
    .nullable(),
  codeLink: z
    .string()
    .min(3, 'If provided, code link must be at least 3 characters long')
    .optional()
    .nullable(),
  projectThumbnail: z
    .string()
    .min(1, 'Project must have at least one thumbnail'),
  image: z
    .array(z.string().min(1, 'Project must have at least one image'))
    .optional()
    .nullable(),
  categoryId: z.number().int().min(1, 'Id is required'),
  description: z.string().min(3).optional().nullable(),
});

export const updateProjectSchema = insertProjectSchema.extend({
  id: z.number().int().min(1, 'Id is required'),
});

export const insertSkillSchema = z.object({
  name: z.string().min(1, 'Skill name is required'),
});

export const updateSkillSchema = insertSkillSchema.extend({
  id: z.number().int().min(1, 'Id is required'),
  categoryId: z.string().min(3, 'Project category link is required'),
});

export const upsertCategorySchema = z.object({
  id: z.number().optional(), // optional for "Create"
  name: z.string().min(1, 'Name is required'),
});
