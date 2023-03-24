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
        instructors: {
          createMany: {
            data: createCourseOutlineDto.instructors,
          },
        },
        courseTopics: {
          createMany: {
            data: createCourseOutlineDto.courseTopics.map((topic) => {
              topic.gaIndicators = topic.gaIndicators.map(
                (indicator: any) => indicator.value,
              );
              return topic;
            }),
          },
        },
        courseEvaluations: {
          createMany: {
            data: createCourseOutlineDto.courseEvaluations,
          },
        },
      },
      include: {
        instructors: true,
        courseTopics: true,
        courseEvaluations: true,
      },
    });
  }

  findAll() {
    return this.prisma.courseOutline.findMany({
      include: {
        instructors: true,
        courseTopics: true,
        courseEvaluations: true,
      },
    });
  }

  findOne(courseUuid: string, versionNum: number) {
    return this.prisma.courseOutline.findUnique({
      where: {
        courseUuid_versionNum: {
          courseUuid: courseUuid,
          versionNum: versionNum,
        },
      },
      include: {
        instructors: true,
        courseTopics: true,
        courseEvaluations: true,
      },
    });
  }

  update(id: number, updateCourseOutlineDto: UpdateCourseOutlineDto) {
    return `This action updates a #${id} courseOutline`;
  }

  remove(courseUuid: string) {
    return this.prisma.courseOutline.deleteMany({
      where: { courseUuid },
    });
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
