/*
  Warnings:

  - Added the required column `publish` to the `Project` table without a default value. This is not possible if the table is not empty.
  - Added the required column `rate` to the `Project` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "Project" ADD COLUMN     "publish" BOOLEAN NOT NULL,
ADD COLUMN     "rate" INTEGER NOT NULL;
