import { Injectable, NotFoundException } from '@nestjs/common';
import { CreaProdottoDto, CreateProdottiDto } from './dto/create-prodotti.dto';
import { UpdateProdottiDto } from './dto/update-prodotti.dto';
import { InjectModel } from '@nestjs/mongoose';
import { IProdotto } from './interfacce/prodotti.interface';
import { Model } from 'mongoose';

@Injectable()
export class ProdottiService {
  constructor(
    @InjectModel('Prodotto') private prodottoModel: Model<IProdotto>,
  ) {}
  async createProdotto(createProdottoDto: CreaProdottoDto): Promise<IProdotto> {
    const newProdotto = await new this.prodottoModel(createProdottoDto);
    return newProdotto.save();
  }

  async updateProdotto(
    prodottoId: string,
    updateProdottoDto: UpdateProdottiDto,
  ): Promise<IProdotto> {
    const existingStudent = await this.prodottoModel.findByIdAndUpdate(
      prodottoId,
      updateProdottoDto,
      { new: true },
    );
    if (!existingStudent) {
      throw new NotFoundException(`Prodotto #${prodottoId} not found`);
    }
    return existingStudent;
  }
  async getAllProdotti(): Promise<IProdotto[]> {
    const prodottoData = await this.prodottoModel.find();
    if (!prodottoData || prodottoData.length == 0) {
      throw new NotFoundException('Prodotti  not found!');
    }
    return prodottoData;
  }

  async getProdotto(prodottoId: string): Promise<IProdotto> {
    const existingProdotto = await this.prodottoModel
      .findById(prodottoId)
      .exec();
    if (!existingProdotto) {
      throw new NotFoundException(`Prodotto #${prodottoId} not found`);
    }
    return existingProdotto;
  }

  async deleteProdotto(prodottoId: string): Promise<IProdotto> {
    const deletedProdotto =
      await this.prodottoModel.findByIdAndDelete(prodottoId);
    if (!deletedProdotto) {
      throw new NotFoundException(`Prodotto #${prodottoId} not found`);
    }
    return deletedProdotto;
  }
}
