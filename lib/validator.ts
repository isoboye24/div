import { z } from 'zod';

export const upsertProjectSchema = z.object({
  id: z.number().optional(),
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

export const upsertSkillSchema = z.object({
  id: z.number().optional(),
  skillName: z.string().min(1, 'Skill name is required'),
  level: z.number(),
  categoryId: z.coerce.number(),
});

export const upsertCategorySchema = z.object({
  id: z.number().optional(), // optional for "Create"
  name: z.string().min(1, 'Name is required'),
});

export const upsertContactMessageSchema = z.object({
  id: z.number().optional(),
  senderName: z
    .string()
    .min(3, 'sender name is required and must be at least 3 characters'),
  senderEmail: z
    .string()
    .min(3, 'sender email is required and must be at least 3 characters'),
  subject: z
    .string()
    .min(3, 'Subject is required and must be at least 3 characters'),
  messageText: z
    .string()
    .min(3, 'Text is required and must be at least 3 characters'),
});
