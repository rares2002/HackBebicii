import { Controller, Post, Body, Param, Get } from '@nestjs/common';
import { SubscriptionsService } from './subscriptions.service';
import { CreateSubscriptionDto } from './dto/create-subscription.dto';
import { Auth } from 'src/auth/decorators/auth.decorator';
import { ReqUser } from 'src/utils/user.decorator';
import { UserGuard } from 'src/auth/guards/user.guard';

@Controller('subscriptions')
export class SubscriptionsController {
  constructor(private readonly subscriptionsService: SubscriptionsService) { }
  
  @Post('create')
  async create(
    @Body() createSubscriptionDto: CreateSubscriptionDto,
  ) {
    return this.subscriptionsService.create(createSubscriptionDto)
  }

  @Auth()
  @Post('subscribe/:id')
  async subscribe(
    @Param('id') id: number,
    @UserGuard() user: any
  ) {
    console.log()
    return this.subscriptionsService.subscribe(id, user)
  }

  @Auth()
  @Get('my-subscriptions')
  async mySubscriptions(
    @UserGuard() user: any
  ) {
    return this.subscriptionsService.mySubscriptions(user)
  }

  @Auth()
  @Post('unsubscribe/:id')
  async unsubscribe(
    @Param('id') id: number,
    @UserGuard() user: any
  ) {
    return this.subscriptionsService.unsubscribe(id, user)
  }

}