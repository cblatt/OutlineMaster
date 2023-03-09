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
@ApiTags('editorlog')
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

  @Get(':courseUuid:versionNum')
  findOne(@Param() courseUuid: string, versionNum: number) {
    return this.editorlogService.findOne(courseUuid, versionNum);
  }

  @Patch(':courseUuid:versionNum')
  update(
    @Param() courseUuid: string,
    versionNum: number,
    @Body() updateEditorlogDto: UpdateEditorlogDto,
  ) {
    return this.editorlogService.update(
      courseUuid,
      versionNum,
      updateEditorlogDto,
    );
  }

  @Delete(':courseUuid:versionNum')
  remove(@Param() courseUuid: string, versionNum: number) {
    return this.editorlogService.remove(courseUuid, versionNum);
  }
}
