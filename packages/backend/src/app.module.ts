import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { PrismaModule } from './prisma/prisma.module';
import { UsersModule } from './users/users.module';
import { DepartmentsModule } from './departments/departments.module';
import { CoursesModule } from './courses/courses.module';

@Module({
  imports: [PrismaModule, UsersModule, DepartmentsModule, CoursesModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
