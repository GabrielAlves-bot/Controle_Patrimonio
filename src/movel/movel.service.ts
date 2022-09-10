import { Injectable } from '@nestjs/common';
import { PrismaService } from '../database/prismaService'
import { MovelDTO } from './movel.dto';

@Injectable()
export class MovelService {

    constructor(private prisma : PrismaService){}

    async create(data: MovelDTO){
        const movel = await this.prisma.movel.create({
            data,        
    })
    return movel;
}

async findAll() {
    return this.prisma.movel.findMany();
}

async update(movelId: string, data : MovelDTO){


    const userExists = await this.prisma.movel.findUnique({
        where : {
            movelId,
        },
    });

    if(!userExists){
        throw new Error ("User does not exists")
    }

    return await this.prisma.movel.update({
        data,
        where: {
            movelId,
        }
    })

}

async delete(movelId: string){

    const userExists = await this.prisma.movel.findUnique({
        where : {
            movelId,
        },
    });

    if(!userExists){
        throw new Error ("User does not exists");
    }

    return await this.prisma.movel.delete({
        where : {
            movelId,
        }
    })
}
}

