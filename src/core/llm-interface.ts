import type { Message } from "./message";

export interface LLMInterface {
	generateResponse(messages: Message[]): Promise<string>;
}
