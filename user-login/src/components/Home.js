import React,{useState} from 'react'
import transaction from '../images/transaction.png'
import mobile from '../images/mobile.png'
import subscriptions from '../images/Subscriptions.png'
import product from '../images/product.png'
import zedone from '../images/zedone_logo_web.png'
import { Link } from 'react-router-dom'


const Home = () => {
    const [clickRegister,setClickRegister] = useState(false);
    const [clickLogin,setClickLogin] = useState(false);
    return (
        // BUttons for Logging and Registration
        <div className="h-screen-full lg:h-screen bg-gradient-to-tr from-white to-purple-500">
       <div className="bg-purple-600 h-20 md:h-32 shadow-2xl">
           <div className="flex flex-row justify-between p-8">
           <div>
            <img className="w-28 md:w-60" src={zedone} alt="logo" />
           </div>
           <div className="text-white ">
               <h1 className="hover:text-black md:text-2xl cursor-pointer" onClick={() => setClickRegister(!clickRegister)}>Register here</h1>
               <h1 className="hover:text-black md:text-2xl cursor-pointer" onClick={() => setClickLogin(!clickLogin)}>Login</h1>
           </div>
           </div>
       </div>
       {/* register section drop down */}
                {
                    clickRegister?  <div className=" ml-60 pb-3 bg-white w-24 -mt-10 md:w-40 md:ml-auto ">
                    <h1 className="hover:bg-purple-200 md:text-2xl" ><Link to="/CompanyRegistration">Company</Link></h1>
                    <h1 className="hover:bg-purple-200 md:text-2xl"><Link to="/">Personal</Link></h1>
                </div> : null
                }
        {/* Login section drop down */}

        {
                clickLogin?  <div className=" ml-60 pb-3 bg-white w-24 -mt-10 md:w-40 md:ml-auto ">
                    <h1 className="hover:bg-purple-200 md:text-2xl" ><Link to="/Login">Company</Link></h1>
                    <h1 className="hover:bg-purple-200 md:text-2xl"><Link to="/">Personal</Link></h1>
                </div> : null
                }
      
        {/* ****************Landing Page Navbars******************** */}
        
            <div className="flex flex-row justify-end space-x-2 p-4 text-sm text-gray-50 md:text-2xl md:space-x-5 cursor-pointer">
                <h1 className="hover:text-blue-600"><Link to="/home">Home</Link></h1>
                <h1 className="hover:text-blue-600">About us</h1>
                <h1 className="hover:text-blue-600">Feedback</h1>
                <h1 className="hover:text-blue-600">Contact</h1>
            </div>
            <div>
                <h1 className="lg:text-white text-white font-bold text-sm -mt-2 md:text-2xl">We Offer The Following Services</h1>
            </div>
            <div>
            </div>
            {/* **************Main Landing Page*************** */}
        
                <div>
                    <ul className="grid gap-4 md:grid-cols-2 lg:grid-cols-4 p-4">
                        <li className="bg-white  rounded-lg">
                            <img className="p-2" src={transaction} />
                            <div className="mt-16"><h1 className="text-2xl">Online Transactions</h1>
                            <button className="bg-purple-300 px-4 py-2 mb-4 
                            hover:bg-purple-500 hover:text-white cursor-pointer rounded-lg
                            ">
                            More Information
                            </button>
                            </div></li>

                            <li className="bg-white  rounded-lg">
                            <img className="p-2" src={mobile} />
                            <div><h1 className="text-2xl">Mobile Payments</h1>
                            <button className="bg-purple-300 px-4 py-2 mb-4 
                            hover:bg-purple-500 hover:text-white cursor-pointer rounded-lg
                            ">
                            More Information
                            </button>
                            </div></li>

                            <li className="bg-white  rounded-lg">
                            <img className="p-2" src={subscriptions} />
                            <div className="mt-6"><h1 className="text-2xl">Subscriptions Payments</h1>
                            <button className="bg-purple-300 px-4 py-2 mb-4 
                            hover:bg-purple-500 hover:text-white cursor-pointer rounded-lg
                            ">
                            More Information
                            </button>
                            </div></li>

                            <li className="bg-white  rounded-lg">
                            <img className="p-2" src={product} />
                            <div><h1 className="text-2xl">Product Payments</h1>
                            <button className="bg-purple-300 px-4 py-2 mb-4 
                            hover:bg-purple-500 hover:text-white cursor-pointer rounded-lg
                            ">
                            More Information
                            </button>
                            </div></li>
                        
                        
                        
                    </ul>
                </div>
 </div>

    )
}

export default Home
