import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service';
import { CreateInstructorCourseDto } from './dto/create-instructor-course.dto';
import { UpdateInstructorCourseDto } from './dto/update-instructor-course.dto';

@Injectable()
export class InstructorCoursesService {
  constructor(private prisma: PrismaService) {}

  create(createInstructorCourseDto: CreateInstructorCourseDto) {
    return this.prisma.instructorCourse.create({
      data: createInstructorCourseDto,
    });
  }

  findAll() {
    return this.prisma.instructorCourse.findMany();
  }

  findOne(id: string, course: string) {
    return this.prisma.instructorCourse.findUnique({
      where: { uwoId_courseUuid: { uwoId: id, courseUuid: course } },
    });
  }

  findAllCoursesByInstructor(id: string) {
    return this.prisma.instructorCourse.findMany({
      where: { uwoId: id },
      include: {
        course: {
          include: {
            department: true,
            courseOutlines: true,
          },
        },
      },
    });
  }

  update(
    id: string,
    course: string,
    updateInstructorCourseDto: UpdateInstructorCourseDto,
  ) {
    return this.prisma.instructorCourse.update({
      where: { uwoId_courseUuid: { uwoId: id, courseUuid: course } },
      data: updateInstructorCourseDto,
    });
  }

  remove(id: string, course: string) {
    return this.prisma.instructorCourse.delete({
      where: { uwoId_courseUuid: { uwoId: id, courseUuid: course } },
    });
  }
}
