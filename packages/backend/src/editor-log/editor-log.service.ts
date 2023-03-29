import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service';
import { CreateEditorLogDto } from './dto/create-editor-log.dto';

@Injectable()
export class EditorLogService {
  constructor(private prisma: PrismaService) {}

  create(createEditorLogDto: CreateEditorLogDto) {
    return this.prisma.editLog.create({
      data: createEditorLogDto,
    });
  }
}
