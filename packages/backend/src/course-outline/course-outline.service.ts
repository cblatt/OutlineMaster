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

  //Return all outlines
  findAll() {
    return this.prisma.courseOutline.findMany({
      include: {
        instructors: true,
        courseTopics: true,
        courseEvaluations: true,
        course: true,
        department: true,
      },
    });
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
      include: {
        instructors: true,
        courseTopics: true,
        courseEvaluations: true,
      },
    });
  }

  update(
    courseUuid: string,
    versionNum: number,
    updateCourseOutlineDto: UpdateCourseOutlineDto,
  ) {
    return this.prisma.courseOutline.update({
      where: {
        courseUuid_versionNum: {
          courseUuid: courseUuid,
          versionNum: versionNum,
        },
      },
      data: {
        ...updateCourseOutlineDto,
        instructors: {
          createMany: {
            data: updateCourseOutlineDto.instructors,
          },
        },
        courseTopics: {
          deleteMany: {
            courseUuid: updateCourseOutlineDto.courseUuid,
            versionNum: updateCourseOutlineDto.versionNum,
          },
          createMany: {
            data: updateCourseOutlineDto.courseTopics.map((topic) => {
              topic.gaIndicators = topic.gaIndicators.map(
                (indicator: any) => indicator.value,
              );
              return topic;
            }),
          },
        },
        courseEvaluations: {
          createMany: {
            data: updateCourseOutlineDto.courseEvaluations,
          },
        },
      },
    });
  }

  findAllOutlinesByCourse(id: string) {
    return this.prisma.courseOutline.findMany({
      where: { courseUuid: id },
    });
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
