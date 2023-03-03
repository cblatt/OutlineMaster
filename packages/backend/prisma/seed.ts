import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

async function main() {
  const instructor = await prisma.user.create({
    data: {
      uwoId: 'instructor',
      email: 'email@email.com',
      password: 'password',
      firstName: 'John',
      lastName: 'Smith',
      role: 'INSTRUCTOR',
    },
  });

  const administrator = await prisma.user.create({
    data: {
      uwoId: 'admin',
      email: 'email@email.com',
      password: 'password',
      firstName: 'John',
      lastName: 'Smith',
      role: 'ADMINISTRATOR',
    },
  });

  console.log({ instructor, administrator });
}

main()
  .catch((e) => {
    console.error(e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
