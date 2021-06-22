import React from 'react'

const CompanyRegistration = () => {
    return (
        <div className="h-screen flex items-center justify-center bg-blue-600 ">
            <div className="bg-white shadow-2xl p-16 w-2/3">
            <h1 className="text-3xl font-bold mb-10">Company Registration Form</h1>

            <form className="space-y-8">
            <div>
                <label className="block mb-2">Name</label>
                <input type="text" className="w-full border-4 boreder-gray-200 p-2 rounded-lg 
                outline-none focus:bg-blue-100" />
            </div>

            <div>
                <label>Name</label>
                <input type="text" />
            </div>

            <button className="block w-full bg-red-400 rounded-lg p-4">Register Now</button>
            </form>
            </div>
                
        </div>
    )
}

export default CompanyRegistration
