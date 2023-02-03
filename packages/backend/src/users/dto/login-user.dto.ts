import { ApiProperty } from '@nestjs/swagger';

export class LoginUserDto {
  @ApiProperty()
  uwoId: string;

  @ApiProperty()
  password: string;
}
