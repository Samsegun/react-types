import React, { useContext } from "react";
import { TodosContext } from "../store/todos-context";

interface Props {
    text: string;
    // removeToDoHandler: (event: React.MouseEvent<HTMLLIElement>) => void;
}

const TodoItem: React.FC<Props> = ({ text }) => {
    const cxt = useContext(TodosContext);

    return <li onClick={cxt.removeTodo}>{text}</li>;
};

export default TodoItem;
