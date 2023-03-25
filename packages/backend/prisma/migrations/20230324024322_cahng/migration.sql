/*
  Warnings:

  - The `isApproved` column on the `CourseOutline` table would be dropped and recreated. This will lead to data loss if there is data in the column.

*/
-- AlterTable
ALTER TABLE "CourseOutline" DROP COLUMN "isApproved",
ADD COLUMN     "isApproved" TEXT NOT NULL DEFAULT 'PENDING';
