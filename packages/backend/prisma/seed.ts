import { PrismaClient } from '@prisma/client';
import * as bcrypt from 'bcrypt';

const prisma = new PrismaClient();

async function main() {
  const hashedPassword = await bcrypt.hash('password', 10);

  const instructor = await prisma.user.create({
    data: {
      uwoId: 'instructor',
      email: 'instructor@email.com',
      password: hashedPassword,
      firstName: 'John',
      lastName: 'Smith',
      role: 'INSTRUCTOR',
    },
  });

  const administrator = await prisma.user.create({
    data: {
      uwoId: 'admin',
      email: 'admin@email.com',
      password: hashedPassword,
      firstName: 'John',
      lastName: 'Smith',
      role: 'ADMINISTRATOR',
    },
  });

  const electrical = await prisma.department.create({
    data: {
      departmentName: 'Electrical Engineering',
      departmentCode: 'ECE',
    },
  });

  const software = await prisma.department.create({
    data: {
      departmentName: 'Software Engineering',
      departmentCode: 'SE',
    },
  });

  const dptchair = await prisma.user.create({
    data: {
      uwoId: 'dptchair',
      email: 'dptchair@email.com',
      password: hashedPassword,
      firstName: 'John',
      lastName: 'Smith',
      role: 'DEPARTMENT_CHAIR',
    },
  });
  const associate = await prisma.user.create({
    data: {
      uwoId: 'associate',
      email: 'associate@email.com',
      password: hashedPassword,
      firstName: 'John',
      lastName: 'Smith',
      role: 'ASSOCIATE_CHAIR',
      departmentUuid: electrical.departmentUuid,
    },
  });

  const pdirector = await prisma.user.create({
    data: {
      uwoId: 'pdirector',
      email: 'pdirector@email.com',
      password: hashedPassword,
      firstName: 'John',
      lastName: 'Smith',
      role: 'PROGRAM_DIRECTOR',
      departmentUuid: software.departmentUuid,
    },
  });

  console.log({
    instructor,
    administrator,
    dptchair,
    associate,
    pdirector,
    electrical,
    software,
  });
}

main()
  .catch((e) => {
    console.error(e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
