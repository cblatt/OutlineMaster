import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { PrismaModule } from './prisma/prisma.module';
import { UsersModule } from './users/users.module';
import { DepartmentsModule } from './departments/departments.module';
import { CoursesModule } from './courses/courses.module';
import { InstructorCoursesModule } from './instructor-courses/instructor-courses.module';
import { CommentsModule } from './comments/comments.module';

import { CourseOutlineModule } from './course-outline/course-outline.module';

import { EditorLogModule } from './editor-log/editor-log.module';

@Module({
  imports: [
    PrismaModule,
    UsersModule,
    DepartmentsModule,
    CoursesModule,
    InstructorCoursesModule,
    CommentsModule,

    CourseOutlineModule,

    EditorLogModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
