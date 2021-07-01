import React, { useState } from 'react'
import zedone from '../images/zedone_logo_web.png'
import barmenu from '../images/menu.svg'


const CompanyLogged = () => {
    const [showMenu, setShowMenu] = useState(true)
    return (
        <div className="h-screen bg-gradient-to-tr from-white to-purple-500">
            <div className="flex flex-row items-center justify-between p-2 bg-purple-600 h-20 lg:h-28 shadow-2xl">
                <div>
                    <img className="p-4 w-16 hover:bg-purple-100 cursor-pointer overflow-hidden" onClick={() => setShowMenu(!showMenu)} src={barmenu} />
                </div>

                <div className="">
                    <img className="w-24 md:w-40 lg:w-60" src={zedone} />
                </div>
                {/* <div>
                <h1 className="text-black-100 text-lg 
                bg-white px-4 rounded-lg font-bold 
                hover:bg-gray-300 lg:py-2 lg:shadow-2xl
                md:text-2xl lg:text-3xl cursor-pointer
                ">
                Log-Out
                </h1>
            </div> */}
            </div>

            {/* menu button when click displays the card below */}
            {
                showMenu ? <div className="h-5/6 bg-white w-60">
                                <div className="bg-purple-400 h-28">hello</div>

                                {/* social media icons */}
                            <div className="mt-72"> 
                                <h1>facebook</h1>
                                <h1>instagram</h1>
                                <h1>twitter</h1>
                            </div>

                            {/* logging out button */}
                                <div className="p-2 mt-8">
                                <h1 className="text-black-100 text-lg 
                                bg-blue-100  py-2  rounded-lg  
                                hover:bg-gray-300 l
                               cursor-pointer
                                ">
                                Log-Out
                                </h1>
                                </div>
                                </div> 
                             : null
                                }


        </div>
    )
}

export default CompanyLogged
