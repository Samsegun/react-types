import React, { createContext, useState } from "react";
import Todo from "../components/models/todo";

export const TodosContext = createContext<{
    items: Todo[];
    addTodo: (text: string) => void;
    removeTodo: (event: React.MouseEvent<HTMLLIElement>) => void;
}>({
    items: [],
    addTodo: () => {},
    removeTodo: () => {},
});

const TodosContextProvider: React.FC<{ children: React.ReactNode }> = props => {
    const [todos, setTodos] = useState<Todo[]>([]);

    const addToDoHandler = (text: string) => {
        const newTodo = new Todo(text);

        setTodos(prev => prev.concat(newTodo));
    };

    const removeToDoHandler = (event: React.MouseEvent<HTMLLIElement>) => {
        const findText = event.currentTarget.textContent;

        setTodos(todos.filter(todo => todo.text !== findText));
    };

    const contextValue = {
        items: todos,
        addTodo: addToDoHandler,
        removeTodo: removeToDoHandler,
    };

    return (
        <TodosContext.Provider value={contextValue}>
            {props.children}
        </TodosContext.Provider>
    );
};

export default TodosContextProvider;
