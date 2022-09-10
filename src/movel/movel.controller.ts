import { Body, Controller, Delete, Get, Param, Post, Put } from '@nestjs/common';
import { MovelDTO } from './movel.dto';
import { MovelService } from './movel.service';
import { ApiOperation, ApiTags } from '@nestjs/swagger/dist';

@Controller('api/v1/moveis')
@ApiTags('movel')
export class MovelController {
  constructor(private readonly moveisService: MovelService) {}

  @Post()
  @ApiOperation({summary : 'Criar um novo movel.'})
  async create(@Body() data: MovelDTO){
    return this.moveisService.create(data);
  }

  @Get()
  @ApiOperation({summary : 'Listar todos os moveis'})
  async findAll(){
      return this.moveisService.findAll();
    }

  @Put(":id")
  @ApiOperation({summary : 'Atualizar um movel'})
  async update(@Param("id") id : string , @Body() data: MovelDTO ){
      return this.moveisService.update(id, data);
    }

  @Delete(":id")
  @ApiOperation({summary : 'Deletar movel.'})
  async delete (@Param('id') id : string){
      return this.moveisService.delete(id);
    }
}
