import { z } from 'zod';

export const upsertProjectSchema = z.object({
  id: z
    .string()
    .min(1, 'If provided, project id is should be at least 1 character')
    .optional(),
  projectName: z.string().min(1, 'Project name is required'),
  siteLink: z.string().url().optional().or(z.literal('')),
  codeLink: z.string().url().optional().or(z.literal('')),
  projectThumbnail: z
    .string()
    .min(1, 'Project must have at least one thumbnail'),
  slug: z.string().min(3, 'Slug must be at least 3 characters'),
  images: z.array(z.string().min(1, 'Project must have at least one image')),
  categoryId: z.string().min(1, 'Project name is required'),
  description: z.string().optional().or(z.literal('')),
  publish: z.boolean(),
  rate: z.number().int().min(1, 'rate is required'),
});

export const upsertSkillSchema = z.object({
  id: z
    .string()
    .min(1, 'If provided, skill id is should be at least 1 character')
    .optional(),
  skillName: z.string().min(1, 'Skill name is required'),
  level: z.number(),
  publish: z.boolean(),
  categoryId: z.string().min(1, 'Project name is required'),
});

export const upsertCategorySchema = z.object({
  id: z
    .string()
    .min(1, 'If provided, category id is should be at least 1 character')
    .optional(), // optional for "Create"
  name: z.string().min(1, 'Name is required'),
});

export const upsertContactMessageSchema = z.object({
  id: z
    .string()
    .min(1, 'If provided, message id is should be at least 1 character')
    .optional(),
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

export const signInFormSchema = z.object({
  email: z
    .string()
    .email('Invalid email address')
    .min(3, 'Email must be at least 3 characters'),
  password: z.string().min(6, 'Password must be at least 6 characters'),
});
// Register Schema
export const signUpFormSchema = z
  .object({
    name: z.string().min(3, 'Name must be at least 3 characters'),
    email: z
      .string()
      .min(3, 'Email must be at least 3 characters')
      .email('Invalid email address'),
    password: z.string().min(3, 'Password must be at least 3 characters'),
    confirmPassword: z
      .string()
      .min(3, 'Confirm password must be at least 3 characters'),
    image: z.string().min(3, 'Image must be at least 3 characters'),
    role: z.string(),
  })
  .refine((data) => data.password === data.confirmPassword, {
    message: "Passwords don't match",
    path: ['confirmPassword'],
  });

// Update Schema
export const updateUserFormSchema = z.object({
  id: z.string(),
  name: z.string().min(3, 'Name must be at least 3 characters'),
  email: z
    .string()
    .min(3, 'Email must be at least 3 characters')
    .email('Invalid email address'),
  password: z.string().min(3, 'Password must be at least 3 characters'),
  image: z.string().min(3, 'Image must be at least 3 characters'),
  role: z.string(),
});

export const upsertDataViewerSchema = z.object({
  id: z
    .string()
    .min(1, 'If provided, category id is should be at least 1 character')
    .optional(),
  email: z
    .string()
    .min(3, 'Email must be at least 3 characters')
    .email('Invalid email address'),
  company: z.string().min(2, 'Company must be at least 2 characters'),
  status: z.string().min(2, 'Status must be at least 2 characters'),
  numberOfDownload: z.number().int().min(1, 'number of download is required'),
});
