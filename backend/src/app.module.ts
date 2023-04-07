import { Module } from '@nestjs/common';
import { AuthModule } from './auth/auth.module';
import { PrismaModule } from './prisma/prisma.module';
import { ChatgptModule } from './chatgpt/chatgpt.module';

@Module({
  imports: [PrismaModule, AuthModule, ChatgptModule],
  controllers: [],
  providers: [],
})
export class AppModule {}
