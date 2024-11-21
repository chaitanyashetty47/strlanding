/*
  Warnings:

  - You are about to drop the column `appointmentDate` on the `ContactSubmission` table. All the data in the column will be lost.
  - You are about to drop the column `appointmentTime` on the `ContactSubmission` table. All the data in the column will be lost.

*/
-- CreateEnum
CREATE TYPE "Status" AS ENUM ('CONFIRMED', 'CANCELLED', 'RESCHEDULED');

-- AlterTable
ALTER TABLE "ContactSubmission" DROP COLUMN "appointmentDate",
DROP COLUMN "appointmentTime";

-- CreateTable
CREATE TABLE "CalendyData" (
    "id" SERIAL NOT NULL,
    "name" TEXT NOT NULL,
    "email" TEXT NOT NULL,
    "event" TEXT NOT NULL,
    "status" "Status" NOT NULL,

    CONSTRAINT "CalendyData_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Questionairre" (
    "id" SERIAL NOT NULL,
    "question" TEXT NOT NULL,
    "answer" TEXT NOT NULL,

    CONSTRAINT "Questionairre_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "CalendyData_event_key" ON "CalendyData"("event");
