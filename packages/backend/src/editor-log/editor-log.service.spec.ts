import { Test, TestingModule } from '@nestjs/testing';
import { EditorLogService } from './editor-log.service';

describe('EditorLogService', () => {
  let service: EditorLogService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [EditorLogService],
    }).compile();

    service = module.get<EditorLogService>(EditorLogService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
