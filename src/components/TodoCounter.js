import React from "react";
import { TodoContext } from "../contexts/TodoProvider";

function TodoCounter(){
    const { completedTodos, totalTodos } = React.useContext(TodoContext)
    
    let messageCounter = `Completed ${completedTodos} of ${totalTodos} todos`

    if (!totalTodos){
        messageCounter = ''
    }

    return (
        <h3 className="text-center text-sm font-bold my-3">
            {messageCounter}
        </h3>
    )
}

export { TodoCounter }