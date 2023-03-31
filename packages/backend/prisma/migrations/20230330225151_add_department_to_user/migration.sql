-- AlterTable
ALTER TABLE "User" ADD COLUMN     "departmentUuid" TEXT;

-- AddForeignKey
ALTER TABLE "User" ADD CONSTRAINT "User_departmentUuid_fkey" FOREIGN KEY ("departmentUuid") REFERENCES "Department"("departmentUuid") ON DELETE SET NULL ON UPDATE CASCADE;
