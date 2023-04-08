import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service';
import * as bcrypt from 'bcrypt';
import * as dotenv from 'dotenv';
import ShortUniqueId from 'short-unique-id';
import { JwtService } from '@nestjs/jwt';
import { LoginUserDto } from './dtos/login-user.dto';
import { RegisterUserDto } from './dtos/register-user.dto';
import { DB_CONFLICT } from 'src/utils/errors';

dotenv.config();

@Injectable()
export class AuthService {
  private uid: ShortUniqueId;

  constructor(private prisma: PrismaService, private jwtService: JwtService) {}

  async login({ email, password }: LoginUserDto) {
    const user = await this.prisma.user.findUnique({ where: { email } });

    if (!user || !bcrypt.compareSync(password, user.password))
      throw new HttpException(
        'Wrong email or password',
        HttpStatus.BAD_REQUEST,
      );

    delete user.password;
    return { token: this.jwtService.sign({ data: user }) };
  }

  async register(registerUserDto: RegisterUserDto) {
    // delete registerUserDto.password_confirmation; // already confirmed by Dto
    registerUserDto.password = await bcrypt.hash(registerUserDto.password, 10);
    console.log(registerUserDto)
    try {
      const user = await this.prisma.user.create({
        data: { ...registerUserDto },
      });
      delete user.password;
      return { token: this.jwtService.sign({ data: user }) };
    } catch (e) {
      if (e.code === DB_CONFLICT) {
        throw new HttpException('Email is already used.', HttpStatus.CONFLICT);
      } else {
        console.error(e);
        throw new HttpException(
          'Internal server error',
          HttpStatus.INTERNAL_SERVER_ERROR,
        );
      }
    }
  }
}
