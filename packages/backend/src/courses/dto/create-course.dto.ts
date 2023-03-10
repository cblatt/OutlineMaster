import { ApiProperty } from '@nestjs/swagger';

export class CreateCourseDto {
  @ApiProperty()
  courseCode: string;

  @ApiProperty()
  courseName: string;

  @ApiProperty()
  departmentUuid: string;
}
