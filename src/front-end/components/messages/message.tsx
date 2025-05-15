import { PText } from "@porsche-design-system/components-react";
import "./message.css";
import {
	type AssistantMessage,
	type UserMessage,
	isUserMessage,
} from "../../../core/message";

const HumanMessage = ({ message }: { message: string }) => (
	<PText size="small" className="message human">
		{message}
	</PText>
);

const BotMessage = ({ message }: { message: string }) => (
	<PText size="small" className="message bot">
		{message}
	</PText>
);

export const Message = (message: UserMessage | AssistantMessage) =>
	isUserMessage(message) ? (
		<HumanMessage message={message.content} />
	) : (
		<BotMessage message={message.content} />
	);
