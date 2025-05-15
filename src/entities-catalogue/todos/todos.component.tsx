import type { Todo as TodoEntity } from "./todo.type";
import "./todo.css";
import { CardsList } from "../../front-end/components/cards-list/cards-list";
import { Todo } from "./todo.component";

export type Props = {
	content: (TodoEntity & {
		onToggle: () => void;
	})[];
};

export const Todos = ({ content }: Props) => {
	return <CardsList CardComponent={Todo} data={content} />;
};
