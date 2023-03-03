import { ApiProperty } from '@nestjs/swagger';

export class CreateEditorlogDto {
  @ApiProperty()
  courseUuid: string;

  @ApiProperty()
  versionNum: number;

  @ApiProperty()
  editNum: number;

  @ApiProperty()
  timeLastEdited: string;

  @ApiProperty()
  editor: string;
}
