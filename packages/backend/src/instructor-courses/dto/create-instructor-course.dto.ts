import { ApiProperty } from "@nestjs/swagger";

export class CreateInstructorCourseDto {
  @ApiProperty()
  uwoId: string;

  @ApiProperty()
  courseUuid: string;
}
