import { Module } from '@nestjs/common';
import { ProdottiService } from './prodotti.service';
import { ProdottiController } from './prodotti.controller';
import { ProdottoSchema } from './schema/prodotti.schema';
import { MongooseModule } from '@nestjs/mongoose';

@Module({
  imports: [
    MongooseModule.forFeature([
      { name: 'Prodotto', schema: ProdottoSchema, collection: 'Prodotti' },
    ]),
  ],
  controllers: [ProdottiController],
  providers: [ProdottiService],
})
export class ProdottiModule {}
