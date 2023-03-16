import { PartialType } from '@nestjs/swagger';
import { CreateEditorLogDto } from './create-editor-log.dto';

export class UpdateEditorLogDto extends PartialType(CreateEditorLogDto) {}
