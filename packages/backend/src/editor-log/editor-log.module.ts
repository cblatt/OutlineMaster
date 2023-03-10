import { Module } from '@nestjs/common';
import { EditorLogService } from './editor-log.service';
import { EditorLogController } from './editor-log.controller';
import { PrismaModule } from 'src/prisma/prisma.module';

@Module({
  controllers: [EditorLogController],
  providers: [EditorLogService],
  imports: [PrismaModule],
})
export class EditorLogModule {}
