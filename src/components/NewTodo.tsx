import React, { useContext, useRef } from "react";
import { TodosContext } from "../store/todos-context";

// interface Props {
//     onAddToDo: (text: string) => void;
// }

const NewTodo: React.FC = () => {
    const cxt = useContext(TodosContext);

    const todoRef = useRef<HTMLInputElement>(null);

    const submitHandler = (event: React.FormEvent) => {
        event.preventDefault();

        const enteredText = todoRef.current!.value;

        if (enteredText.trim().length !== 0) {
            cxt.addTodo(enteredText);
        }
    };

    return (
        <form onSubmit={submitHandler}>
            <label htmlFor='text'>Todo text</label>
            <input type='text' id='text' ref={todoRef} />
            <button>Add Todo</button>
        </form>
    );
};

export default NewTodo;
