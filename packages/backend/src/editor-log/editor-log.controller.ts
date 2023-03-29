import { Body, Controller, Post } from '@nestjs/common';
import { ApiTags } from '@nestjs/swagger';
import { CreateEditorLogDto } from './dto/create-editor-log.dto';
import { EditorLogService } from './editor-log.service';

@Controller('editor-log')
@ApiTags('editor-log')
export class EditorLogController {
  constructor(private readonly editorLogService: EditorLogService) {}

  @Post()
  create(@Body() createEditorLogDto: CreateEditorLogDto) {
    return this.editorLogService.create(createEditorLogDto);
  }
}
