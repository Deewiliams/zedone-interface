import React from 'react'
const LogCard = () => {
    return (
        <div className="items-center bg-gradient-to-tr from-white to-purple-400 min-h-screen bg-gray-100 py-6 flex justify-center sm:py-12 grid-cols-2">
            <div className="flex mx-auto text-center relative sm:max-w-xl sm:mx-auto max-w-md py-24 px-8 bg-gray-200 shadow-lg rounded-lg my-40 text-3xl font-semibold
            ">
              <h1 className="text-gray-500">Company Login</h1>
            </div>
            <div className="flex mx-auto text-center relative sm:max-w-xl sm:mx-auto max-w-md py-24 px-8 bg-gray-200 shadow-lg rounded-lg my-10 text-3xl font-semibold 
            ">
                <h2 className="text-gray-500">Individual Login</h2>
            </div>
        </div>
    )
}
export default LogCard
