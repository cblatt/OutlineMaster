import { PartialType } from '@nestjs/swagger';
import { CreateEditorlogDto } from './create-editorlog.dto';

export class UpdateEditorlogDto extends PartialType(CreateEditorlogDto) {}
