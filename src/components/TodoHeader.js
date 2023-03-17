import React from "react";
import '../assets/css/TodoHeader.css'
import profile from '../assets/img/photo.jpg'

function TodoHeader(){
    return (
        <div className="cardTopHeader w-full max-w-sm bg-white border border-gray-200 shadow">
            <div className="flex flex-col items-center pb-5">
                <img className="w-24 h-24 mb-3 rounded-full shadow-lg" src={profile} alt="Profile"/>
                <h5 className="mb-1 text-xl font-medium text-gray-900 dark:text-white">Jhon Vela</h5>
                <span className="text-sm text-gray-500 dark:text-gray-400">Fullstack Developer <br/> Cybersecurity Expert</span>
            </div>
        </div>
    )
}

export { TodoHeader }