import { ApiProperty } from "@nestjs/swagger"
import { IsNotEmpty } from "class-validator"


export class MovelDTO {

movelId?: string
@ApiProperty()
@IsNotEmpty()
nomePatrimonio: string

@ApiProperty()
@IsNotEmpty()
descricao: string

@ApiProperty()
@IsNotEmpty()
marca: string

@ApiProperty()
@IsNotEmpty()
modelo: string

@ApiProperty()
origemTombamento: string

@ApiProperty()
numeroTombamento: string

@ApiProperty()
estadoConservacao: string

@ApiProperty()
@IsNotEmpty()
localizacao: string

@ApiProperty()
@IsNotEmpty()
valor : number

@ApiProperty()
usuarioId: string

@ApiProperty()
imovelId: string

}