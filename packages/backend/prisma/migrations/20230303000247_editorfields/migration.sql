/*
  Warnings:

  - Added the required column `editor` to the `EditLog` table without a default value. This is not possible if the table is not empty.
  - Added the required column `timeLastEdited` to the `EditLog` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "EditLog" ADD COLUMN     "editor" TEXT NOT NULL,
ADD COLUMN     "timeLastEdited" TIMESTAMP(3) NOT NULL;
