import React,{useState} from 'react'
import Loginprops from '../components/Loginprops'
import LoginValidation from './LoginValidation'
import log from '../images/log.png'

const initialState = {
    email: '',
    passwordComp: '',

}


const Login = () => {

    const [login, SetLogin] = useState(initialState);
    const [errors, setErrors] = useState({});
    const [loginMessage, SetLoginMessage] = useState({
        isError: false,
        message: null,
    });

    function handleChange (event){
        SetLogin({...login, [event.target.name]: event.target.value});
        // console.log(login)
    }
    function handleClick() {
        // calling the state variable that updates the error state for validation
        setErrors(LoginValidation(login));
        console.log(login); 
   fetch('http://localhost:5000/api/v1/loginCompany', {
       method: 'POST',
       body:JSON.stringify(login),
       headers: {
           'Content-Type': 'application/json',
       },
   }) .then((res) =>
   SetLoginMessage({
     ...loginMessage,
     message: 'You are successfully logged in',
   }),
 )
 .catch((err) =>
 SetLoginMessage({
     ...loginMessage,
     isError: true,
     message: err.message,
   }),
 )
}
    

    return (
        <div className="h-screen  bg-gradient-to-tr from-white to-purple-500 flex items-center justify-center">
            <div className="bg-white shodow-2xl p-4 md:w-3/4  w-3/4 rounded-lg">
                <img className="sm:h-72 p-4 lg:px-96" src={log} alt="login-image" />
                <p style={{ color: loginMessage ? 'red' : 'green' }}>
                     {loginMessage.message}
      </p>
                 <form className="space-y-8 lg:flex lg:items-center lg:justify-end">
                    <ul className="grid sm:grid-cols-1 md:grid-cols-1 lg:grid-cols-1 grid-rows-4 gap-6 lg:w-3/4 bordr">

                    <Loginprops
                    placeholder="zedone@example.com"
                    type="email"
                    value={login.email}
                    onChange={handleChange}
                    name="email"
                    
                  />
                  {errors.email && <p className="text-red-700 mr-28 lg:mt-6 lg:text-2xl">{errors.email} </p>}

                   <Loginprops 
                    placeholder="Password"
                    type="password"
                    value={login.passwordComp}
                    onChange={handleChange}
                    name="passwordComp"
                  />
                  {errors.passwordComp && <p className="text-red-700 mr-28 lg:mt-6 lg:text-2xl">{errors.passwordComp} </p>}
            </ul>        
           </form>

                 <div className="-mt-28 ">
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
                <h1>Forgotten your Password? <span className="text-red-600 font-bold">Click here</span></h1>

                <button className="bg-green-500 text-gray-100 sm:text-2xl sm:py- sm:px-8 
                md:py-4 md:px-10 md:text-lg lg:py-4 lg:w-2/3
                lg:px-20 lg:text-3xl hover:bg-green-600 
                hover:text-white rounded-lg
                ">
                Create New Business Account
                </button>
                 </div>
              
      
            </div>
          
        </div>
    )
}

export default Login
