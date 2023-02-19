-- CreateTable
CREATE TABLE "InstructorCourse" (
    "uwoId" TEXT NOT NULL,
    "courseUuid" TEXT NOT NULL,

    CONSTRAINT "InstructorCourse_pkey" PRIMARY KEY ("uwoId","courseUuid")
);

-- AddForeignKey
ALTER TABLE "InstructorCourse" ADD CONSTRAINT "InstructorCourse_uwoId_fkey" FOREIGN KEY ("uwoId") REFERENCES "User"("uwoId") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "InstructorCourse" ADD CONSTRAINT "InstructorCourse_courseUuid_fkey" FOREIGN KEY ("courseUuid") REFERENCES "Course"("courseUuid") ON DELETE RESTRICT ON UPDATE CASCADE;
