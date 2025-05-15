import OpenAI from "openai";
import type { LLMInterface } from "../core/llm-interface";
import { type Message, isSystemMessage, isUserMessage } from "../core/message";

export class OpenAIImplementation implements LLMInterface {
	private openai: OpenAI;

	constructor(apiKey: string) {
		this.openai = new OpenAI({
			apiKey: apiKey,
			dangerouslyAllowBrowser: true,
		});
	}

	async generateResponse(messages: Message[]): Promise<string> {
		try {
			const completion = await this.openai.chat.completions.create({
				messages: messages.map((message, index) => ({
					role: isSystemMessage(message)
						? "system"
						: isUserMessage(message)
							? "user"
							: "assistant",
					content: message.content,
				})),
				model: "ft:gpt-3.5-turbo-0125:personal:cars:BUgu219D",
			});

			return completion.choices[0]?.message?.content || "No response generated";
		} catch (error) {
			console.error("Error generating response:", error);
			throw new Error("Failed to generate response from OpenAI");
		}
	}
}
