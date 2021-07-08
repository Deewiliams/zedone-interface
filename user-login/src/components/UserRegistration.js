import React,{useState} from 'react'
import Input from './Input'
import Buttonprops from './Buttonprops'

const initialState = {
    fullname:'',
    dateofBirth:'',
    nrcPassportNo:'',
    img:'',
    phonenumber:'',
    pin:'',
    address:'',
    sim:'',
}

const UserRegistration = () => {
    const [register, setRegister] = useState(initialState);

    function handleChange (event){
        setRegister({...register, [event.target.name]: event.target.value});
        
    }

    function handleClick () {
        console.log(register);
        fetch('http://localhost:5600/api/v1/registerClient',{
        method: 'POST',
        body: register,
        headers: {
            'Content-Type': 'appication/json',
        },
        }).then((response)=> {
            return response.json();
        }).catch((error) => {

        });
    }
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

        <form className="space-y-8" onSubmit={handleClick}>
        <ul className="grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-2 grid-rows-4 grid-flow-row gap-6">
          
               <Input placeholder="Full Name" 
                    type="text"
                    value={register.fullname}
                    onChange={handleChange}
                    name="fullname"
                />

                <Input placeholder="Date of Birth" 
                    type="date"
                    value={register.dateofBirth} 
                    onChange={handleChange}
                    name="dateofBirth"
                    
                />

                <Input placeholder="NRC/Passport No." 
                    type="text"
                    value={register.nrcPassportNo} 
                    onChange={handleChange}
                    name="nrcPassportNo"
                    
                />

                <Input placeholder="Photo" 
                    type="file"
                    value={register.img} 
                    onChange={handleChange}
                    name="img"
                />                      

                <Input placeholder="Phone Number" 
                    type="Number"
                    value={register.phonenumber} 
                    onChange={handleChange}
                    name="phonenumber"
                    
                /> 

                <Input placeholder="Pin" 
                    type="password"
                    value={register.pin} 
                    onChange={handleChange}
                    name="pin"
                    
                />        

                <Input placeholder="Address" 
                    type="text"
                    value={register.address} 
                    onChange={handleChange}
                    name="address"
                   
                /> 
                <Input placeholder="sim" 
                    type="text"
                    value={register.sim} 
                    onChange={handleChange}
                    name="sim"
                   
                /> 
                
        </ul>
       
      
        </form>
        <button className="p-2 bg-purple-600 mt-8 mb-8
            rounded-lg w-64 h-14 lg:gap-py-8 
            hover:bg-purple-400 
            hover:text-gray-100 
            text-2xl"
                   button_name= "Register"
                   role="submit"
                   onClick={handleClick}  
                > Register </button>
        </div>
            
    </div>
    )
}

export default UserRegistration
