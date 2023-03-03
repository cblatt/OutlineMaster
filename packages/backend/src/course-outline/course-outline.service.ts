import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service';
import { CreateCourseOutlineDto } from './dto/create-course-outline.dto';
import { UpdateCourseOutlineDto } from './dto/update-course-outline.dto';

@Injectable()
export class CourseOutlineService {
  constructor(private prisma: PrismaService) {}

  async create(createCourseOutlineDto: CreateCourseOutlineDto) {
    return this.prisma.courseOutline.create({
      data: {
        ...createCourseOutlineDto,
      },
    });
  }

  findAll() {
    return this.prisma.courseOutline.findMany();
  }

  findOne(id: number) {
    return `This action returns a #${id} courseOutline`;
  }

  update(id: number, updateCourseOutlineDto: UpdateCourseOutlineDto) {
    return `This action updates a #${id} courseOutline`;
  }

  remove(id: number) {
    return `This action removes a #${id} courseOutline`;
  }
}
