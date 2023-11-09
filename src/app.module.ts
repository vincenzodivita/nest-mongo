import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ProdottiModule } from './prodotti/prodotti.module';
import { MongooseModule } from '@nestjs/mongoose';
import { ConfigModule } from '@nestjs/config';

@Module({
  imports: [
    ConfigModule.forRoot({ isGlobal: true, cache: true }),
    MongooseModule.forRoot(process.env.MONGO_HOST, {
      dbName: process.env.MONGO_DB,
    }),
    ProdottiModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
