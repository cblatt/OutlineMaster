/*
  Warnings:

  - You are about to drop the column `email` on the `CourseOutlineTopic` table. All the data in the column will be lost.
  - You are about to drop the column `hours` on the `CourseOutlineTopic` table. All the data in the column will be lost.
  - You are about to drop the column `phone` on the `CourseOutlineTopic` table. All the data in the column will be lost.

*/
-- AlterTable
ALTER TABLE "CourseOutlineTopic" DROP COLUMN "email",
DROP COLUMN "hours",
DROP COLUMN "phone";
