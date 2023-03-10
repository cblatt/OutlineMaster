import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { InstructorCoursesService } from './instructor-courses.service';
import { CreateInstructorCourseDto } from './dto/create-instructor-course.dto';
import { UpdateInstructorCourseDto } from './dto/update-instructor-course.dto';
import { ApiTags } from '@nestjs/swagger';

@Controller('instructor-courses')
@ApiTags('instructor-courses')
export class InstructorCoursesController {
  constructor(private readonly instructorCoursesService: InstructorCoursesService) {}

  @Post()
  create(@Body() createInstructorCourseDto: CreateInstructorCourseDto) {
    return this.instructorCoursesService.create(createInstructorCourseDto);
  }

  @Get()
  findAll() {
    return this.instructorCoursesService.findAll();
  }

  @Get(':id/:course')
  findOne(@Param('id') id: string, @Param('course') course: string) {
    return this.instructorCoursesService.findOne(id,course);
  }

  @Patch(':id/:course')
  update(@Param('id') id: string,@Param('course') course: string, @Body() updateInstructorCourseDto: UpdateInstructorCourseDto) {
    return this.instructorCoursesService.update(id, course,updateInstructorCourseDto);
  }

  @Delete(':id/:course')
  remove(@Param('id') id: string,@Param('course') course:string) {
    return this.instructorCoursesService.remove(id,course);
  }
}
