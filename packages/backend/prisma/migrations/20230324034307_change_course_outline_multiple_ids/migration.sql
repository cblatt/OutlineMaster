/*
  Warnings:

  - The primary key for the `CourseOutlineEvaluation` table will be changed. If it partially fails, the table could be left without primary key constraint.
  - You are about to drop the column `indexNum` on the `CourseOutlineEvaluation` table. All the data in the column will be lost.
  - The primary key for the `CourseOutlineInstructor` table will be changed. If it partially fails, the table could be left without primary key constraint.
  - You are about to drop the column `indexNum` on the `CourseOutlineInstructor` table. All the data in the column will be lost.
  - The primary key for the `CourseOutlineTopic` table will be changed. If it partially fails, the table could be left without primary key constraint.
  - You are about to drop the column `indexNum` on the `CourseOutlineTopic` table. All the data in the column will be lost.
  - The required column `id` was added to the `CourseOutlineEvaluation` table with a prisma-level default value. This is not possible if the table is not empty. Please add this column as optional, then populate it before making it required.
  - The required column `id` was added to the `CourseOutlineInstructor` table with a prisma-level default value. This is not possible if the table is not empty. Please add this column as optional, then populate it before making it required.
  - The required column `id` was added to the `CourseOutlineTopic` table with a prisma-level default value. This is not possible if the table is not empty. Please add this column as optional, then populate it before making it required.

*/
-- AlterTable
ALTER TABLE "CourseOutlineEvaluation" DROP CONSTRAINT "CourseOutlineEvaluation_pkey",
DROP COLUMN "indexNum",
ADD COLUMN     "id" TEXT NOT NULL,
ADD CONSTRAINT "CourseOutlineEvaluation_pkey" PRIMARY KEY ("courseUuid", "versionNum", "id");

-- AlterTable
ALTER TABLE "CourseOutlineInstructor" DROP CONSTRAINT "CourseOutlineInstructor_pkey",
DROP COLUMN "indexNum",
ADD COLUMN     "id" TEXT NOT NULL,
ADD CONSTRAINT "CourseOutlineInstructor_pkey" PRIMARY KEY ("courseUuid", "versionNum", "id");

-- AlterTable
ALTER TABLE "CourseOutlineTopic" DROP CONSTRAINT "CourseOutlineTopic_pkey",
DROP COLUMN "indexNum",
ADD COLUMN     "id" TEXT NOT NULL,
ADD CONSTRAINT "CourseOutlineTopic_pkey" PRIMARY KEY ("courseUuid", "versionNum", "id");
