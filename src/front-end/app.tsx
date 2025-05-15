import { PorscheDesignSystemProvider } from "@porsche-design-system/components-react";
import { entitiesCatalogue } from "../entities-catalogue";
import { OpenAIImplementation } from "../llm-implementations/openai";
import { Chat } from "./components/chat/chat";
import { Message } from "./components/messages/message";
import { useChat } from "./hooks/useChat";

const VITE_OPENAI_API_KEY = import.meta.env.VITE_OPENAI_API_KEY;

export const App = () => {
	const { messages, isLoading, sendMessage } = useChat(
		entitiesCatalogue,
		new OpenAIImplementation(VITE_OPENAI_API_KEY),
	);
	return (
		<PorscheDesignSystemProvider>
			<Chat
				messages={messages}
				isLoading={isLoading}
				onSendMessage={sendMessage}
				entitiesCatalogue={[
					...entitiesCatalogue,
					{
						name: "plain_text",
						component: Message,
						descriptor: "",
					},
				]}
			/>
		</PorscheDesignSystemProvider>
	);
};
