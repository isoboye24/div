-- CreateEnum
CREATE TYPE "Role" AS ENUM ('user', 'admin');

-- AlterTable
ALTER TABLE "Skill" ADD COLUMN     "publish" BOOLEAN NOT NULL DEFAULT false;
