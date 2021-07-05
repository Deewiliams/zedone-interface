import React from 'react'

const Input = (props) => {
    return (
        <input className="h-12 lg:h-16 md:h-14 rounded-lg 
        focus:outline-none focus:ring-2 
        focus:ring-blue-600 focus:border-transparent 
        focus:bg-blue-100  border border-gray-500 sm:text-lg lg:text-2xl p-2 
        placeholder-gray-400 ..."
            {...props}
        />
    )
}

export default Input
