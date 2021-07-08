import React from 'react'

const Buttonprops = (props) => {
    return (
        <button className="bg-purple-500 text-gray-100 sm:text-2xl sm:py-2 sm:px-8 
        md:py-4 md:px-10 md:text-lg lg:py-4 
        lg:px-20 lg:text-xl hover:bg-purple-600 
        hover:text-white rounded-lg
        " 
        > {props.button_name}</button>
    )
}

export default Buttonprops
