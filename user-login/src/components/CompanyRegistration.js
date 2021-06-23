import React from 'react'


const CompanyRegistration = () => {
    return (
        <div className="h-screen bg-gradient-to-tr from-white to-purple-500 company-img flex items-center justify-center">
            <div className="bg-gray-200 shadow-2xl p-4 w-2/3 rounded-lg">
            <h1 className="sm:text-lg font-bold mb-10 text-white
             md:font-bold md:text-3xl mx-1 
             uppercase font-sans
             bg-purple-500 h-16
             rounded-lg
             ">
            Company Registration Form</h1>

            <form className="space-y-8">
            <ul className="grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-2 grid-rows-4 grid-flow-row gap-6">
              
                <input className="sm:h-12 lg:h-16 md:h-14 rounded-lg 
                    focus:outline-none focus:ring-2 
                    focus:ring-blue-600 focus:border-transparent 
                    focus:bg-blue-100 sm:text-lg lg:text-2xl p-2 
                    placeholder-gray-400 ..." 
                    placeholder="Company Name"
                    type="text"
                  />

                <input className="sm:h-12 lg:h-16 md:h-14 rounded-lg 
                    focus:outline-none focus:ring-2 
                    focus:ring-blue-600 focus:border-transparent 
                    focus:bg-blue-100 sm:text-lg lg:text-2xl p-2 
                    placeholder-gray-400 ..."
                    placeholder="Company Address"
                    type="text"
                  />

                <input className="sm:h-12 lg:h-16 md:h-14 rounded-lg 
                    focus:outline-none focus:ring-2 focus:ring-blue-600 
                    focus:border-transparent focus:bg-blue-100 sm:text-lg
                    lg:text-2xl p-2  placeholder-gray-400 ..." 
                    placeholder="Company Representative"
                    type="text"
                 />
                <input className="sm:h-12 lg:h-16 md:h-14 rounded-lg
                    focus:outline-none focus:ring-2 focus:ring-blue-600 
                    focus:border-transparent focus:bg-blue-100 sm:text-lg 
                    lg:text-2xl p-2   placeholder-gray-400 ..." 
                    placeholder="Occupation"
                    type="text"
                 />

                <input className="sm:h-12 lg:h-16 md:h-14 rounded-lg 
                    focus:outline-none focus:ring-2 focus:ring-blue-600
                    focus:border-transparent focus:bg-blue-100 sm:text-lg 
                    lg:text-2xl p-2   placeholder-gray-400 ..."
                    placeholder="zedone@example.com"
                    type="email"
                  />
                <input className="sm:h-12 lg:h-16 md:h-14 rounded-lg
                    focus:outline-none focus:ring-2 focus:ring-blue-600 
                    focus:border-transparent focus:bg-blue-100 sm:text-lg 
                    lg:text-2xl p-2  placeholder-gray-400 ..."
                    type="password"
                    placeholder="Password"
                  />
                <input className="sm:h-12 lg:h-16 md:h-14 rounded-lg 
                    focus:outline-none focus:ring-2 focus:ring-blue-600 
                    focus:border-transparent focus:bg-blue-100 sm:text-lg
                    lg:text-2xl p-2  placeholder-gray-400 ..." 
                    type="password"
                    placeholder="Re-Enter Password"
                 />
            </ul>
            <button className="bg-purple-500 text-gray-100 sm:text-2xl sm:py-2 sm:px-8 
                md:py-4 md:px-10 md:text-lg lg:py-4 
                lg:px-20 lg:text-xl hover:bg-purple-600 
                hover:text-white rounded-lg
                ">
                Register Now
                </button>
            </form>
            </div>
                
        </div>
    )
}

export default CompanyRegistration
