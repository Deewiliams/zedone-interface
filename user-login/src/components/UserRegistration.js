import React from 'react'
import Input from './Input'
import Buttonprops from './Buttonprops'


const UserRegistration = () => {
    return (
        <div className="h-screen bg-gradient-to-tr from-white to-purple-500 flex items-center justify-center">
        <div className="bg-gray-200 shadow-2xl p-4 w-2/3 rounded-lg">
        <h1 className="sm:text-lg font-bold mb-10 text-white
         md:font-bold md:text-3xl mx-1 
         uppercase font-sans
         bg-purple-500 h-16
         rounded-lg
         ">
        User Registration Form</h1>

        <form className="space-y-8">
        <ul className="grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-2 grid-rows-4 grid-flow-row gap-6">
          
               <Input placeholder="Full Name" 
                    type="text"
                    
                />

                <Input placeholder="Date of Birth" 
                    type="date"
                    
                />

                <Input placeholder="NRC/Passport No." 
                    type="number"
                    
                />

                <Input placeholder="Photo" 
                    type="file"
                    
                />                      

                <Input placeholder="Phone Number" 
                    type="Number"
                    
                /> 

                <Input placeholder="Pin" 
                    type="password"
                    
                />        

                <Input placeholder="Address" 
                    type="text"
                   
                /> 
                <Buttonprops 
                   button_name= "Register"
                   
                />
        </ul>
       
      
        </form>
        </div>
            
    </div>
    )
}

export default UserRegistration
