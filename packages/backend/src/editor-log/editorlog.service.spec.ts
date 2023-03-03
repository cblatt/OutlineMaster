import { Test, TestingModule } from '@nestjs/testing';
import { EditorlogService } from './editorlog.service';

describe('EditorlogService', () => {
  let service: EditorlogService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [EditorlogService],
    }).compile();

    service = module.get<EditorlogService>(EditorlogService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
