import { ApiProperty } from "@nestjs/swagger"
import { IsEmail, IsNotEmpty } from "class-validator"

export class UserDTO  {

    usuarioId?: string

    @ApiProperty()
    @IsNotEmpty()
    nomeCompleto: string

    @ApiProperty()
    @IsNotEmpty()
    cpf: string

    @ApiProperty()
    @IsNotEmpty()
    matricula: string

    @ApiProperty()
    @IsEmail()
    email: string
    
    @ApiProperty()
    @IsNotEmpty()
    senha: string
    
}