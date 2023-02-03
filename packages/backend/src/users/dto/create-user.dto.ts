import { ApiProperty } from '@nestjs/swagger';
import { Role } from '@prisma/client';

export class CreateUserDto {
  @ApiProperty()
  uwoId: string;

  @ApiProperty()
  email: string;

  @ApiProperty()
  password: string;

  @ApiProperty()
  firstName: string;

  @ApiProperty()
  lastName: string;

  @ApiProperty()
  role: Role;
}
