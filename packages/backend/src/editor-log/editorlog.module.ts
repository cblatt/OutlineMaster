import { Module } from '@nestjs/common';
import { EditorlogService } from './editorlog.service';
import { EditorlogController } from './editorlog.controller';
import { PrismaModule } from 'src/prisma/prisma.module';

@Module({
  controllers: [EditorlogController],
  providers: [EditorlogService],
  imports: [PrismaModule],
})
export class EditorlogModule {}
