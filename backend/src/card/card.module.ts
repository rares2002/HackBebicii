import { Module, forwardRef } from '@nestjs/common';
import { CardService } from './card.service';
import { CardController } from './card.controller';
import { StripeService } from './stripe.service';
import { PrismaModule } from 'src/prisma/prisma.module';

@Module({
  imports: [forwardRef(() => StripeService), PrismaModule],
  controllers: [CardController],
  providers: [CardService, StripeService],
  exports: [StripeService]
})
export class CardModule {}
