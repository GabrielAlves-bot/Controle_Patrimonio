import { Module } from '@nestjs/common';
import { UserModule } from './user/user.module';
import { MovelModule } from './movel/movel.module';
import { ImovelModule } from './imovel/imovel.module';

@Module({
  imports: [UserModule,MovelModule, ImovelModule],
  controllers: [],
  providers: [],
})
export class AppModule {}
