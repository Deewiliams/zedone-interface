import React from 'react'
import {Link} from 'react-router-dom'


const Home = () => {
    return (
        <div className="h-screen bg-gradient-to-tr from-white to-purple-500">
            <div className="bg-purple-600 shadow-2xl h-28">
            <h1 className="lg:text-6xl flex items-center lg:p-4 text-gray-100 text-2xl sm:text-3xl p-8 md:text-6xl md:p-4 sm:p-6">ZedOne</h1>
            <div className="sm:flex sm:flex-row flex items-center justify-end sm:justify-end md:flex md:flex-row md:justify-end lg:flex lg:flex-row lg:items-center lg:justify-end mr-6 space-x-6  -mt-16">
            <h1 className="py-2 h-10 w-20 sm:px-3 p-2 sm:px-3 sm:py-2 
                md:px-3 md:py-2 text-base bg-white lg:px-3 lg:py-2 rounded-lg 
                hover:bg-red-400 hover:text-white cursor-pointer ">
                <Link to="/CompanyRegistration">
                 Register
                </Link>
                </h1>
            <h1 className="py-2 h-10 w-16 sm:px-3 sm:py-2 md:px-3 md:py-2
                text-base bg-white lg:px-3 lg:py-2 rounded-lg hover:bg-red-400 
                hover:text-white cursor-pointer ">
                <Link to="/Login">
                 Login</Link>
                </h1>
            </div> 
            </div>
            
            <div className="flex flex-row justify-end space-x-2 p-4 text-sm text-gray-50 md:text-2xl md:space-x-5 cursor-pointer">
            <h1 className="hover:text-blue-600 ">Home</h1>
            <h1 className="hover:text-blue-600">About us</h1>
            <h1 className="hover:text-blue-600">Feedback</h1>
            <h1 className="hover:text-blue-600">Contact</h1>
            </div>

            <div>
                
            </div>

        </div>

    )
}

export default Home
