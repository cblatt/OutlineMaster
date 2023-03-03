/*
  Warnings:

  - Added the required column `assSubLbl` to the `CourseOutline` table without a default value. This is not possible if the table is not empty.
  - Added the required column `comLbl` to the `CourseOutline` table without a default value. This is not possible if the table is not empty.
  - Added the required column `desiLbl` to the `CourseOutline` table without a default value. This is not possible if the table is not empty.
  - Added the required column `econLbl` to the `CourseOutline` table without a default value. This is not possible if the table is not empty.
  - Added the required column `ethLbl` to the `CourseOutline` table without a default value. This is not possible if the table is not empty.
  - Added the required column `finLbl` to the `CourseOutline` table without a default value. This is not possible if the table is not empty.
  - Added the required column `finPercLbl` to the `CourseOutline` table without a default value. This is not possible if the table is not empty.
  - Added the required column `homLbl` to the `CourseOutline` table without a default value. This is not possible if the table is not empty.
  - Added the required column `homPercLbl` to the `CourseOutline` table without a default value. This is not possible if the table is not empty.
  - Added the required column `invLbl` to the `CourseOutline` table without a default value. This is not possible if the table is not empty.
  - Added the required column `labLbl` to the `CourseOutline` table without a default value. This is not possible if the table is not empty.
  - Added the required column `labPercLbl` to the `CourseOutline` table without a default value. This is not possible if the table is not empty.
  - Added the required column `lateLbl` to the `CourseOutline` table without a default value. This is not possible if the table is not empty.
  - Added the required column `lifeLbl` to the `CourseOutline` table without a default value. This is not possible if the table is not empty.
  - Added the required column `midLbl` to the `CourseOutline` table without a default value. This is not possible if the table is not empty.
  - Added the required column `midPercLbl` to the `CourseOutline` table without a default value. This is not possible if the table is not empty.
  - Added the required column `profLbl` to the `CourseOutline` table without a default value. This is not possible if the table is not empty.
  - Added the required column `quiLbl` to the `CourseOutline` table without a default value. This is not possible if the table is not empty.
  - Added the required column `quizPercLbl` to the `CourseOutline` table without a default value. This is not possible if the table is not empty.
  - Added the required column `top1Lbl` to the `CourseOutline` table without a default value. This is not possible if the table is not empty.
  - Added the required column `top1aLbl` to the `CourseOutline` table without a default value. This is not possible if the table is not empty.
  - Added the required column `top1bLbl` to the `CourseOutline` table without a default value. This is not possible if the table is not empty.
  - Added the required column `top2Lbl` to the `CourseOutline` table without a default value. This is not possible if the table is not empty.
  - Added the required column `top2aLbl` to the `CourseOutline` table without a default value. This is not possible if the table is not empty.
  - Added the required column `top2bLbl` to the `CourseOutline` table without a default value. This is not possible if the table is not empty.
  - Added the required column `top3Lbl` to the `CourseOutline` table without a default value. This is not possible if the table is not empty.
  - Added the required column `top3aLbl` to the `CourseOutline` table without a default value. This is not possible if the table is not empty.
  - Added the required column `top3bLbl` to the `CourseOutline` table without a default value. This is not possible if the table is not empty.
  - Added the required column `top4Lbl` to the `CourseOutline` table without a default value. This is not possible if the table is not empty.
  - Added the required column `top4aLbl` to the `CourseOutline` table without a default value. This is not possible if the table is not empty.
  - Added the required column `top4bLbl` to the `CourseOutline` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "CourseOutline" ADD COLUMN     "assSubLbl" TEXT NOT NULL,
ADD COLUMN     "comLbl" TEXT NOT NULL,
ADD COLUMN     "desiLbl" TEXT NOT NULL,
ADD COLUMN     "econLbl" TEXT NOT NULL,
ADD COLUMN     "ethLbl" TEXT NOT NULL,
ADD COLUMN     "finLbl" TEXT NOT NULL,
ADD COLUMN     "finPercLbl" TEXT NOT NULL,
ADD COLUMN     "homLbl" TEXT NOT NULL,
ADD COLUMN     "homPercLbl" TEXT NOT NULL,
ADD COLUMN     "invLbl" TEXT NOT NULL,
ADD COLUMN     "labLbl" TEXT NOT NULL,
ADD COLUMN     "labPercLbl" TEXT NOT NULL,
ADD COLUMN     "lateLbl" TEXT NOT NULL,
ADD COLUMN     "lifeLbl" TEXT NOT NULL,
ADD COLUMN     "midLbl" TEXT NOT NULL,
ADD COLUMN     "midPercLbl" TEXT NOT NULL,
ADD COLUMN     "profLbl" TEXT NOT NULL,
ADD COLUMN     "quiLbl" TEXT NOT NULL,
ADD COLUMN     "quizPercLbl" TEXT NOT NULL,
ADD COLUMN     "top1Lbl" TEXT NOT NULL,
ADD COLUMN     "top1aLbl" TEXT NOT NULL,
ADD COLUMN     "top1bLbl" TEXT NOT NULL,
ADD COLUMN     "top2Lbl" TEXT NOT NULL,
ADD COLUMN     "top2aLbl" TEXT NOT NULL,
ADD COLUMN     "top2bLbl" TEXT NOT NULL,
ADD COLUMN     "top3Lbl" TEXT NOT NULL,
ADD COLUMN     "top3aLbl" TEXT NOT NULL,
ADD COLUMN     "top3bLbl" TEXT NOT NULL,
ADD COLUMN     "top4Lbl" TEXT NOT NULL,
ADD COLUMN     "top4aLbl" TEXT NOT NULL,
ADD COLUMN     "top4bLbl" TEXT NOT NULL;
