-- CreateTable
CREATE TABLE "CVDownloader" (
    "id" UUID NOT NULL,
    "email" TEXT NOT NULL,
    "company" TEXT,
    "numberOfDownload" INTEGER NOT NULL,
    "createdAt" TIMESTAMP(6) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "CVDownloader_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "CVDownloader_email_idx" ON "CVDownloader"("email");
