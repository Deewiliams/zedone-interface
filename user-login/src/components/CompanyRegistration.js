import React,{useState, useEffect} from 'react'
import Input from '../components/Input'
import Buttonprops from '../components/Buttonprops'


const CompanyRegistration = () => {
    const [companyName,setCompanyName] = useState('');
    const [companyAddress,setCompanyAddress] = useState('');
    const [companyRepresentative,setCompanyRepresentative] = useState('');
    const [occupation,setOccupation] = useState('');
    const [email,setEmail] = useState('');
    const [password,setPassword] = useState('');
    const [re_password,setRe_Password] = useState('');
    const [submit,setSubmit] = useState(false);

    function handleSubmit(event) {
        event.preventDefault();
        setSubmit(true);
        console.log(submit);
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

            <form className="space-y-8">
            <ul className="grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-2 grid-rows-4 grid-flow-row gap-6">
              
                   <Input placeholder="Company Name" 
                        type="text"
                        value={companyName} onChange={event => setCompanyName(event.target.value)}
                    />

                    <Input placeholder="Company Address" 
                        type="text"
                        value={companyAddress} onChange={event => setCompanyAddress(event.target.value)}
                    />

                    <Input placeholder="Company Representative" 
                        type="text"
                        value={companyRepresentative} onChange={event => setCompanyRepresentative(event.target.value)}
                    />

                    <Input placeholder="Occupation" 
                        type="text"
                        value={occupation} onChange={event => setOccupation(event.target.value)}
                    />                      

                    <Input placeholder="zedone@example.com" 
                        type="text"
                        value={email} onChange={event => setEmail(event.target.value)}
                    /> 

                    <Input placeholder="Password" 
                        type="password"
                        value={password} onChange={event => setPassword(event.target.value)}
                    />        

                    <Input placeholder="Re-Enter Password" 
                        type="password"
                        value={re_password} onChange={event => setRe_Password(event.target.value)}
                    /> 
                    <Buttonprops 
                       button_name= "Register"
                       onClick={handleSubmit}
                    />
            </ul>
           
          
            </form>
            </div>
                
        </div>
    )
}

export default CompanyRegistration
