import { Module } from '@nestjs/common';
import { UserModule } from './user/user.module';
import { MovelModule } from './movel/movel.module';

@Module({
  imports: [UserModule,MovelModule],
  controllers: [],
  providers: [],
})
export class AppModule {}
