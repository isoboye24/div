// lib/prisma.ts
import { PrismaClient } from '@prisma/client';

// Your Neon connection URL (WebSocket URL)
const connectionString = process.env.DATABASE_URL!;

// Initialize Prisma Client with the Neon WebSocket URL
export const prisma = new PrismaClient({
  datasources: {
    db: {
      url: connectionString,
    },
  },
});
