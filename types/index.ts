import { upsertCategorySchema, upsertMessageSchema } from '@/lib/validator';
import { z } from 'zod';

export type Category = z.infer<typeof upsertCategorySchema>;

export type MessageText = z.infer<typeof upsertMessageSchema>;
