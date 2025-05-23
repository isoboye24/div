/*
  Warnings:

  - The primary key for the `DataViewer` table will be changed. If it partially fails, the table could be left without primary key constraint.

*/
-- AlterTable
ALTER TABLE "DataViewer" DROP CONSTRAINT "DataViewer_pkey",
ALTER COLUMN "id" SET DATA TYPE TEXT,
ADD CONSTRAINT "DataViewer_pkey" PRIMARY KEY ("id");
