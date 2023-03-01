import { Module } from '@nestjs/common';
import { InstructorCoursesService } from './instructor-courses.service';
import { InstructorCoursesController } from './instructor-courses.controller';
import { PrismaModule } from 'src/prisma/prisma.module';
@Module({
  controllers: [InstructorCoursesController],
  providers: [InstructorCoursesService],
  imports: [PrismaModule],
})
export class InstructorCoursesModule {}
