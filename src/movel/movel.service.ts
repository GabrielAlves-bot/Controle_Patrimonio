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
}

