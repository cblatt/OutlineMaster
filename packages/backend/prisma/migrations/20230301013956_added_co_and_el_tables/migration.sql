-- CreateTable
CREATE TABLE "CourseOutline" (
    "courseUuid" TEXT NOT NULL,
    "versionNum" INTEGER NOT NULL,

    CONSTRAINT "CourseOutline_pkey" PRIMARY KEY ("courseUuid","versionNum")
);

-- CreateTable
CREATE TABLE "EditLog" (
    "courseUuid" TEXT NOT NULL,
    "versionNum" INTEGER NOT NULL,
    "editNum" INTEGER NOT NULL,

    CONSTRAINT "EditLog_pkey" PRIMARY KEY ("courseUuid","versionNum")
);

-- AddForeignKey
ALTER TABLE "CourseOutline" ADD CONSTRAINT "CourseOutline_courseUuid_fkey" FOREIGN KEY ("courseUuid") REFERENCES "Course"("courseUuid") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "EditLog" ADD CONSTRAINT "EditLog_courseUuid_versionNum_fkey" FOREIGN KEY ("courseUuid", "versionNum") REFERENCES "CourseOutline"("courseUuid", "versionNum") ON DELETE RESTRICT ON UPDATE CASCADE;
