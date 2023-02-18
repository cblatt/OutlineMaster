import { Test, TestingModule } from '@nestjs/testing';
import { InstructorCoursesService } from './instructor-courses.service';

describe('InstructorCoursesService', () => {
  let service: InstructorCoursesService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [InstructorCoursesService],
    }).compile();

    service = module.get<InstructorCoursesService>(InstructorCoursesService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
