import React, { useState } from "react";
import Input from "../Input";
import Validation from "../../Validations/Validation";
import { useHistory } from "react-router";
import Navbar from "../Navbar";

const initialState = {
  companyName: "",
  companyAddress: "",
  companyRep: "",
  occupation: "",
  email: "",
  passwordComp: "",
};

const CompanyRegistration = () => {
  let history = useHistory();
  const [company, setCompany] = useState(initialState);
  const [errors, setErrors] = useState({});
  const [messageError, setMessageError] = useState({
    isError: false,
    message: null,
  });
  function handleSubmit () {
    history.push("/Login")
  }

  function handleChange (event) {
    setCompany({ ...company, [event.target.name]: event.target.value });
    //  console.log(company);
  }

  function handleClick () {
    setErrors(Validation(company));
    console.log(company);

    fetch("http://localhost:5000/api/v1/registerCompany", {
      method: "POST",
      body: JSON.stringify(company),
      headers: {
        "Content-Type": "application/json",
      },
    })
      .then((response) => {
        setMessageError({
          ...messageError,
          message: 'you have sucessfully registered as a company'
            // <div>
            //   'you have sucessfully registered as a company'
            //   <button onClick={handleSubmit} className="bg-blue-100 px-4  ml-4 text-sm hover:bg-red-500 hover:text-white">
            //     Click to login
            //   </button>
            // </div>
          // ),
        });
      })
      .catch((error) => {
        setMessageError({
          ...messageError,
          message: error.message,
        });
      });
  }

  return (
    <div className="bg-gradient-to-tr from-white to-purple-500 ">
      <Navbar />
      <div className="h-screen bg-gradient-to-tr from-white to-purple-500 flex items-center justify-center">
      <div className="bg-white shadow-2xl p-4 -mt-20 rounded-lg">
        <p style={{ color: messageError.isError ? "blue" : "green" }}>
        {messageError.message}
        </p>
        {
        messageError ? null : (<button onClick={handleSubmit} className="bg-blue-100 px-4  ml-4 text-sm hover:bg-red-500 hover:text-white">
            Click here    
        </button>) 
        }
        
        <h1
          className="text-lg px-4 font-bold mb-10 text-white
             md:font-bold md:text-3xl mx-1 
             uppercase font-sans
             bg-purple-500 h-10
             rounded-lg
             "
        >
          Company Registration Form
        </h1>
       
        <form className="space-y-8" onSubmit={handleClick}>
          <ul className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 grid-rows-4  gap-6 -mt-6">
            <Input
              placeholder="Company Name"
              type="text"
              value={company.companyName}
              onChange={handleChange}
              name="companyName"
            />
            {errors.companyName && (
              <p className="text-red-700 text-xs space-y-2 mr-28 lg:mt-6 lg:text-lg">
                {errors.companyName}
              </p>
            )}

            <Input
              placeholder="Company Address"
              type="text"
              value={company.companyAddress}
              onChange={handleChange}
              name="companyAddress"
            />
            {errors.companyAddress && (
              <p className="text-red-700 text-xs space-y-2 mr-28 lg:mt-6 lg:text-lg">
                {errors.companyAddress}
              </p>
            )}

            <Input
              placeholder="Company Representative"
              type="text"
              value={company.companyRep}
              onChange={handleChange}
              name="companyRep"
            />
            {errors.companyRep && (
              <p className="text-red-700 text-xs space-y-2 mr-28 lg:mt-6 lg:text-lg">
                {errors.companyRep}
              </p>
            )}

            <Input
              placeholder="Occupation"
              type="text"
              value={company.occupation}
              onChange={handleChange}
              name="occupation"
            />
            {errors.occupation && (
              <p className="text-red-700 text-xs space-y-2 mr-28 lg:mt-6 lg:text-lg">
                {errors.occupation}
              </p>
            )}

            <Input
              placeholder="zedone@example.com"
              type="email"
              value={company.email}
              onChange={handleChange}
              name="email"
            />
            {errors.email && (
              <p className="text-red-700 text-xs space-y-2 mr-28 lg:mt-6 lg:text-lg">
                {errors.email}
              </p>
            )}

            <Input
              placeholder="Password"
              type="password"
              value={company.passwordComp}
              onChange={handleChange}
              name="passwordComp"
            />
            {errors.passwordComp && (
              <p className="text-red-700 text-xs space-y-2 mr-28 lg:mt-6 lg:text-lg">
                {errors.passwordComp}
              </p>
            )}
          </ul>
        </form>
        <button
          className="bg-purple-500 
                text-gray-100 text-2xl lg:-w-40 mt-4 px-32 py-2
                 md:px-36 md:text-4xl md:-mt-20 lg:py-4 lg:w-2/3
                lg:px-20 lg:text-3xl hover:bg-purple-600 
                hover:text-white rounded-lg
                "
          onClick={handleClick}
        >
          Login
        </button>
      </div>
    </div>
    </div>
  );
};

export default CompanyRegistration;
