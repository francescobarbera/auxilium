import { useCallback, useState } from "react";
import type { Entity } from "../../core/entities-catalogue";
import type { LLMInterface } from "../../core/llm-interface";
import {
	AssistantMessage,
	type Message,
	type SystemMessage,
	type UserMessage,
} from "../../core/message";

const getInitialContext = (entitiesDescriptors: string[]): SystemMessage => {
	return {
		content: `You are a helpful assistant.
      Always reply **only** with a JSON object. Do not include any extra text or explanation.
      Your first goal is to identify if the question is related to a specific entity.
      Here is a list of entities with: ${entitiesDescriptors.join("\n")}
      If the message is not about any of the previous entities, you can respond with structure like this:
      {
        type: "plain_text",
        content: string
      }`,
	};
};

export const useChat = (
	componentsCatalogueItems: Entity[],
	llm: LLMInterface,
) => {
	const [messages, setMessages] = useState<Array<Message>>([
		getInitialContext(componentsCatalogueItems.map((i) => i.descriptor)),
	]);
	const [isLoading, setIsLoading] = useState(false);
	const [error, setError] = useState<Error | null>(null);

	const sendMessage = useCallback(
		async (messageText: string) => {
			if (!messageText.trim()) return;

			const userMessage: UserMessage = {
				content: messageText,
				sender: "user",
				type: "plain_text",
			};
			setMessages((prev) => [...prev, userMessage]);

			setIsLoading(true);
			setError(null);

			try {
				const responseText = await llm.generateResponse([
					...messages,
					userMessage,
				]);

				setMessages((prev) => [
					...prev,
					{ ...JSON.parse(responseText), sender: "assistant" },
				]);
			} catch (err) {
				setError(
					err instanceof Error ? err : new Error("Failed to process message"),
				);
			} finally {
				setIsLoading(false);
			}
		},
		[llm, messages],
	);

	const clearChat = useCallback(() => {
		setMessages([]);
	}, []);

	return {
		messages,
		isLoading,
		error,
		sendMessage,
		clearChat,
		llm,
	};
};
