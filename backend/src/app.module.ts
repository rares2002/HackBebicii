import { Module } from '@nestjs/common';
import { AuthModule } from './auth/auth.module';
import { PrismaModule } from './prisma/prisma.module';
import { ChatgptModule } from './chatgpt/chatgpt.module';
import { SubscriptionsModule } from './subscriptions/subscriptions.module';

@Module({
  imports: [PrismaModule, AuthModule, ChatgptModule, SubscriptionsModule],
  controllers: [],
  providers: [],
})
export class AppModule {}
