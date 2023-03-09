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
