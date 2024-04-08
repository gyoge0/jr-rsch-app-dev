import { createContext } from "react";

import { Todo } from "./todo";

export const TodosContext = createContext<{
    todos: Todo[];
    setTodos: (todos: Todo[]) => void;
}>({
    todos: [],
    setTodos: () => {},
});

export const NavigationContext = createContext(null);
