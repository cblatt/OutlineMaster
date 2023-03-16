import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service';
import { CreateEditorLogDto } from './dto/create-editor-log.dto';
import { UpdateEditorLogDto } from './dto/update-editor-log.dto';

@Injectable()
export class EditorLogService {
  constructor(private prisma: PrismaService) {}

  create(createEditorLogDto: CreateEditorLogDto) {
    return this.prisma.editLog.create({
      data: createEditorLogDto,
    });
  }

  findAll() {
    return this.prisma.editLog.findMany();
  }

  findOne(id: number) {
    return `This action returns a #${id} editorLog`;
  }

  update(id: number, updateEditorLogDto: UpdateEditorLogDto) {
    return `This action updates a #${id} editorLog`;
  }

  remove(id: number) {
    return `This action removes a #${id} editorLog`;
  }
}
