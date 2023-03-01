/*
  Warnings:

  - A unique constraint covering the columns `[departmentCode]` on the table `Department` will be added. If there are existing duplicate values, this will fail.
  - Added the required column `departmentCode` to the `Department` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "Department" ADD COLUMN     "departmentCode" TEXT NOT NULL;

-- CreateIndex
CREATE UNIQUE INDEX "Department_departmentCode_key" ON "Department"("departmentCode");
