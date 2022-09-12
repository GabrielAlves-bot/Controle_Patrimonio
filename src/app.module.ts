import { Module } from '@nestjs/common';
import { UserModule } from './user/user.module';
import { MovelModule } from './movel/movel.module';
import { ImovelModule } from './imovel/imovel.module';
import { EnderecoModule } from './endereco/endereco.module';

@Module({
  imports: [UserModule,MovelModule, ImovelModule, EnderecoModule],
  controllers: [],
  providers: [],
})
export class AppModule {}
