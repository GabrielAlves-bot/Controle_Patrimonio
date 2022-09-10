import { Controller } from '@nestjs/common';
import { ImovelService } from './imovel.service';

@Controller('imovel')
export class ImovelController {
  constructor(private readonly imovelService: ImovelService) {}
}
