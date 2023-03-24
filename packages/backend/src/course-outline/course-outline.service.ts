import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service';
import { CreateCourseOutlineDto } from './dto/create-course-outline.dto';
import { UpdateCourseOutlineDto } from './dto/update-course-outline.dto';

@Injectable()
export class CourseOutlineService {
  constructor(private prisma: PrismaService) {}

  //Create outline
  async create(createCourseOutlineDto: CreateCourseOutlineDto) {
    return this.prisma.courseOutline.create({
      data: {
        ...createCourseOutlineDto,
      },
    });
  }

  //Return all outlines
  findAll() {
    return this.prisma.courseOutline.findMany();
  }

  //Return outlines depending on status
  async findAllByStatus(isApproved: string) {
    const courseOutlines = await this.prisma.courseOutline.findMany({
      where: {
        isApproved: isApproved,
      },
    });
    return courseOutlines;
  }

  //Find outlines by version num and uuid
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

  update(courseUuid: string, versionNum: number, isApproved: string) {
    return this.prisma.courseOutline.update({
      where: {
        courseUuid_versionNum: {
          courseUuid: courseUuid,
          versionNum: versionNum,
        },
      },
      data: { isApproved: isApproved },
    });
  }

  remove(courseUuid: string) {
    return this.prisma.courseOutline.deleteMany({ where: { courseUuid } });
  }

  async getVersionNumber(courseUuid: string) {
    const latestOutline = await this.prisma.courseOutline.findFirst({
      where: {
        courseUuid: courseUuid,
      },
      orderBy: {
        versionNum: 'desc',
      },
    });
    return latestOutline.versionNum;
  }
}
