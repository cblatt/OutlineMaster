import { Test, TestingModule } from '@nestjs/testing';
import { InstructorCoursesController } from './instructor-courses.controller';
import { InstructorCoursesService } from './instructor-courses.service';

describe('InstructorCoursesController', () => {
  let controller: InstructorCoursesController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [InstructorCoursesController],
      providers: [InstructorCoursesService],
    }).compile();

    controller = module.get<InstructorCoursesController>(InstructorCoursesController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
