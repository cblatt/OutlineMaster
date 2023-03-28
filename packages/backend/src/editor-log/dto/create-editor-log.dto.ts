import { ApiProperty } from '@nestjs/swagger';

export class CreateEditorLogDto {
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
  @ApiProperty()
  changes: string;
}
