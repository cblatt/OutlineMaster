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
  findOne(courseUuid: string, versionNum: number) {
    return this.prisma.courseOutline.findUnique({
      where: {
        courseUuid_versionNum: {
          courseUuid: courseUuid,
          versionNum: versionNum,
        },
      },
    });
  }

  update(id: number, updateCourseOutlineDto: UpdateCourseOutlineDto) {
    return `This action updates a #${id} courseOutline`;
  }

  remove(courseUuid: string) {
    return this.prisma.courseOutline.deleteMany({ where: { courseUuid } });
  }
}
