import React from 'react'

const LoginValidation = (login) => {
    let errors={};

   if(!login.email){
       errors.email="email required."
   } else if(!/\S+@\S+\.\S+/.test(login.email)){
       errors.email="Email is invalid"
   }

   if(!login.passwordComp){
       errors.passwordComp="password is required."
   } else if(login.passwordComp.length < 6){
       errors.passwordComp="password must be more than six characters"
   }
   return errors;
};
  

export default LoginValidation
