import { IsString } from 'class-validator';
export class ChatGPTDto{
    @IsString()
    text: string;
}