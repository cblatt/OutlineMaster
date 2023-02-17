import { ApiProperty } from '@nestjs/swagger';
import { Term } from '@prisma/client';

export class CreateCourseDto {
  @ApiProperty()
  courseCode: string;

  @ApiProperty()
  semester: Term;

  @ApiProperty()
  year: number;

  @ApiProperty()
  courseName: string;

  @ApiProperty()
  departmentUuid: string;
}
