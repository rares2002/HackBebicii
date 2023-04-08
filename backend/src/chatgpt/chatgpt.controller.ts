import { Controller, Post, Body } from '@nestjs/common';
import { ChatgptService } from './chatgpt.service';
import { ChatGPTDto } from './dto/chatgpt.dto';

@Controller('chatgpt')
export class ChatgptController {
  constructor(private readonly chatgptService: ChatgptService) {}

  @Post()
  chatgpt(@Body() ChatGPTDto: ChatGPTDto) {
    console.log(ChatGPTDto);
    return this.chatgptService.sendMessage(ChatGPTDto);
  }
}
