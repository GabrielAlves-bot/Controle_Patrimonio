import { Injectable } from '@nestjs/common';
import { Prisma } from '@prisma/client';
import { PrismaService } from '../database/prismaService';
import { UserDTO } from './user.dto';

@Injectable()
export class UserService {

    constructor(private prisma: PrismaService){}

    async create (data: UserDTO){

        const userExists = await this.prisma.usuario.findFirst({
            where : {
                email : data.email
            }
        })

        if(userExists){
            throw new Error("User Already exist");
        }

        const user = await this.prisma.usuario.create({
           data,
        });

        return user;
    }

}
