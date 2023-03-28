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
    },
  });

  const electrical = await prisma.department.create({
    data: {
      departmentUuid: '6cff969f-2051-49d7-9433-84827debfff5',
      departmentName: 'Electrical',
      departmentCode: 'ECE',
    },
  });

  console.log({
    instructor,
    administrator,
    dptchair,
    associate,
    pdirector,
    electrical,
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
