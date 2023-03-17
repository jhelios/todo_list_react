import React from 'react'
import ReactDOM from 'react-dom'
import { BsJournalPlus } from 'react-icons/bs'

function ModalAddTodo({ addTodo,  editTodo, selectEditTodo, setSelectEditTodo}) {
    const onChangeTextTodo = (event) => {
        setSelectEditTodo({id: selectEditTodo.id, name: event.target.value })
    }

    const addNewTodo = (event) =>{
        event.preventDefault()
        if (selectEditTodo.id >= 0 && selectEditTodo.name !== ''){
            editTodo(selectEditTodo.id, selectEditTodo.name)
            setSelectEditTodo({id: -1, name:''})
            const closeModalTodo = document.getElementById('closeModalTodo')
            closeModalTodo.dispatchEvent(new MouseEvent("click"));
        }
        else if (selectEditTodo.name !== ''){
            addTodo(selectEditTodo.name)
            setSelectEditTodo({id: selectEditTodo.id, name: '' })
        }
    }

    const onCloseModal = () =>{
        setSelectEditTodo({id: -1, name:''})
    }

    return ReactDOM.createPortal(
        <div className='flex justify-center'>            
            {/* <!-- Modal toggle --> */}
            <button
                data-modal-target="todoModal"
                data-modal-toggle="todoModal"
                id='btnAddTodo'
                class="flex gap-2 shadow border rounded-lg p-3 my-2 text-md text-blue-700 focus:outline-none bg-white hover:bg-blue-700 hover:text-white focus:z-10 focus:ring-4 focus:ring-gray-200 dark:focus:ring-gray-700 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:text-white dark:hover:bg-gray-700"
            >
                <BsJournalPlus className='inline' size='1.3em'/> Add Todo
            </button>

            {/* <!-- Main modal --> */}
            <div id="todoModal" data-modal-backdrop="static" tabindex="-1" aria-hidden="true" class="fixed top-0 left-0 right-0 z-50 hidden w-full p-4 overflow-x-hidden overflow-y-auto md:inset-0 h-[calc(100%-1rem)] md:h-full">
                <div class="relative w-full h-full max-w-md md:h-auto">
                    {/* <!-- Modal content --> */}
                    <div class="relative bg-white rounded-lg shadow dark:bg-gray-700">
                        <button onClick={onCloseModal} type="button" class="absolute top-3 right-2.5 text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm p-1.5 ml-auto inline-flex items-center dark:hover:bg-gray-800 dark:hover:text-white" data-modal-hide="todoModal">
                            <svg aria-hidden="true" class="w-5 h-5" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clip-rule="evenodd"></path></svg>
                            <span class="sr-only">Close modal</span>
                        </button>
                        <form onSubmit={addNewTodo} class="flex flex-col px-6 py-6 lg:px-8 items-center gap-4">
                            <h3 class="mb-4 text-2xl font-bold text-gray-900 dark:text-white">
                                {selectEditTodo.id >= 0 ? 'Editing Todo' : 'New Todo'}
                            </h3>
                            <div className='item-center mb-7 text-center'>
                                <label htmlFor="todoText" className='text-gray-500'>Escribe la todo que deseas agregar!</label>
                                <textarea
                                    id="todoText"
                                    rows="3"
                                    value={selectEditTodo.name}
                                    onChange={onChangeTextTodo}
                                    className='w-full mt-2 bg-gray-200 py-2 px-3 rounded-lg shadow text-center border-0'
                                />
                            </div>
                            <div className='flex w-full gap-4 justify-center'>
                                <button onClick={onCloseModal} id='closeModalTodo' type="button" class="w-1/3 text-red-700 hover:text-white border border-red-700 hover:bg-red-800 focus:ring-4 focus:outline-none focus:ring-red-300 rounded-lg text-sm px-5 py-2 text-center dark:border-red-500 dark:text-red-500 dark:hover:text-white dark:hover:bg-red-600 dark:focus:ring-red-900" data-modal-hide="todoModal">
                                    Close
                                </button>
                                <button type="submit" class={`w-1/3 text-white ${selectEditTodo.id >= 0 ? 'bg-yellow-400 hover:bg-orange-800' : 'bg-blue-700 hover:bg-blue-800'} font-bold focus:ring-4 focus:outline-none focus:ring-blue-300 rounded-lg text-sm px-5 py-2 text-center`}>
                                    {selectEditTodo.id >= 0 ? 'Edit Todo' : 'Create Todo'}
                                </button>
                            </div>                            
                        </form>
                    </div>
                </div>
            </div>
        </div>,
        document.getElementById('modal')
    )
}

export { ModalAddTodo }