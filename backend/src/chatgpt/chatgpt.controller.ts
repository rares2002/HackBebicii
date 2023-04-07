import { Controller, Get, Param } from '@nestjs/common';
import { ChatgptService } from './chatgpt.service';

@Controller('chatgpt')
export class ChatgptController {
  constructor(private readonly chatgptService: ChatgptService) { }
  
  @Get(':text')
  chatgpt(
    @Param('text') text: string
  ) {
    return this.chatgptService.sendMessage(text);
  }
}
