import { Body, Controller, Post } from '@nestjs/common';
import { MovelDTO } from './movel.dto';
import { MovelService } from './movel.service';

@Controller('moveis')
export class MovelController {
  constructor(private readonly moveisService: MovelService) {}

  @Post()
  async create(@Body() data: MovelDTO){
    return this.moveisService.create(data);
  }
}
