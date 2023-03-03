import { Test, TestingModule } from '@nestjs/testing';
import { CourseOutlineController } from './course-outline.controller';
import { CourseOutlineService } from './course-outline.service';

describe('CourseOutlineController', () => {
  let controller: CourseOutlineController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [CourseOutlineController],
      providers: [CourseOutlineService],
    }).compile();

    controller = module.get<CourseOutlineController>(CourseOutlineController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
