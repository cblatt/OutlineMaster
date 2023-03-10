import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service';
import { CreateCourseDto } from './dto/create-course.dto';
import { UpdateCourseDto } from './dto/update-course.dto';

@Injectable()
export class CoursesService {
  constructor(private prisma: PrismaService) {}

  create(createCourseDto: CreateCourseDto) {
    return this.prisma.course.create({ data: createCourseDto });
  }

  findAll() {
    return this.prisma.course.findMany({ include: { department: true } });
  }

  findOne(id: string) {
    return this.prisma.course.findUnique({
      where: { courseUuid: id },
      include: {
        department: true,
        InstructorCourse: { include: { user: true } },
      },
    });
  }

  update(id: string, updateCourseDto: UpdateCourseDto) {
    return this.prisma.course.update({
      where: { courseUuid: id },
      data: updateCourseDto,
    });
  }

  remove(id: string) {
    return this.prisma.course.delete({ where: { courseUuid: id } });
  }
}
