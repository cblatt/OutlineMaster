import { Module } from '@nestjs/common';
import { CourseOutlineService } from './course-outline.service';
import { CourseOutlineController } from './course-outline.controller';
import { PrismaModule } from 'src/prisma/prisma.module';

@Module({
  controllers: [CourseOutlineController],
  providers: [CourseOutlineService],
  imports: [PrismaModule],
})
export class CourseOutlineModule {}
