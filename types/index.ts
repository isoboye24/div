import {
  upsertCategorySchema,
  upsertContactMessageSchema,
} from '@/lib/validator';
import { z } from 'zod';

export type Category = z.infer<typeof upsertCategorySchema>;

export type ContactMessage = z.infer<typeof upsertContactMessageSchema>;
