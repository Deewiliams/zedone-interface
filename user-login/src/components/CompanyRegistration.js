import React from 'react'

const CompanyRegistration = () => {
    return (
        <div className="h-screen flex items-center justify-center bg-blue-600 ">
            <div className="bg-gray-200 shadow-2xl p-4 w-2/3 ">
            <h1 className="sm:text-lg font-bold mb-10 sm:text-blue-500 sm:text-xlg md:text-red-700 md:font-bold md:text-3xl mx-1 lg:text-yellow-300 uppercase font-sans">Company Registration Form</h1>

            <form className="space-y-8">
            <ul className="grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-2 grid-rows-4 grid-flow-row gap-6">
              
                <input className="sm:h-12 lg:h-16 md:h-14 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-600 focus:border-transparent focus:bg-blue-100 sm:text-lg lg:text-2xl  placeholder-gray-400 ..." placeholder="Company Name"/>
                <input className="sm:h-12 lg:h-16 md:h-14 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-600 focus:border-transparent focus:bg-blue-100 sm:text-lg lg:text-2xl  placeholder-gray-400 ..." placeholder="Company Address"/>
                <input className="sm:h-12 lg:h-16 md:h-14 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-600 focus:border-transparent focus:bg-blue-100 sm:text-lg lg:text-2xl  placeholder-gray-400 ..." placeholder="Company Representative"/>
                <input className="sm:h-12 lg:h-16 md:h-14 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-600 focus:border-transparent focus:bg-blue-100 sm:text-lg lg:text-2xl  placeholder-gray-400 ..." placeholder="Occupation"/>
                <input className="sm:h-12 lg:h-16 md:h-14 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-600 focus:border-transparent focus:bg-blue-100 sm:text-lg lg:text-2xl  placeholder-gray-400 ..." placeholder="Email"/>
                <input className="sm:h-12 lg:h-16 md:h-14 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-600 focus:border-transparent focus:bg-blue-100 sm:text-lg lg:text-2xl  placeholder-gray-400 ..." placeholder="PassWord"/>
                <input className="sm:h-12 lg:h-16 md:h-14 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-600 focus:border-transparent focus:bg-blue-100 sm:text-lg lg:text-2xl  placeholder-gray-400 ..." placeholder="Re-Enter PassWord"/>
            </ul>
            <button className="bg-red-700  md:py-4 md:px-10 md:text-lg lg:py-4  lg:px-20 lg:text-xl hover:bg-red-500 hover:text-white rounded-lg">Register Now</button>
            </form>
            </div>
                
        </div>
    )
}

export default CompanyRegistration
