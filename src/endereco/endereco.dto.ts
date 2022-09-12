import { ApiProperty } from "@nestjs/swagger"
import { IsNotEmpty } from "class-validator"

export class EnderecoDTO {

  Id?: string

  @ApiProperty()
  @IsNotEmpty()
  logradouro: string

  @ApiProperty()
  @IsNotEmpty()
  numero: string

  @ApiProperty()
  complemento: string

  @ApiProperty()
  @IsNotEmpty()
  bairro: string

  @ApiProperty()
  @IsNotEmpty()
  cidade: string

  @ApiProperty()
  @IsNotEmpty()
  estado: string
  
  @ApiProperty()
  @IsNotEmpty()
  cep: string

  @ApiProperty()
  imovelId: string
}