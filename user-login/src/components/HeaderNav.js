import React, { useState } from "react";
import HomeStateProps from "./HomeStateProps";
import zedone from "../images/zedone_logo_web.png";
import Navbar from "./Navbar";

const HeaderNav = () => {
  const [clickRegister, setClickRegister] = useState(false);
  const [clickLogin, setClickLogin] = useState(false);
  return (
    // Buttons for Logging and Registration
    <div>
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
      <Navbar />
        
      </div>
      {/* register section drop down */}

      {clickRegister ? (
        <HomeStateProps company="company" title="personal" />
      ) : null}
      {/* Login section drop down */}

      {clickLogin ? (
        <HomeStateProps company="company" title="personal" />
      ) : null}

      </div>
  );
};

export default HeaderNav;
