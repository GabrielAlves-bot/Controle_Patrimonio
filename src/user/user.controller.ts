import { Body,Controller,Delete,Get,Param,Post, Put } from '@nestjs/common/decorators';
import { ApiOperation, ApiTags } from '@nestjs/swagger/dist';
import { UserDTO } from './user.dto';
import { UserService } from './user.service';

@Controller('api/v1/user')
@ApiTags('User')
export class UserController {
  constructor(private readonly userService: UserService) {}

    @Post()
    @ApiOperation({summary : 'Criar um novo usuário.'})
    async create(@Body() data:UserDTO) {
      return this.userService.create(data);
    }

    @Get()
    @ApiOperation({summary : 'Listar todos os Usuários'})
    async findAll(){
      return this.userService.findAll();
    }

    @Put(":id")
    @ApiOperation({summary : 'Atualizar Usuario'})
    async update(@Param("id") id : string , @Body() data: UserDTO ){
      return this.userService.update(id, data);
    }

    @Delete(":id")
    @ApiOperation({summary : 'Deletar Usuario.'})
    async delete (@Param('id') id : string){
      return this.userService.delete(id);
    }

   
  }

