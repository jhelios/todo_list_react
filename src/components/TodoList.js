import React from "react";

function TodoList(props){
    return (
        <section className='flex flex-col justify-center items-center'>
            {props.children}
        </section>
    )
}

export { TodoList }