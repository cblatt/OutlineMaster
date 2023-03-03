import { Test, TestingModule } from '@nestjs/testing';
import { CourseOutlineService } from './course-outline.service';

describe('CourseOutlineService', () => {
  let service: CourseOutlineService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [CourseOutlineService],
    }).compile();

    service = module.get<CourseOutlineService>(CourseOutlineService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
