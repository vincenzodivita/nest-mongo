import { PartialType } from '@nestjs/mapped-types';
import { CreaProdottoDto } from './create-prodotti.dto';

export class UpdateProdottiDto extends PartialType(CreaProdottoDto) {}
