import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
} from '@nestjs/common';
import { CourseOutlineService } from './course-outline.service';
import { CreateCourseOutlineDto } from './dto/create-course-outline.dto';
import { UpdateCourseOutlineDto } from './dto/update-course-outline.dto';
import { ApiTags } from '@nestjs/swagger';

@ApiTags('create-outline')
@Controller('course-outline')
export class CourseOutlineController {
  constructor(private readonly courseOutlineService: CourseOutlineService) {}

  @Post()
  create(@Body() createCourseOutlineDto: CreateCourseOutlineDto) {
    return this.courseOutlineService.create(createCourseOutlineDto);
  }

  @Get(':isApproved')
  findAllByApprovalStatus(@Param('isApproved') isApproved: string) {
    return this.courseOutlineService.findAllByStatus(isApproved);
  }

  @Get()
  findAll() {
    return this.courseOutlineService.findAll();
  }

  @Get(':courseUuid/:versionNum')
  findOne(
    @Param('courseUuid') courseUuid: string,
    @Param('versionNum') versionNum: string,
  ) {
    return this.courseOutlineService.findOne(courseUuid, +versionNum);
  }

  @Patch(':courseUuid/:versionNum')
  update(
    @Param('courseUuid') courseUuid: string,
    @Param('versionNum') versionNum: string,
    @Body() updateCourseOutlineDto: UpdateCourseOutlineDto,
  ) {
    return this.courseOutlineService.update(
      courseUuid,
      +versionNum,
      updateCourseOutlineDto,
    );
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.courseOutlineService.remove(id);
  }

  @Get('versionMax/:id')
  getMaxVersion(@Param('id') id: string) {
    return this.courseOutlineService.getVersionNumber(id);
  }
}
