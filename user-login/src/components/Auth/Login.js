import React, { useState } from "react";
import Loginprops from "../Login";
import logMe from "../../images/login.svg";
import { useHistory } from "react-router-dom";
import LoginValidation from "../../Validations/LoginValidation";

const initialState = {
  email: "",
  passwordComp: "",
};

const Login = () => {
  let history = useHistory();
  const [login, SetLogin] = useState(initialState);
  const [errors, setErrors] = useState({});

  function handleChange (event) {
    SetLogin({ ...login, [event.target.name]: event.target.value });
    // console.log(login)
  }
  function handleClick () {
    setErrors(LoginValidation(login));
    // history.push("/company-login");
  }
  function handleSubmit () {
    history.push("/CompanyRegistration");
  }

  return (
    <div className="h-screen bg-gradient-to-tr from-white to-purple-500 flex items-center justify-center">
      <div className="bg-white  shodow-2xl p-4 mb-10 md:w-2/4 mt-24 rounded-lg">
        <img
          className="h-52 p-4 lg:ml-96 image  "
          src={logMe}
          alt="login-log"
        />

        <form className="space-y-8 lg:flex lg:items-center lg:justify-end">
          <ul className="grid sm:grid-cols-1 md:grid-cols-1 lg:grid-cols-1 grid-rows-4 gap-6 lg:w-3/4 bordr">
            <Loginprops
              placeholder="zedone@example.com"
              type="email"
              value={login.email}
              onChange={handleChange}
              name="email"
            />
            {errors.email && (
              <p className="text-red-700 mr-28 lg:mt-6 lg:text-2xl">
                {errors.email}
              </p>
            )}

            <Loginprops
              placeholder="Password"
              type="password"
              value={login.passwordComp}
              onChange={handleChange}
              name="passwordComp"
            />
            {errors.passwordComp && (
              <p className="text-red-700 mr-28 lg:mt-6 lg:text-2xl">
                {errors.passwordComp}
              </p>
            )}
          </ul>
        </form>

        <div className="-mt-28 lg:-mt-32 ">
          <button
            className="bg-purple-500 
                text-gray-100 text-2xl lg:-w-40 py-2 px-32 
                 md:-w-2/3 md:text-lg lg:py-4 lg:w-1/2
                lg:px-20 lg:text-3xl lg:-mt-32 hover:bg-purple-600 
                hover:text-white rounded-lg
                "
            onClick={handleClick}
          >
            Login
          </button>
          <h1>
            Forgotten your Password?{" "}
            <span className="text-red-600 -mt-4 font-bold">Click here</span>
          </h1>

          <button
            className="bg-green-500 text-gray-100 text-lg font-bold py-2 px-10 mt-4 
                md:py-4 md:px-10 md:text-lg lg:py-4 lg:w-1/2
                lg:px-20  hover:bg-green-600 
                hover:text-white rounded-lg
                "
            type="submit"
            onClick={handleSubmit}
          >
            Create New Business Account
          </button>
        </div>
      </div>
    </div>
  );
};

export default Login;
