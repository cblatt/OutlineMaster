import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
} from '@nestjs/common';
import { EditorlogService } from './editorlog.service';
import { CreateEditorlogDto } from './dto/create-editorlog.dto';
import { UpdateEditorlogDto } from './dto/update-editorlog.dto';
import { ApiTags } from '@nestjs/swagger';

@Controller('editorlog')
export class EditorlogController {
  constructor(private readonly editorlogService: EditorlogService) {}

  @Post()
  create(@Body() createEditorlogDto: CreateEditorlogDto) {
    return this.editorlogService.create(createEditorlogDto);
  }

  @Get()
  findAll() {
    return this.editorlogService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.editorlogService.findOne(id);
  }

  @Patch(':id')
  update(
    @Param('id') id: string,
    @Body() updateEditorlogDto: UpdateEditorlogDto,
  ) {
    return this.editorlogService.update(id, updateEditorlogDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.editorlogService.remove(id);
  }
}
