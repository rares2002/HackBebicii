import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { CardService } from './card.service';
import { CreateCardDto } from './dto/create-card.dto';
import {Auth} from '../auth/decorators/auth.decorator'
import { UserGuard } from 'src/auth/guards/user.guard';

@Controller('card')
export class CardController {
  constructor(private readonly cardService: CardService) { }

  @Post('create')
  @Auth()
  create(
    @Body() createCardDto: CreateCardDto,
    @UserGuard() user: any
  ) {
    return this.cardService.create(createCardDto, user);
  }

  @Get('get-my-cards')
  @Auth()
  getMyCards(
    @UserGuard() user: any
  )
  {
    console.log(user)
    
    return this.cardService.getMyCards(user);
  }

}
