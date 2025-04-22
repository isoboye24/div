/*
  Warnings:

  - A unique constraint covering the columns `[slug]` on the table `Image` will be added. If there are existing duplicate values, this will fail.
  - A unique constraint covering the columns `[slug]` on the table `Project` will be added. If there are existing duplicate values, this will fail.

*/
-- AlterTable
ALTER TABLE "Image" ADD COLUMN     "slug" TEXT NOT NULL DEFAULT '';

-- AlterTable
ALTER TABLE "Project" ADD COLUMN     "slug" TEXT NOT NULL DEFAULT '';

-- CreateIndex
CREATE UNIQUE INDEX "image_slug_idx" ON "Image"("slug");

-- CreateIndex
CREATE UNIQUE INDEX "project_slug_idx" ON "Project"("slug");
