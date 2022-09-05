import { Module } from '@nestjs/common';
import { MovelService } from './movel.service';
import { MovelController } from './movel.controller';
import { PrismaService } from '../database/prismaService';

@Module({
  controllers: [MovelController],
  providers: [MovelService,PrismaService]
})
export class MovelModule {}
