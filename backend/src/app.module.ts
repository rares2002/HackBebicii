import { Module } from '@nestjs/common';
import { AuthModule } from './auth/auth.module';
import { PrismaModule } from './prisma/prisma.module';
import { ChatgptModule } from './chatgpt/chatgpt.module';
import { SubscriptionsModule } from './subscriptions/subscriptions.module';
import { CronjobModule } from './cronjob/cronjob.module';
import { CardModule } from './card/card.module';
import { AchievementsModule } from './achievements/achievements.module';

@Module({
  imports: [PrismaModule, AuthModule, ChatgptModule, SubscriptionsModule, CronjobModule, CardModule, AchievementsModule],
  controllers: [],
  providers: [],
})
export class AppModule {}
