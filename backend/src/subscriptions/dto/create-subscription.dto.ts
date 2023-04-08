import { PrismaClient } from "@prisma/client";
import { IsNotEmpty, IsString, IsInt } from "class-validator";
import { Type } from 'class-transformer';

export class CreateSubscriptionDto {
    //   @IsNotEmpty()
    @IsString()
    name: string;

    // @Type(() => Number)
    @IsInt()
    price: number;
    
    @IsString()
    description: string

}