import React, { useState } from "react";
import HomeStateProps from "./HomeDropLinks";
import zedone from "../images/zedone_logo_web.png";
import { Link } from "react-router-dom";

const HeaderNav = () => {
  const [clickRegister, setClickRegister] = useState(false);
  const [clickLogin, setClickLogin] = useState(false);
  return (
    // Buttons for Logging and Registration
    <div className="bg-purple-600">
      <div className="bg-purple-600 h-28 md:h-32 shadow-2lg">
        <div className="flex flex-row justify-between p-8">
          <div>
          <Link to="/home">
            <img className="w-28 md:w-60" src={zedone} alt="logo" />
           </Link>
          </div>
          {/* navbar section drop drown */}
          <div className="text-white ">
            <h1
              className="hover:text-black text-sm md:text-2xl cursor-pointer"
              onClick={() => setClickRegister(!clickRegister)}
            >
              Register As
            </h1>
            <h1
              className="hover:text-black text-sm md:text-2xl cursor-pointer"
              onClick={() => setClickLogin(!clickLogin)}
            >
              Login
            </h1>
          </div>
          {/* imported the Navbar in here */}
          {/* <Navbar /> */}
        </div>
      </div>
      {/* register section drop down */}

      {clickRegister ? <HomeStateProps company="company" personal="company" /> : null}
      {/* Login section drop down */}

      {clickLogin ? (
        <HomeStateProps company="personal" personal="personal" />
      ) : null}
    </div>
  );
};

export default HeaderNav;
