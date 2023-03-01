-- CreateEnum
CREATE TYPE "Term" AS ENUM ('FALL', 'WINTER', 'SUMMER');

-- CreateTable
CREATE TABLE "Department" (
    "departmentUuid" TEXT NOT NULL,
    "departmentName" TEXT NOT NULL,

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

-- CreateIndex
CREATE UNIQUE INDEX "Department_departmentName_key" ON "Department"("departmentName");

-- CreateIndex
CREATE UNIQUE INDEX "Course_courseName_key" ON "Course"("courseName");

-- AddForeignKey
ALTER TABLE "Course" ADD CONSTRAINT "Course_departmentUuid_fkey" FOREIGN KEY ("departmentUuid") REFERENCES "Department"("departmentUuid") ON DELETE RESTRICT ON UPDATE CASCADE;
