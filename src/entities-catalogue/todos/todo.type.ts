export type Todo = {
	id: string;
	title: string;
	completed: boolean;
	onToggle: () => void;
};
