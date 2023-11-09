import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
} from '@nestjs/common';
import { ProdottiService } from './prodotti.service';
import { CreaProdottoDto } from './dto/create-prodotti.dto';
import { UpdateProdottiDto } from './dto/update-prodotti.dto';
import { IProdotto } from './interfacce/prodotti.interface';

@Controller('prodotti')
export class ProdottiController {
  constructor(private readonly prodottiService: ProdottiService) {}

  @Post()
  async create(
    @Body() creaProdottiDto: CreaProdottoDto,
  ): Promise<CreaProdottoDto> {
    return await this.prodottiService.createProdotto(creaProdottiDto);
  }

  @Get()
  async findAll(): Promise<IProdotto[]> {
    return await this.prodottiService.getAllProdotti();
  }

  @Get(':id')
  async findOne(@Param('id') id: string): Promise<IProdotto> {
    return await this.prodottiService.getProdotto(id);
  }

  @Patch(':id')
  async update(
    @Param('id') id: string,
    @Body() updateProdottiDto: UpdateProdottiDto,
  ): Promise<IProdotto> {
    return await this.prodottiService.updateProdotto(id, updateProdottiDto);
  }

  @Delete(':id')
  async remove(@Param('id') id: string): Promise<IProdotto> {
    return await this.prodottiService.deleteProdotto(id);
  }
}
