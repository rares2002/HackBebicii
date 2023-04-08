import { createParamDecorator, ExecutionContext } from '@nestjs/common';
import { User } from '@prisma/client';

export type UserJwtPayload = User;

export const UserGuard = createParamDecorator(
  (data: unknown, ctx: ExecutionContext): UserJwtPayload => {
    const request = ctx.switchToHttp().getRequest();
    return request.user as UserJwtPayload;
  },
);