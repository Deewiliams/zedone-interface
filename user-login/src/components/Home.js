import React from 'react'
import transaction from '../images/transaction.png'
import mobile from '../images/mobile.png'
import subscriptions from '../images/Subscriptions.png'
import product from '../images/product.png'
import zedone from '../images/zedone_logo_web.png'

import { Link } from 'react-router-dom'


const Home = () => {
    return (
        // BUttons for Logging and Registration
        <div className="h-screen bg-gradient-to-tr from-white to-purple-500">
            <div className="bg-purple-600 shadow-2xl h-28">
                <h1 className="lg:text-6xl flex items-center lg:p-6 text-gray-100 text-2xl sm:text-3xl p-8 md:text-6xl md:p-4 sm:p-6"><img className="w-52" src={zedone} /></h1>
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
                <h1 className="lg:text-white md:text-red-600 font-bold text-sm -mt-2 md:text-2xl">We Offer The Following Services</h1>
            </div>
            <div>
            </div>
            {/* **************Main Landing Page*************** */}
        

            <div className="p-8 ">
                <ul className="grid gap-y-8 grid-cols-1 md:grid-cols-2 md:gap-x-4 md:gap-y-4 lg:grid lg:grid-cols-4 lg:gap-x-2">
                    <li className="bg-white rounded-lg shadow-lg"><div className="h-60 lg:h-96">
                        <img className="mt-2 md:mt-2 lg:mb-24 lg:mt-2 lg:grid lg:justify-center" src={transaction} alt="transaction" />
                        <h1 className="lg:text-2xl lg:font-bold">Online Transactions</h1></div>
                        </li>

                        <li className="bg-white rounded-lg shadow-lg"><div className="h-60 lg:h-96">
                        <img className="mt-2 md:mt-2 lg:mb-8 lg:mt-2 lg:grid lg:justify-center" src={mobile} alt="transaction" />
                        <h1 className="lg:text-2xl lg:font-bold">Mobile Payments</h1></div>
                        </li>

                        <li className="bg-white rounded-lg shadow-lg"><div className="h-60 lg:h-96">
                        <img className="mt-2 md:mt-2 lg:mb-24 lg:mt-2 lg:grid lg:justify-center" src={subscriptions} alt="transaction" />
                        <h1 className="lg:text-2xl lg:-mt-8 lg:font-bold">Subscriptions Payments</h1></div>
                        </li>

                        <li className="bg-white rounded-lg shadow-lg"><div className="h-60 lg:h-96">
                        <img className="mt-2 md:mt-2 lg:mb-8 lg:mt-2 lg:grid lg:justify-center" src={product} alt="transaction" />
                        <h1 className="lg:text-2xl lg:-mt-1 lg:font-bold">Product Payments</h1></div>
                        
                        
                        </li>
                        {/* <li className="bg-white rounded-lg shadow-lg"><div className="md:h-24 lg:h-96">
                        <img className="lg:mb-14 lg:mt-2 lg:grid lg:justify-center" src={subscriptions} alt="transaction" />
                        <h1 className="lg:text-2xl lg:font-bold">Subscriptions Payments</h1></div>
                        
                        </li> */}
                        {/* <li className="bg-white rounded-lg shadow-lg"><div className="md:h-24 lg:h-96">
                        <img className="lg:mb-6 lg:mt-2 lg:grid lg:justify-center" src={product} alt="transaction" />
                        <h1 className="lg:text-2xl lg:font-bold">Product Payments</h1></div>
                        </li> */}
                </ul>
            </div>
          
           



        </div>

    )
}

export default Home
