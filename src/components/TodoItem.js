import React from "react";
import { MdEdit, MdDelete } from 'react-icons/md'

function TodoItem({ todoId, todoName, todoCompleted, updateCompletedTodo, deleteTodo, setSelectEditTodo}){
    let cardClass = "w-96 bg-white border-gray-200 rounded-lg shadow mb-2 hover:bg-gray-100"
    let nameTextClass = "ml-3 text-md"
    let editButtonClass = 'editButton pl-3 ml-auto hover:text-orange-500'
    let deleteButtonClass = 'deleteButton mx-3 hover:text-red-600'

    if (todoCompleted){
        cardClass = "w-96 bg-gray-300 border-gray-200 rounded-lg shadow mb-2"
        nameTextClass = "ml-3 text-md text-gray-500"
        editButtonClass = 'ml-auto hidden'
        deleteButtonClass = 'ml-auto deleteButton mr-3 hover:text-red-600'
    }

    const onEdit = () =>{
        setSelectEditTodo({id: todoId, name: todoName})
        const btnAddTodo = document.getElementById('btnAddTodo')
        btnAddTodo.dispatchEvent(new MouseEvent("click"));
    }

    return (
        <div className={cardClass}>
            <div className="flex items-center py-3 pl-4">
                <input 
                    id={todoId}
                    defaultChecked={todoCompleted}
                    type="checkbox"
                    className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-700 dark:focus:ring-offset-gray-700 focus:ring-2 dark:bg-gray-600 dark:border-gray-500"
                    onClick={updateCompletedTodo}
                />
                <label for={todoId} className={nameTextClass}>
                    {todoName}
                </label>        
                <button className={editButtonClass} onClick={onEdit}>
                    <MdEdit size='1.3em'/>
                </button>
                <button className={deleteButtonClass} onClick={deleteTodo}>
                    <MdDelete size='1.3em'/>
                </button>
            </div>
        </div>
    )
}

export { TodoItem }