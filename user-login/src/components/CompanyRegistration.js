import React from 'react'
import Input from '../components/Input'
import Buttonprops from '../components/Buttonprops'


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
              
                   <Input placeholder="Company Name" 
                    type="text"
                    />

                    <Input placeholder="Company Address" 
                     type="text"

                    />
                    <Input placeholder="Company Representative" 
                        type="text"
                    />

                    <Input placeholder="Occupation" 
                      type="text"
                    />                      

                    <Input placeholder="zedone@example.com" 
                        type="text"
                    /> 

                    <Input placeholder="Password" 
                        type="password"
                    />        

                    <Input placeholder="Re-Enter Password" 
                        type="password"
                    /> 
                    <Buttonprops 
                       button_name= "Register"
                    />


               
                   {/* <button className="bg-purple-500 text-gray-100 sm:text-2xl sm:py-2 sm:px-8 
                md:py-4 md:px-10 md:text-lg lg:py-4 
                lg:px-20 lg:text-xl hover:bg-purple-600 
                hover:text-white rounded-lg
                ">
                Register Now
                </button> */}
            </ul>
          
            </form>
            </div>
                
        </div>
    )
}

export default CompanyRegistration
