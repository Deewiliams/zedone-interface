import React from 'react'
import transaction from '../images/transaction.png'
import mobile from '../images/mobile.png'
import subscriptions from '../images/Subscriptions.png'
import product from '../images/product.png'

import { Link } from 'react-router-dom'


const Home = () => {
    return (
        // BUttons for Logging and Registration
        <div className="h-screen bg-gradient-to-tr from-white to-purple-500">
            <div className="bg-purple-600 shadow-2xl h-28">
                <h1 className="lg:text-6xl flex items-center lg:p-4 text-gray-100 text-2xl sm:text-3xl p-8 md:text-6xl md:p-4 sm:p-6">ZedOne</h1>
                <div className="sm:flex sm:flex-row flex items-center justify-end sm:justify-end md:flex md:flex-row md:justify-end lg:flex lg:flex-row lg:items-center lg:justify-end mr-6 space-x-6  -mt-16">
                    <h1 className="py-2 h-10 w-20 sm:px-3 p-2 sm:py-2 
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
                    <h1 className="py-2 h-10 w-16 sm:px-3 sm:py-2 md:px-3 md:py-2
                text-base bg-white lg:px-3 lg:py-2 rounded-lg hover:bg-red-400 
                hover:text-white cursor-pointer ">
                        <Link to="/users">
                            Users-register</Link>
                    </h1>
                </div>
            </div>
        {/* ****************Landing Page Navbars******************** */}
            <div className="flex flex-row justify-end space-x-2 p-4 text-sm text-gray-50 md:text-2xl md:space-x-5 cursor-pointer">
                <h1 className="hover:text-blue-600"><Link to="/home">Home</Link></h1>
                <h1 className="hover:text-blue-600">About us</h1>
                <h1 className="hover:text-blue-600">Feedback</h1>
                <h1 className="hover:text-blue-600">Contact</h1>
            </div>
            <div>
                <h1 className="font-bold text-sm -mt-2">We Offer The Following Services</h1>
            </div>
            <div>
            </div>
            {/* **************Main Landing Page*************** */}
            <div className="space-x-8 p-2">
                <ul className="grid grid-cols-4 gap-2 grid-flows-cols ">
                    <li className="bg-white col-span-2  shadow-2xl rounded-lg" ><div className="h-40">
                        <img className="mt-3" src={transaction} alt="transaction image"/>
                        <h1 className="text-sm mt-6">Online transactions</h1>
                        </div></li>
                    <li className="bg-white col-span-2 shadow-2xl rounded-lg" ><div className="h-40"> 
                         <img className="mt-3" src={subscriptions} alt="transaction image"/>
                        <h1 className="text-sm mt-2">Subscriptions</h1></div></li>
                    <li className="bg-white col-span-2 shadow-2xl rounded-lg" ><div className="h-40">
                    <img className="mt-3" src={mobile} alt="transaction image"/>
                        <h1 className="text-sm mt-2">Mobile Payments</h1>
                        </div></li>
                    <li className="bg-white col-span-2 shadow-2xl rounded-lg" ><div className="h-40">
                    <img className="mt-3" src={product} alt="transaction image"/>
                        <h1 className="text-sm mt-2">Product Payments</h1>
                        </div></li>
                    
                    
                </ul>
            </div>



        </div>

    )
}

export default Home
