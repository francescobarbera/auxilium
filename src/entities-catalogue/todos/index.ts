import type { Entity } from "../../core/entities-catalogue";
import { Todos } from "./todos.component";

export const todosEntity: Entity = {
	name: "todos",
	component: Todos,
	descriptor: `
        This entity shape a list of todos. You can do that by looking for keywords like "todo", "task", "list", etc.
        Once you have identified that the quesiton is related to todos, you can generate a list of random tasks. Each one should have the following JSON format
        {
          type: "todos",
          content: {
            id: string,
            title: string,
            completed: boolean
          }
        }
    `,
};
