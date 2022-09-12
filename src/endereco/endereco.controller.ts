import { Body, Controller, Post } from '@nestjs/common';
import { EnderecoDTO } from './endereco.dto';
import { EnderecoService } from './endereco.service';

@Controller('endereco')
export class EnderecoController {
  constructor(private readonly enderecoService: EnderecoService) {  }

  @Post()
  async create(@Body() data: EnderecoDTO){
    return this.enderecoService.create(data);
  }

}
