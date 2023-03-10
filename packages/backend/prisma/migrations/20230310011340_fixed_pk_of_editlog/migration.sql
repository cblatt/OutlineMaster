/*
  Warnings:

  - The primary key for the `EditLog` table will be changed. If it partially fails, the table could be left without primary key constraint.

*/
-- AlterTable
ALTER TABLE "EditLog" DROP CONSTRAINT "EditLog_pkey",
ADD CONSTRAINT "EditLog_pkey" PRIMARY KEY ("courseUuid", "versionNum", "editNum");
