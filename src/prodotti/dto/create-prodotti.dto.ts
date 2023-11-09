import {
  IsBoolean,
  IsNotEmpty,
  IsNumber,
  IsString,
  MaxLength,
} from 'class-validator';
export class CreaProdottoDto {
  @IsString()
  @MaxLength(30)
  @IsNotEmpty()
  readonly nome: string;
  @IsNumber()
  @IsNotEmpty()
  readonly prezzo: number;
  @IsBoolean()
  @IsNotEmpty()
  readonly discontinued: boolean;
}
export class CreateProdottiDto {}
