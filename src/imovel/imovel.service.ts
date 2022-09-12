import { Injectable } from '@nestjs/common';
import { PrismaService } from '../database/prismaService';
import { ImovelDTO } from './imovel.dto';

@Injectable()
export class ImovelService {

    constructor(private prisma: PrismaService){}

    async create(data: ImovelDTO){
        const imovel = await this.prisma.imovel.create({
            data,        
    })
    return imovel;
}

async findAll() {
    return this.prisma.imovel.findMany();
}

async update(imovelId: string, data : ImovelDTO){


    const userExists = await this.prisma.imovel.findUnique({
        where : {
            imovelId,
        },
    });

    if(!userExists){
        throw new Error ("User does not exists")
    }

    return await this.prisma.imovel.update({
        data,
        where: {
            imovelId,
        }
    })

}

async delete(imovelId: string){

    const userExists = await this.prisma.imovel.findUnique({
        where : {
            imovelId,
        },
    });

    if(!userExists){
        throw new Error ("User does not exists");
    }

    return await this.prisma.imovel.delete({
        where : {
            imovelId,
        }
    })
}

    
}
