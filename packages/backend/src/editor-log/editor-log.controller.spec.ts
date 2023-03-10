import { Test, TestingModule } from '@nestjs/testing';
import { EditorLogController } from './editor-log.controller';
import { EditorLogService } from './editor-log.service';

describe('EditorLogController', () => {
  let controller: EditorLogController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [EditorLogController],
      providers: [EditorLogService],
    }).compile();

    controller = module.get<EditorLogController>(EditorLogController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
