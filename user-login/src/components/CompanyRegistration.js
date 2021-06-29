import React,{useState, useEffect} from 'react'
import Input from '../components/Input'
import Buttonprops from '../components/Buttonprops'

const initialState = {
    companyName: '',
    companyAddress: '',
    companyRep: '',
    occupation: '',
    email: '',
    passwordComp: '',
    // reEnterPasswordComp: '',


}


const CompanyRegistration = () => {
     const [company, setCompany] = useState(initialState);
     
     function handleChange (event) {
         setCompany({...company, [event.target.name]: event.target.value});
        //  console.log(company);
     }

     function handleClick() {
         console.log(company); 
    fetch('http://localhost:5000/api/v1/registerCompany', {
        method: 'POST',
        body:JSON.stringify(company),
        headers: {
            'Content-Type': 'application/json',
        },
    }).then( (response) => {
       
        return response.json();
    }).catch( (error) => {
      
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
            Company Registration Form</h1>

            <form className="space-y-8" onSubmit={handleClick}>
            <ul className="grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-2 grid-rows-4 grid-flow-row gap-6">
              
                   <Input placeholder="Company Name" 
                        type="text"
                        value={company.companyName} 
                        onChange={handleChange}
                        name="companyName"
                    />
                   

                    <Input placeholder="Company Address" 
                        type="text"
                        value={company.companyAddress} 
                        onChange={handleChange}
                        name="companyAddress"
                    />

                    <Input placeholder="Company Representative" 
                        type="text"
                        value={company.companyRep} 
                        onChange={handleChange}
                        name="companyRep"
                    />

                    <Input placeholder="Occupation" 
                        type="text"
                        value={company.occupation} 
                        onChange={handleChange}
                        name="occupation"
                    />                      

                    <Input placeholder="zedone@example.com" 
                        type="email"
                        value={company.email} 
                        onChange={handleChange}
                        name="email"
                    /> 

                     <Input placeholder="Password" 
                        type="password"
                        value={company.passwordComp} 
                        onChange={handleChange}
                        name="passwordComp"
                    />     
                    

                    <Input placeholder="Re-Enter Password" 
                        type="password"
                        value={company.reEnterPasswordComp} 
                        onChange={handleChange}
                        name="reEnterPasswordComp"
                    />    
            </ul>
            
          
            </form>
            <button className="bg-purple-500 
                text-gray-100 sm:text-2xl lg:-w-40 sm:py- sm:px-8 
                d:py-4 md:px-10 md:text-lg lg:py-4 lg:w-2/3
                lg:px-20 lg:text-3xl hover:bg-purple-600 
                hover:text-white rounded-lg
                "
                role="submit"
                onClick={handleClick}
                >
                Login
                </button> 
            </div>
                
        </div>
    )
}

export default CompanyRegistration
