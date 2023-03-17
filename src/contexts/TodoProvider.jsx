import React from "react";
import { SetLocalStorage } from "../hooks/SetLocalStorage";

const TodoContext = React.createContext()

function TodoProvider(props){
    const {item: todos, saveItem: setTodos, loading, error} = SetLocalStorage('TODOS_V1', [])

    const completedTodos = todos.filter(todo => todo.completed).length
    const totalTodos = todos.length

    const [seachValue, setSearchValue] = React.useState('')

    let todosFiltered = []

    if(seachValue.length === 0){
        todosFiltered = todos
        } else {
        todosFiltered = todos.filter((todo) => {
            const todoLower = todo.name.toLowerCase()
            const seachValueLower = seachValue.toLowerCase()
            return todoLower.includes(seachValueLower)
        })
    }

    const updateCompletedTodo = (todoId) => {
        let newTodos = todos.map(todo => {
            if (todoId === todo.id) todo.completed = !todo.completed
            return todo
        })

        const listCompletedTodos = newTodos.filter(todo => todo.completed)
        const listUnCompletedTodos = newTodos.filter(todo => !todo.completed)

        const sortCompletedTodos = listCompletedTodos.sort((t1, t2) => t1.id > t2.id ? 1 : t2.id > t1.id ? -1 : 0)
        const sortUnCompletedTodos = listUnCompletedTodos.sort((t1, t2) => t1.id > t2.id ? 1 : t2.id > t1.id ? -1 : 0) 

        newTodos = sortUnCompletedTodos.concat(sortCompletedTodos)
        setTodos(newTodos)
    }

    const deleteTodo = (todoId) => {
        // eslint-disable-next-line
        let newTodos = todos.filter(todo => {
            if (todoId !== todo.id) return todo
        })
        setTodos(newTodos)
    }

    const addTodo = (name) => {
        // eslint-disable-next-line
        let newTodos = [... todos]
        let lastId  = -1
        if (newTodos.length > 0) lastId  = newTodos[newTodos.length - 1].id

        newTodos.push({
            id: lastId + 1,
            name,
            completed: false
        })
        setTodos(newTodos)
    }

    const editTodo = (todoId, name) => {
        // eslint-disable-next-line
        let newTodos = todos.map(todo => {
            if (todo.id === todoId){
                todo.name = name
            }
            return todo
        })
        setTodos(newTodos)
    }

    const [selectEditTodo, setSelectEditTodo] = React.useState({id: -1, name: ''})

    return (
        <TodoContext.Provider value={{
                seachValue,
                setSearchValue,
                error,
                loading,
                todosFiltered,
                updateCompletedTodo,
                deleteTodo,
                completedTodos,
                totalTodos,
                addTodo,
                editTodo,
                selectEditTodo,
                setSelectEditTodo
            }
        }>
            {props.children}
        </TodoContext.Provider>
    )
}

export { TodoContext, TodoProvider }