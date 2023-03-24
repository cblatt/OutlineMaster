/*
  Warnings:

  - Changed the type of `courseCredits` on the `CourseOutline` table. No cast exists, the column would be dropped and recreated, which cannot be done if there is data, since the column is required.
  - Changed the type of `engineeringDesign` on the `CourseOutline` table. No cast exists, the column would be dropped and recreated, which cannot be done if there is data, since the column is required.
  - Changed the type of `engineeringScience` on the `CourseOutline` table. No cast exists, the column would be dropped and recreated, which cannot be done if there is data, since the column is required.
  - Changed the type of `labHours` on the `CourseOutline` table. No cast exists, the column would be dropped and recreated, which cannot be done if there is data, since the column is required.
  - Changed the type of `lectureHours` on the `CourseOutline` table. No cast exists, the column would be dropped and recreated, which cannot be done if there is data, since the column is required.
  - Changed the type of `tutorialHours` on the `CourseOutline` table. No cast exists, the column would be dropped and recreated, which cannot be done if there is data, since the column is required.

*/
-- AlterTable
ALTER TABLE "CourseOutline" DROP COLUMN "courseCredits",
ADD COLUMN     "courseCredits" INTEGER NOT NULL,
DROP COLUMN "engineeringDesign",
ADD COLUMN     "engineeringDesign" INTEGER NOT NULL,
DROP COLUMN "engineeringScience",
ADD COLUMN     "engineeringScience" INTEGER NOT NULL,
DROP COLUMN "labHours",
ADD COLUMN     "labHours" INTEGER NOT NULL,
DROP COLUMN "lectureHours",
ADD COLUMN     "lectureHours" INTEGER NOT NULL,
DROP COLUMN "tutorialHours",
ADD COLUMN     "tutorialHours" INTEGER NOT NULL;
