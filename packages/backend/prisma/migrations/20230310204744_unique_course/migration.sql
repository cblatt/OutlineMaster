/*
  Warnings:

  - A unique constraint covering the columns `[departmentUuid,courseName]` on the table `Course` will be added. If there are existing duplicate values, this will fail.
  - A unique constraint covering the columns `[departmentUuid,courseCode]` on the table `Course` will be added. If there are existing duplicate values, this will fail.

*/
-- DropIndex
DROP INDEX "Course_courseName_key";

-- CreateIndex
CREATE UNIQUE INDEX "Course_departmentUuid_courseName_key" ON "Course"("departmentUuid", "courseName");

-- CreateIndex
CREATE UNIQUE INDEX "Course_departmentUuid_courseCode_key" ON "Course"("departmentUuid", "courseCode");
