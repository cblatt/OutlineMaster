/*
  Warnings:

  - Added the required column `departmentUuid` to the `CourseOutline` table without a default value. This is not possible if the table is not empty.
  - Added the required column `justification` to the `CourseOutline` table without a default value. This is not possible if the table is not empty.
  - Added the required column `year` to the `CourseOutline` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "CourseOutline" ADD COLUMN     "departmentUuid" TEXT NOT NULL,
ADD COLUMN     "justification" TEXT NOT NULL,
ADD COLUMN     "year" TEXT NOT NULL;

-- AddForeignKey
ALTER TABLE "CourseOutline" ADD CONSTRAINT "CourseOutline_departmentUuid_fkey" FOREIGN KEY ("departmentUuid") REFERENCES "Department"("departmentUuid") ON DELETE RESTRICT ON UPDATE CASCADE;
