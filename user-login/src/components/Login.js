import React from 'react'
import log from '../images/log.png'


const Login = () => {
    return (
        <div className="h-screen  bg-gradient-to-tr from-white to-purple-500 flex items-center justify-center">
            <div className="bg-white shodow-2xl p-4 w-2/2 rounded-lg">
                <img className="sm:h-72 p-4 lg:px-96" src={log} alt="login image" />
                 <form className="space-y-8 lg:flex lg:items-center lg:justify-end">
               <ul className="grid sm:grid-cols-1 md:grid-cols-1 lg:grid-cols-1 grid-rows-4 gap-6 lg:w-3/4 bordr">
               <input className="sm:h-12 lg:h-16 lg:w-2/3 md:h-14 rounded-lg border border-gray-500
                    focus:outline-none focus:ring-2 
                    focus:ring-blue-600  focus:border-transparent 
                    focus:bg-blue-100 sm:text-lg lg:text-2xl p-2 
                    placeholder-gray-400 ..." 
                    placeholder="zedone@example.com"
                    type="email"
                  />
                   <input className="sm:h-12 lg:h-16 lg:w-2/3 md:h-14 
                    rounded-lg  border border-gray-500
                    focus:outline-none focus:ring-2 
                    focus:ring-blue-600 focus:border-transparent 
                    focus:bg-blue-100 sm:text-lg lg:text-2xl p-2 
                    placeholder-gray-400 ..." 
                    placeholder="Password"
                    type="password"
                  />
               </ul>
           </form>
            </div>
          
        </div>
    )
}

export default Login
