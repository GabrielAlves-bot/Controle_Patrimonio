import { Injectable } from '@nestjs/common';
import { PrismaService } from '../database/prismaService';
import { EnderecoDTO } from './endereco.dto';

@Injectable()
export class EnderecoService {

    constructor(private prisma : PrismaService){}

    async create(data: EnderecoDTO){
        const movel = await this.prisma.endereco.create({
            data,        
    })
    return movel;
    }
}
