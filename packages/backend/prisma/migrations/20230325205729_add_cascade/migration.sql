-- DropForeignKey
ALTER TABLE "CourseOutlineEvaluation" DROP CONSTRAINT "CourseOutlineEvaluation_courseUuid_versionNum_fkey";

-- DropForeignKey
ALTER TABLE "CourseOutlineInstructor" DROP CONSTRAINT "CourseOutlineInstructor_courseUuid_versionNum_fkey";

-- DropForeignKey
ALTER TABLE "CourseOutlineTopic" DROP CONSTRAINT "CourseOutlineTopic_courseUuid_versionNum_fkey";

-- AddForeignKey
ALTER TABLE "CourseOutlineInstructor" ADD CONSTRAINT "CourseOutlineInstructor_courseUuid_versionNum_fkey" FOREIGN KEY ("courseUuid", "versionNum") REFERENCES "CourseOutline"("courseUuid", "versionNum") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "CourseOutlineEvaluation" ADD CONSTRAINT "CourseOutlineEvaluation_courseUuid_versionNum_fkey" FOREIGN KEY ("courseUuid", "versionNum") REFERENCES "CourseOutline"("courseUuid", "versionNum") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "CourseOutlineTopic" ADD CONSTRAINT "CourseOutlineTopic_courseUuid_versionNum_fkey" FOREIGN KEY ("courseUuid", "versionNum") REFERENCES "CourseOutline"("courseUuid", "versionNum") ON DELETE CASCADE ON UPDATE CASCADE;
