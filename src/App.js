import React from 'react'
import { TodoHeader } from './components/TodoHeader';
import { TodoSearch } from './components/TodoSearch';
import { TodoItem } from './components/TodoItem';
import { TodoList } from './components/TodoList';
import { TodoCounter } from './components/TodoCounter';
import { TodoProvider, TodoContext } from './contexts/TodoProvider'
import { ModalAddTodo } from './Modals/ModalAddTodo';
import { TodoSkeleton } from './components/TodoSkeleton';
import { AiFillLike } from 'react-icons/ai';
import { TodoToast } from './components/TodoToast';

function App() {
  return (
    <TodoProvider>
        <TodoContext.Consumer>
        {({error,
          loading,
          todosFiltered,
          updateCompletedTodo,
          deleteTodo,
          addTodo,
          editTodo,
          selectEditTodo,
          setSelectEditTodo,
          toastMessage
        }) => (
          <div className='max-w-md mx-auto'>
            <div className='flex flex-col justify-center items-center'>
              <TodoHeader />
              <TodoSearch />
                <TodoList>
                  {error && "Se presento un error, la página se recargará"}
                  {loading && <TodoSkeleton />}
                  {(!loading && todosFiltered.length === 0) && <div className='flex gap-2'>
                    No todo created, add one <AiFillLike size={'1.3em'}/>
                  </div>}
                  {todosFiltered.map((todo) => (
                    <TodoItem
                      key={todo.id}
                      todoId={todo.id}
                      todoName={todo.name}
                      todoCompleted={todo.completed}
                      updateCompletedTodo={() => updateCompletedTodo(todo.id)}
                      deleteTodo={() => deleteTodo(todo.id)}
                      setSelectEditTodo={setSelectEditTodo}
                    />
                  ))}
                </TodoList>
              <TodoCounter />
              <ModalAddTodo
                addTodo={addTodo}
                editTodo={editTodo}
                selectEditTodo={selectEditTodo}
                setSelectEditTodo={setSelectEditTodo}
              />
              {toastMessage && <TodoToast Messaje={toastMessage}/>}
            </div>
          </div>
        )}
      </TodoContext.Consumer>
    </TodoProvider>
  )
}

export default App