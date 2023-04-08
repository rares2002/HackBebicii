import { IsEmail, IsPhoneNumber, IsString } from 'class-validator';
import { Match } from 'src/utils/match.rule';

export class RegisterUserDto {
  @IsString()
  name: string;
  
  @IsEmail()
  email: string;

  @IsString()
  password: string;

  @IsString()
  // @IsPhoneNumber()
  telephone: string;

  
}
