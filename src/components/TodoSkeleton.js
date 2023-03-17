import React from 'react'

function TodoSkeleton() {
  return (
    <div role="status" class="animate-pulse flex flex-col gap-7 my-5">
        <div className='flex'>
            <div class="h-3 bg-gray-200 rounded-xl dark:bg-gray-700 w-52" />
            <div class="h-3 bg-gray-200 rounded-xl dark:bg-gray-700 w-7 ml-10" />
            <div class="h-3 bg-gray-200 rounded-xl dark:bg-gray-700 w-7 ml-2" />
        </div>
        <div className='flex'>
            <div class="h-3 bg-gray-200 rounded-xl dark:bg-gray-700 w-52" />
            <div class="h-3 bg-gray-200 rounded-xl dark:bg-gray-700 w-7 ml-10" />
            <div class="h-3 bg-gray-200 rounded-xl dark:bg-gray-700 w-7 ml-2" />
        </div>
        <div className='flex'>
            <div class="h-3 bg-gray-200 rounded-xl dark:bg-gray-700 w-52" />
            <div class="h-3 bg-gray-200 rounded-xl dark:bg-gray-700 w-7 ml-10" />
            <div class="h-3 bg-gray-200 rounded-xl dark:bg-gray-700 w-7 ml-2" />
        </div>
    </div>
  )
}

export { TodoSkeleton }