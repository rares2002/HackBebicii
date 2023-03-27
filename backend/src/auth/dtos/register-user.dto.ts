import { IsEmail, IsPhoneNumber, IsString } from 'class-validator';
import { Match } from 'src/utils/match.rule';

export class RegisterUserDto {
  @IsEmail()
  email: string;

  @IsString()
  password: string;

  @IsString()
  name: string;

  @IsString()
  @IsPhoneNumber()
  phone: string;

  @IsString()
  @Match(RegisterUserDto, (o) => o.password)
  password_confirmation: string;
}
