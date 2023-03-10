/*
  Warnings:

  - You are about to drop the column `semester` on the `Course` table. All the data in the column will be lost.
  - You are about to drop the column `year` on the `Course` table. All the data in the column will be lost.

*/
-- AlterTable
ALTER TABLE "Course" DROP COLUMN "semester",
DROP COLUMN "year";

-- DropEnum
DROP TYPE "Term";
