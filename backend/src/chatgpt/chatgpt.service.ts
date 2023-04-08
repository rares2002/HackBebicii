import { HttpException, Injectable } from '@nestjs/common';
import { OpenAIApi, Configuration } from 'openai';
@Injectable()
export class ChatgptService {
    private openai: OpenAIApi;
    constructor() {
        this.openai = new OpenAIApi(new Configuration({
            apiKey: process.env.OPENAI_API_KEY
        }))
    }

    async sendMessage(text: string) {
        // return "Hello World";
        try {
            console.log(this.openai)
            const response = await this.openai.createChatCompletion({
                model: 'gpt-3.5-turbo',
                messages: [{
                    role: 'system',
                    content: "You are a finance trainer for students who are in need of advice for how to handle their finances and budgets better. Provide useful information fot the following questions"
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
                    content: text
                }],
                // temperature: 0.9
            })
            return response.data;
        }
        catch (err) {
            console.log(err);
            return new Error(err)
        }
    }
}
