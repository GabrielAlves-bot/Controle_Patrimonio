import { ApiProperty } from "@nestjs/swagger"
import { IsNotEmpty } from "class-validator"

export class ImovelDTO {
imovelId?: string

@ApiProperty()
@IsNotEmpty()
nomeImovel: string

@ApiProperty()
@IsNotEmpty()
descricao: string
}