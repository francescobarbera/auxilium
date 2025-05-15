import type { Entity } from "../../../core/entities-catalogue";
import {
	type Message,
	isAssistantMessage,
	isSystemMessage,
	isUserMessage,
} from "../../../core/message";
import "./blocks-list.css";

type BlocksListProps = {
	blocks: Message[];
	entitiesCatalogue: Entity[];
};

export const BlocksList = ({ blocks, entitiesCatalogue }: BlocksListProps) => (
	<div className="blocks-list">
		{blocks.map((block: Message) => {
			if (isUserMessage(block) || isAssistantMessage(block)) {
				const entityFromCatalogue = entitiesCatalogue.find(
					(item) => item.name === block.type,
				);
				if (!entityFromCatalogue) {
					throw new Error(`Unknown block type: ${block.type}`);
				}

				const Component = entityFromCatalogue.component;

				return <Component {...block} />;
			}

			return null;

			// if (block.type === "plain_text") {
			//     return <MessageComponent message={block} />;
			// } else if (block.type === "todos") {
			//     return <CardsList CardComponent={Todo} data={block.content} />;
			// }
		})}
	</div>
);
