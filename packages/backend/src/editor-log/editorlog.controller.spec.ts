import { Test, TestingModule } from '@nestjs/testing';
import { EditorlogController } from './editorlog.controller';
import { EditorlogService } from './editorlog.service';

describe('EditorlogController', () => {
  let controller: EditorlogController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [EditorlogController],
      providers: [EditorlogService],
    }).compile();

    controller = module.get<EditorlogController>(EditorlogController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
