import React from "react";
import Todo from "./models/todo"
import TodoItem from "./TodoItem";
// import styles from "../App.module.css"

interface Props {
    items: Todo[]
    children: React.ReactNode
}


const Todos: React.FC<Props> = ({items, children}) => {
    return ( 
        <div>
        <ul>
            {items.map(item => <TodoItem key={item.id} text={item.text}/>)}
        </ul>
            {children}

        </div>
     );
}
 
export default Todos;