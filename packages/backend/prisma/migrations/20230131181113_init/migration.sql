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

-- CreateIndex
CREATE UNIQUE INDEX "User_email_key" ON "User"("email");
