import React from 'react'
import zedone from '../images/zedone_logo_web.png'
const CompanyLogged = () => {
    return (
        <div className="h-screen bg-gradient-to-tr from-white to-purple-500">
            <div className="flex flex-row items-center justify-between p-2 bg-purple-600 h-20 shadow-2xl"> 
            <div className="">
                <img className="w-24 " src={zedone}/>
            </div>
            <div>
                <h1 className="text-black-100 text-lg 
                bg-white px-4 rounded-md font-bold 
                hover:bg-gray-300
                ">
                Log-Out
                </h1>
            </div>
            </div>
            
        </div>
    )
}

export default CompanyLogged
