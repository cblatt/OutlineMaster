import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service';
import { CreateInstructorCourseDto } from './dto/create-instructor-course.dto';
import { UpdateInstructorCourseDto } from './dto/update-instructor-course.dto';

@Injectable()
export class InstructorCoursesService {
  constructor(private prisma: PrismaService) {}

  create(createInstructorCourseDto: CreateInstructorCourseDto) {
    return 'This action adds a new instructorCourse';
  }

  findAll() {
    return this.prisma.instructorCourse.findMany();
  }

  findOne(id: number) {
    return `This action returns a #${id} instructorCourse`;
  }

  update(id: number, updateInstructorCourseDto: UpdateInstructorCourseDto) {
    return `This action updates a #${id} instructorCourse`;
  }

  remove(id: number) {
    return `This action removes a #${id} instructorCourse`;
  }
}
