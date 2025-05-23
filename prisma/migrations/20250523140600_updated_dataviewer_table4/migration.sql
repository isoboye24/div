/*
  Warnings:

  - You are about to drop the column `status` on the `DataViewer` table. All the data in the column will be lost.

*/
-- AlterTable
ALTER TABLE "DataViewer" DROP COLUMN "status",
ADD COLUMN     "viewerStatus" TEXT;
