/*
  Warnings:

  - You are about to drop the `CVDownloader` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropTable
DROP TABLE "CVDownloader";

-- CreateTable
CREATE TABLE "DataViewer" (
    "id" UUID NOT NULL,
    "email" TEXT NOT NULL,
    "company" TEXT,
    "status" TEXT,
    "numberOfDownload" INTEGER NOT NULL,
    "createdAt" TIMESTAMP(6) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "DataViewer_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "CVDownloader_email_idx" ON "DataViewer"("email");
