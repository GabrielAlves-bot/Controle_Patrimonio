import { Module } from '@nestjs/common';
import { ImovelService } from './imovel.service';
import { ImovelController } from './imovel.controller';
import { PrismaService } from '../database/prismaService';

@Module({
  controllers: [ImovelController],
  providers: [ImovelService,PrismaService]
})
export class ImovelModule {}
