import React, { useState } from "react";
import transaction from "../images/transaction.png";
import mobile from "../images/mobile.png";
import subscriptions from "../images/Subscriptions.png";
import product from "../images/product.png";
import zedone from "../images/zedone_logo_web.png";
import { Link } from "react-router-dom";
import HomeProps from "./HomeProps";
import HomeStateProps from "./HomeStateProps";

const Home = () => {
  const [clickRegister, setClickRegister] = useState(false);
  const [clickLogin, setClickLogin] = useState(false);
  return (
    // BUttons for Logging and Registration
    <div className="h-screen-full lg:h-screen bg-gradient-to-tr from-white to-purple-500">
      <div className="bg-purple-600 h-20 md:h-32 shadow-2lg">
        <div className="flex flex-row justify-between p-8">
          <div>
            <img className="w-28 md:w-60" src={zedone} alt="logo" />
          </div>
          {/* navbar section drop drown */}
          <div className="text-white ">
            <h1
              className="hover:text-black md:text-2xl cursor-pointer"
              onClick={() => setClickRegister(!clickRegister)}
            >
              Register As
            </h1>
            <h1
              className="hover:text-black md:text-2xl cursor-pointer"
              onClick={() => setClickLogin(!clickLogin)}
            >
              Login
            </h1>
          </div>
        </div>
      </div>
      {/* register section drop down */}
      {clickRegister ? (
        <HomeStateProps company="company" title="personal" />
      ) : null}
      {/* Login section drop down */}

      {clickLogin ? (
        <div className=" ml-60 pb-3 bg-white w-24 -mt-1 md:w-40 md:ml-auto ">
          <h1 className="hover:bg-purple-200 md:text-2xl">
            <Link to="/Login">Company</Link>
          </h1>
          <h1 className="hover:bg-purple-200 md:text-2xl">
            <Link to="/">Personal</Link>
          </h1>
        </div>
      ) : null}

      {/* ****************Landing Page Navbars******************** */}

      <div className="flex flex-row justify-end space-x-2 p-4 text-sm text-gray-50 md:text-2xl md:space-x-5 cursor-pointer">
        <h1 className="hover:text-blue-600">
          <Link to="/">Home</Link>
        </h1>
        <h1 className="hover:text-blue-600">About us</h1>
        <h1 className="hover:text-blue-600">Feedback</h1>
        <h1 className="hover:text-blue-600">Contact</h1>
      </div>
      <div>
        <h1 className="lg:text-white text-white font-bold text-sm -mt-2 md:text-2xl">
          We Offer The Following Services
        </h1>
      </div>
      <div></div>
      {/* **************Main Landing Page using Grid*************** */}

      <div>
        <ul className="grid gap-4 md:grid-cols-2 lg:grid-cols-4 p-4 ">
          <HomeProps 
            image={transaction} 
            title="Online Transaction"
           />

          <HomeProps 
            image={subscriptions}
            title="Subscriptions Payments" 
           />
          
          <HomeProps 
            image={mobile} 
            title="Mobile Payments" 
            />

          <HomeProps 
            image={product} 
            title="Product Payments"
             />

        </ul>
      </div>
    </div>
  );
};

export default Home;
