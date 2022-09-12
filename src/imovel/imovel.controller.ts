import { Body, Controller, Delete, Get, Param, Post, Put } from '@nestjs/common';
import { ImovelService } from './imovel.service';
import { ApiOperation, ApiTags } from '@nestjs/swagger/dist';
import { ImovelDTO } from './imovel.dto';

@Controller('api/v1/imovel')
@ApiTags('imovel')
export class ImovelController {
  constructor(private readonly imovelService: ImovelService) {}

  @Post()
  @ApiOperation({summary : 'Criar um novo imovel.'})
  async create(@Body() data: ImovelDTO){
    return this.imovelService.create(data); 
  }

  @Get()
  @ApiOperation({summary : 'Listar todos os imoveis'})
  async findAll(){
      return this.imovelService.findAll();
    }

  @Put(":id")
  @ApiOperation({summary : 'Atualizar um imovel'})
  async update(@Param("id") id : string , @Body() data: ImovelDTO ){
      return this.imovelService.update(id, data);
    }

  @Delete(":id")
  @ApiOperation({summary : 'Deletar imovel.'})
  async delete (@Param('id') id : string){
      return this.imovelService.delete(id);
    }
}
