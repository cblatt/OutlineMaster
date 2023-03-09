-- CreateEnum
CREATE TYPE "Term" AS ENUM ('FALL', 'WINTER', 'SUMMER');

-- CreateEnum
CREATE TYPE "Role" AS ENUM ('ADMINISTRATOR', 'INSTRUCTOR', 'DEPARTMENT_CHAIR', 'ASSOCIATE_CHAIR', 'PROGRAM_DIRECTOR');

-- CreateTable
CREATE TABLE "User" (
    "uwoId" TEXT NOT NULL,
    "email" TEXT NOT NULL,
    "password" TEXT NOT NULL,
    "firstName" TEXT NOT NULL,
    "lastName" TEXT NOT NULL,
    "role" "Role" NOT NULL,

    CONSTRAINT "User_pkey" PRIMARY KEY ("uwoId")
);

-- CreateTable
CREATE TABLE "Department" (
    "departmentUuid" TEXT NOT NULL,
    "departmentName" TEXT NOT NULL,
    "departmentCode" TEXT NOT NULL,

    CONSTRAINT "Department_pkey" PRIMARY KEY ("departmentUuid")
);

-- CreateTable
CREATE TABLE "Course" (
    "courseUuid" TEXT NOT NULL,
    "courseCode" TEXT NOT NULL,
    "semester" "Term" NOT NULL,
    "year" INTEGER NOT NULL,
    "courseName" TEXT NOT NULL,
    "departmentUuid" TEXT NOT NULL,

    CONSTRAINT "Course_pkey" PRIMARY KEY ("courseUuid")
);

-- CreateTable
CREATE TABLE "InstructorCourse" (
    "uwoId" TEXT NOT NULL,
    "courseUuid" TEXT NOT NULL,

    CONSTRAINT "InstructorCourse_pkey" PRIMARY KEY ("uwoId","courseUuid")
);

-- CreateTable
CREATE TABLE "Comments" (
    "commentId" TEXT NOT NULL,
    "commentTxt" TEXT NOT NULL,
    "outlineId" TEXT NOT NULL,

    CONSTRAINT "Comments_pkey" PRIMARY KEY ("commentId")
);

-- CreateTable
CREATE TABLE "CourseOutline" (
    "courseUuid" TEXT NOT NULL,
    "versionNum" INTEGER NOT NULL,
    "titleLbl" TEXT NOT NULL,
    "codeLbl" TEXT NOT NULL,
    "yearLbl" TEXT NOT NULL,
    "desLbl" TEXT NOT NULL,
    "insLbl" TEXT NOT NULL,
    "acaLbl" TEXT NOT NULL,
    "conLbl" TEXT NOT NULL,
    "antLbl" TEXT NOT NULL,
    "preLbl" TEXT NOT NULL,
    "coLbl" TEXT NOT NULL,
    "ceabLbl" TEXT NOT NULL,
    "reqTbLbl" TEXT NOT NULL,
    "othLbl" TEXT NOT NULL,
    "recRefLbl" TEXT NOT NULL,
    "knowLbl" TEXT NOT NULL,
    "useEngLbl" TEXT NOT NULL,
    "impLbl" TEXT NOT NULL,
    "proLbl" TEXT NOT NULL,
    "indLbl" TEXT NOT NULL,
    "ethLbl" TEXT NOT NULL,
    "invLbl" TEXT NOT NULL,
    "comLbl" TEXT NOT NULL,
    "econLbl" TEXT NOT NULL,
    "desiLbl" TEXT NOT NULL,
    "profLbl" TEXT NOT NULL,
    "lifeLbl" TEXT NOT NULL,
    "top1Lbl" TEXT NOT NULL,
    "top1aLbl" TEXT NOT NULL,
    "top1bLbl" TEXT NOT NULL,
    "top2Lbl" TEXT NOT NULL,
    "top2aLbl" TEXT NOT NULL,
    "top2bLbl" TEXT NOT NULL,
    "top3Lbl" TEXT NOT NULL,
    "top3aLbl" TEXT NOT NULL,
    "top3bLbl" TEXT NOT NULL,
    "top4Lbl" TEXT NOT NULL,
    "top4aLbl" TEXT NOT NULL,
    "top4bLbl" TEXT NOT NULL,
    "homPercLbl" TEXT NOT NULL,
    "quizPercLbl" TEXT NOT NULL,
    "labPercLbl" TEXT NOT NULL,
    "midPercLbl" TEXT NOT NULL,
    "finPercLbl" TEXT NOT NULL,
    "homLbl" TEXT NOT NULL,
    "quiLbl" TEXT NOT NULL,
    "labLbl" TEXT NOT NULL,
    "midLbl" TEXT NOT NULL,
    "finLbl" TEXT NOT NULL,
    "lateLbl" TEXT NOT NULL,
    "assSubLbl" TEXT NOT NULL,

    CONSTRAINT "CourseOutline_pkey" PRIMARY KEY ("courseUuid","versionNum")
);

-- CreateTable
CREATE TABLE "EditLog" (
    "courseUuid" TEXT NOT NULL,
    "versionNum" INTEGER NOT NULL,
    "editNum" INTEGER NOT NULL,
    "timeLastEdited" TIMESTAMP(3) NOT NULL,
    "editor" TEXT NOT NULL,

    CONSTRAINT "EditLog_pkey" PRIMARY KEY ("courseUuid","versionNum")
);

-- CreateIndex
CREATE UNIQUE INDEX "User_email_key" ON "User"("email");

-- CreateIndex
CREATE UNIQUE INDEX "Department_departmentName_key" ON "Department"("departmentName");

-- CreateIndex
CREATE UNIQUE INDEX "Department_departmentCode_key" ON "Department"("departmentCode");

-- CreateIndex
CREATE UNIQUE INDEX "Course_courseName_key" ON "Course"("courseName");

-- AddForeignKey
ALTER TABLE "Course" ADD CONSTRAINT "Course_departmentUuid_fkey" FOREIGN KEY ("departmentUuid") REFERENCES "Department"("departmentUuid") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "InstructorCourse" ADD CONSTRAINT "InstructorCourse_uwoId_fkey" FOREIGN KEY ("uwoId") REFERENCES "User"("uwoId") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "InstructorCourse" ADD CONSTRAINT "InstructorCourse_courseUuid_fkey" FOREIGN KEY ("courseUuid") REFERENCES "Course"("courseUuid") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "CourseOutline" ADD CONSTRAINT "CourseOutline_courseUuid_fkey" FOREIGN KEY ("courseUuid") REFERENCES "Course"("courseUuid") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "EditLog" ADD CONSTRAINT "EditLog_courseUuid_versionNum_fkey" FOREIGN KEY ("courseUuid", "versionNum") REFERENCES "CourseOutline"("courseUuid", "versionNum") ON DELETE RESTRICT ON UPDATE CASCADE;
