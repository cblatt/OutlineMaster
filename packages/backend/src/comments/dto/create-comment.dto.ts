import { ApiProperty } from '@nestjs/swagger';

export class CreateCommentDto {
  @ApiProperty()
  commentId: string;

  @ApiProperty()
  commentTxt: string;
}
