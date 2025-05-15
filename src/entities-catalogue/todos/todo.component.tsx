import { PCheckbox, PText } from "@porsche-design-system/components-react";
import type { Todo as TodoEntity } from "./todo.type";

import "./todo.css";

export type Props = TodoEntity & {
	onToggle: () => void;
};

export const Todo = ({ id, title, completed, onToggle }: Props) => {
	return (
		<div className="todo">
			<PCheckbox id={`todo-${id}`} checked={completed} onChange={onToggle} />
			<PText
				style={{
					textDecoration: completed ? "line-through" : "none",
					color: completed
						? "var(--p-color-grey-500)"
						: "var(--p-color-grey-900)",
				}}
			>
				{title}
			</PText>
		</div>
	);
};
