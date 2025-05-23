/*
  Warnings:

  - Made the column `company` on table `DataViewer` required. This step will fail if there are existing NULL values in that column.
  - Made the column `viewerStatus` on table `DataViewer` required. This step will fail if there are existing NULL values in that column.

*/
-- AlterTable
ALTER TABLE "DataViewer" ALTER COLUMN "company" SET NOT NULL,
ALTER COLUMN "viewerStatus" SET NOT NULL;
