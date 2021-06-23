import React from 'react'
import {Link} from 'react-router-dom'


const Home = () => {
    return (
        <div className="h-screen bg-gradient-to-tr from-white to-purple-500">
            <div className="bg-purple-600 shadow-2xl h-28">
            <h1 className="lg:text-6xl flex lg:p-4 text-gray-100 sm:text-4xl p-4 md:text-6xl md:p-4 sm:p-6">ZedOne</h1>
            <div className="sm:flex sm:flex-row sm:justify-end md:flex md:flex-row md:justify-end lg:flex lg:flex-row lg:items-center lg:justify-end mr-6 space-x-6 -mt-14">
            <h1 className="xs:px-2 sm:px-6 sm:py-2 md:px-4 md:py-2 text-xl bg-white lg:px-6 lg:py-2 rounded-lg hover:bg-red-400 hover:text-white cursor-pointer "><Link to="/CompanyRegistration">Register</Link></h1>
            <h1 className="sm:px-6 sm:py-2 md:px-4 md:py-2 text-xl bg-white lg:px-6 lg:py-2 rounded-lg hover:bg-red-400 hover:text-white cursor-pointer "> <Link to="/Login">Login</Link></h1>
            </div>
            </div>
            
            <div>
            <Link to="/home">Home</Link>
            <Link to="/CompanyRegistration">Registere</Link>
            <Link to="/Login">Login</Link>
            </div>
        </div>

    )
}

export default Home
