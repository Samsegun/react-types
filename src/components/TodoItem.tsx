import React from "react";

interface Props {
    text: string
}


const TodoItem: React.FC<Props> = ({text}) => {
    return ( 
        <li>{text}</li>
     );
}
 
export default TodoItem;
