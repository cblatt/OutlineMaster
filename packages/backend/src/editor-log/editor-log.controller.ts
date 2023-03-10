import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
} from '@nestjs/common';
import { EditorLogService } from './editor-log.service';
import { CreateEditorLogDto } from './dto/create-editor-log.dto';
import { UpdateEditorLogDto } from './dto/update-editor-log.dto';
import { ApiTags } from '@nestjs/swagger';

@Controller('editor-log')
@ApiTags('editor-log')
export class EditorLogController {
  constructor(private readonly editorLogService: EditorLogService) {}

  @Post()
  create(@Body() createEditorLogDto: CreateEditorLogDto) {
    return this.editorLogService.create(createEditorLogDto);
  }

  @Get()
  findAll() {
    return this.editorLogService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.editorLogService.findOne(+id);
  }

  @Patch(':id')
  update(
    @Param('id') id: string,
    @Body() updateEditorLogDto: UpdateEditorLogDto,
  ) {
    return this.editorLogService.update(+id, updateEditorLogDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.editorLogService.remove(+id);
  }
}
