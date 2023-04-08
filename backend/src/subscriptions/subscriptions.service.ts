import { Injectable } from '@nestjs/common';
import { CreateSubscriptionDto} from './dto/create-subscription.dto';
import { PrismaService } from 'src/prisma/prisma.service';
import { UserJwtPayload } from 'src/auth/guards/user.guard';
@Injectable()
export class SubscriptionsService {
    constructor(private readonly prisma: PrismaService) { }

    create(createSubscriptionDto: CreateSubscriptionDto) {
        return this.prisma.subscription.create({
            data: {
                ...createSubscriptionDto
            }
        })
    }

    subscribe(id: number, user: UserJwtPayload) {
        // return this.prisma.subscription.update({
        //     where: {
        //         id: id
        //     }
        // })
     }
}
