import { ForbiddenException, Injectable } from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import * as bcrypt from 'bcrypt';

@Injectable()
export class UsersService {
  constructor(private prisma: PrismaService) {}

  hashPassword(data: string) {
    return bcrypt.hash(data, 10);
  }

  async create(createUserDto: CreateUserDto) {
    const hashedPassword = await this.hashPassword(createUserDto.password);

    return this.prisma.user.create({
      data: {
        ...createUserDto,
        password: hashedPassword,
      },
    });
  }

  findAll() {
    return this.prisma.user.findMany({
      select: {
        uwoId: true,
        email: true,
        firstName: true,
        lastName: true,
        role: true,
        departmentUuid: true,
        department: true,
      },
    });
  }

  findOne(id: string) {
    return this.prisma.user.findUnique({ where: { uwoId: id } });
  }

  async login(id: string, password: string) {
    const user = await this.prisma.user.findUnique({
      where: { uwoId: id },
    });

    if (!user) throw new ForbiddenException('Access Denied');

    const passwordMatches = await bcrypt.compare(password, user.password);

    if (!passwordMatches) throw new ForbiddenException('Access Denied');

    return {
      uwoId: user.uwoId,
      email: user.email,
      firstName: user.firstName,
      lastName: user.lastName,
      role: user.role,
      departmentUuid: user.departmentUuid,
    };
  }

  update(id: string, updateUserDto: UpdateUserDto) {
    return this.prisma.user.update({
      where: { uwoId: id },
      data: updateUserDto,
    });
  }

  remove(id: string) {
    return this.prisma.user.delete({ where: { uwoId: id } });
  }

  findInstructors() {
    return this.prisma.user.findMany({ where: { role: 'INSTRUCTOR' } });
  }
}
