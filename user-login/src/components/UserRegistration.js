import React,{useState} from 'react'
import Input from './Input'
import Buttonprops from './ButtonProps'


const UserRegistration = () => {
        const [fullName, setFullName] = useState("");  
        const [dateOfBirth, setDateOfBirth] = useState("");
        const [nrcPassportNo, setNrcPassportNo] = useState("");
        const [photo, setPhoto] = useState("");
        const [phoneNumber, setPhoneNumber] = useState(""); 
        const [pin, setPin] = useState("");
        const [address, SetAddress] = useState("");
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
                    value={fullName} onChange={event => setFullName(event.target.value)}
                />

                <Input placeholder="Date of Birth" 
                    type="date"
                    value={dateOfBirth} onChange={event => setDateOfBirth(event.target.value)}
                    
                />

                <Input placeholder="NRC/Passport No." 
                    type="text"
                    value={nrcPassportNo} onChange={event => setNrcPassportNo(event.target.value)}
                    
                />

                <Input placeholder="Photo" 
                    type="file"
                    value={photo} onChange={event => setPhoto(event.target.value)}
                />                      

                <Input placeholder="Phone Number" 
                    type="Number"
                    value={phoneNumber} onChange={event => setPhoneNumber(event.target.value)}
                    
                /> 

                <Input placeholder="Pin" 
                    type="password"
                    value={pin} onChange={event => SVGTextPositioningElement(event.target.value)}
                    
                />        

                <Input placeholder="Address" 
                    type="text"
                    value={address} onChange={event => SetAddress(event.target.value)}
                   
                /> 
                <Buttonprops 
                   button_name= "Register"
                   
                   
                />
        </ul>
       
      
        </form>
        {fullName}
        {address}
        {pin}
        {phoneNumber}
        {photo}
        {nrcPassportNo}
        {dateOfBirth}
        
        </div>
            
    </div>
    )
}

export default UserRegistration
