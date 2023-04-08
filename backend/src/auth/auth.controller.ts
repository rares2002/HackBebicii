import { Body, Controller, Param, Post, Get } from '@nestjs/common';
// import { Role } from '@prisma/client';
import { UserGuard } from './guards/user.guard';
import { AuthService } from './auth.service';
import { Auth } from './decorators/auth.decorator';
import { LoginUserDto } from './dtos/login-user.dto';
import { RegisterUserDto } from './dtos/register-user.dto';

@Controller('auth')
export class AuthController {
  constructor(private authService: AuthService) {}

  @Post('register')
  register(@Body() registerUserDto: RegisterUserDto) {
    console.log(registerUserDto)
    return this.authService.register(registerUserDto);
  }

  @Post('login')
  login(@Body() loginUserDto: LoginUserDto) {
    return this.authService.login(loginUserDto);
  }

  @Get('profile')
  @Auth()
  getProfile(@UserGuard() user: any) {
    return this.authService.getProfile(user);
  }
}
