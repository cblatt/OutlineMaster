-- DropForeignKey
ALTER TABLE "InstructorCourse" DROP CONSTRAINT "InstructorCourse_courseUuid_fkey";

-- DropForeignKey
ALTER TABLE "InstructorCourse" DROP CONSTRAINT "InstructorCourse_uwoId_fkey";

-- AddForeignKey
ALTER TABLE "InstructorCourse" ADD CONSTRAINT "InstructorCourse_uwoId_fkey" FOREIGN KEY ("uwoId") REFERENCES "User"("uwoId") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "InstructorCourse" ADD CONSTRAINT "InstructorCourse_courseUuid_fkey" FOREIGN KEY ("courseUuid") REFERENCES "Course"("courseUuid") ON DELETE CASCADE ON UPDATE CASCADE;
