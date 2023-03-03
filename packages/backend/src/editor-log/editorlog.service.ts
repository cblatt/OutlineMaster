import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service';
import { CreateEditorlogDto } from './dto/create-editorlog.dto';
import { UpdateEditorlogDto } from './dto/update-editorlog.dto';

@Injectable()
export class EditorlogService {
  constructor(private prisma: PrismaService) {}

  create(createEditorlogDto: CreateEditorlogDto) {
    return this.prisma.editLog.create({ data: createEditorlogDto });
  }

  findAll() {
    return this.prisma.editLog.findMany();
  }

  findOne(courseUuid: string, versionNum: number) {
    return this.prisma.editLog.findUnique({
      where: {
        courseUuid_versionNum: {
          courseUuid: courseUuid,
          versionNum: versionNum,
        },
      },
    });
  }

  update(
    courseUuid: string,
    versionNum: number,
    updateEditorlogDto: UpdateEditorlogDto,
  ) {
    return this.prisma.editLog.update({
      where: {
        courseUuid_versionNum: {
          courseUuid: courseUuid,
          versionNum: versionNum,
        },
      },
      data: updateEditorlogDto,
    });
  }

  remove(courseUuid: string, versionNum: number) {
    return this.prisma.editLog.delete({
      where: {
        courseUuid_versionNum: {
          courseUuid: courseUuid,
          versionNum: versionNum,
        },
      },
    });
  }
}
