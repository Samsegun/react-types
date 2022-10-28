import React, { useContext } from "react";
import { TodosContext } from "../store/todos-context";
import Todo from "./models/todo";
import TodoItem from "./TodoItem";
// import styles from "../App.module.css"

interface Props {
    // items: Todo[];
    // removeToDoHandler: (event: React.MouseEvent<HTMLLIElement>) => void;
    children: React.ReactNode;
}

const Todos: React.FC<Props> = ({ children }) => {
    const cxt = useContext(TodosContext);

    return (
        <div>
            <ul>
                {cxt.items.map(item => (
                    <TodoItem key={item.id} text={item.text} />
                ))}
            </ul>
            {/* {children} */}
        </div>
    );
};

export default Todos;
