import "./chat.css";
import type { Entity } from "../../../core/entities-catalogue";
import type { Message } from "../../../core/message";
import { BlocksList } from "../blocks-list/blocks-list";
import { NewMessageInput } from "../new-message-input/new-message-input";

type ChatProps = {
	messages: Message[];
	isLoading: boolean;
	onSendMessage: (message: string) => Promise<void>;
	entitiesCatalogue: Entity[];
};

export const Chat: React.FC<ChatProps> = ({
	messages,
	isLoading,
	onSendMessage,
	entitiesCatalogue,
}) => (
	<div className="chat">
		<BlocksList blocks={messages} entitiesCatalogue={entitiesCatalogue} />
		<NewMessageInput
			onSendMessage={onSendMessage}
			isLoading={isLoading}
			placeholder={"What I can do for you?"}
		/>
	</div>
);
