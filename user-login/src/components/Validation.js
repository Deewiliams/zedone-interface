import React from 'react'

const Validation = (company) => {
     let errors={};

     if(!company.companyName){
         errors.companyName="company name is required."
     }
     if(!company.companyAddress){
        errors.companyAddress="company Address is required."
    }
    if(!company.companyRep){
        errors.companyRep="company respesentative  is required."
    }
    if(!company.occupation){
        errors.occupation="occupation is required."
    }
    if(!company.email){
        errors.email="email required."
    } else if(!/\S+@\S+\.S+/.test(company.email)){
        errors.email="Email is invalid"
    }

    if(!company.passwordComp){
        errors.passwordComp="password is required."
    } else if(company.passwordComp.length < 6){
        errors.passwordComp="password must be more than six characters"
    }
    return errors;
};
   

export default Validation
