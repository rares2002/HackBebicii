import { HttpException, Injectable } from '@nestjs/common';
import { ChatGPTDto } from './dto/chatgpt.dto';
import { OpenAIApi, Configuration } from 'openai';
@Injectable()
export class ChatgptService {
    private openai: OpenAIApi;
    constructor() {
        this.openai = new OpenAIApi(new Configuration({
            apiKey: process.env.OPENAI_API_KEY
        }))
    }

    async sendMessage(ChatGPTDto: ChatGPTDto) {
        // return "Hello World";
        try {
            const response = await this.openai.createChatCompletion({
                model: 'gpt-3.5-turbo',
                messages: [{
                    role: 'system',
                    content: "You are a finance trainer for students who are in need of advice for how to handle their finances and budgets better. Provide useful information fot the following questions. If the questions is not about finances, respond with 'I don't know' and don't say anything else."
                },
                {
                    role: 'user',
                    content: "How do I save money?"
                },
                {
                    role: 'assistant',
                    content: "You can save money by setting aside a certain amount of money each month and putting it in a savings account. You can also save money by not buying things you don't need."
                },
                {
                    role: 'user',
                    content: ChatGPTDto.text
                    }],
                max_tokens: 100,
                temperature: 0.9
            })
            return response.data;
        }
        catch (err) {
            console.log(err);
            return new Error(err)
        }
    }
}
