import { Injectable, forwardRef } from '@nestjs/common';
import { CreateCardDto } from './dto/create-card.dto';
import { StripeService } from './stripe.service';
import { UserJwtPayload } from 'src/auth/guards/user.guard';
@Injectable()
export class CardService {
  constructor( private readonly stripeService: StripeService) { }
  async create(createCardDto: CreateCardDto, user: UserJwtPayload) {
    try {
      return await this.stripeService.cardService(createCardDto.number, createCardDto.exp_month, createCardDto.exp_year, createCardDto.cvc, user.id)
    }
    catch (error) {
      console.log(error)
     }
  }

  async getMyCards(user: UserJwtPayload) {
    return await this.stripeService.getMyCards(user)
  }
}
