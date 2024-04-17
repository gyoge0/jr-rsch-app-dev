import { createContext } from "react";

export interface Todo {
    title: string;
    content: string;
    id: number;
}

/** Get a new unique ID */
export const randomId = () => new Date().getTime();

type TodosContextType = {
    todos: Todo[];
    setTodos: (todos: Todo[]) => void;
};

export const TodosContext = createContext<TodosContextType>({
    todos: [],
    setTodos: () => {},
});
