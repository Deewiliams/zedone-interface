import React, { useState } from "react";
import { FaFacebookF, FaTwitter } from "react-icons/fa";
import zedone from "../../images/zedone_logo_web.png";
import barmenu from "../../images/menu.svg";

const CompanyLogged = () => {
  const [showMenu, setShowMenu] = useState(false);
  return (
    // header section
    <div className="h-screen bg-gradient-to-tr from-white to-purple-500">
      <div className="flex flex-row items-center justify-between md:flex-row-reverse px-6 bg-purple-600 h-20 lg:h-28 shadow-2xl">
        <div>
          <img
            className="p-4 w-16 md:hidden lg:hidden hover:bg-purple-100 cursor-pointer overflow-hidden"
            onClick={() => setShowMenu(!showMenu)}
            src={barmenu} alt="menu-logo"
          />
        </div>

        <div className="">
          <img className="w-24 md:w-40 lg:w-60" src={zedone} alt="zedone-logo" />
        </div>
        <div className="hidden">
          <h1
            className="text-black-100 text-lg 
                bg-white px-4 rounded-lg font-bold 
                hover:bg-gray-300 lg:py-2 lg:shadow-2xl
                md:text-2xl lg:text-3xl cursor-pointer
                "
          >
            Log-Out
          </h1>
        </div>
      </div>

      {/* menu button when click displays the card below */}

      <div className="md:hidden lg:hidden">
        {showMenu ? (
          <div className="h-screen -mt-20 bg-white w-60 md:hidden lg:hidden">
            <div className="bg-purple-400 h-28">Company Name</div>

            <div>
              <div>
                <h1>Settings</h1>
                <h1>Help</h1>
              </div>
            </div>

            {/* social media icons */}
            <div className="mt-96 space-x-4  text-red-500  ">
              <FaFacebookF className="mr-10" />
              <h1 className="-mt-5 hover:text-gray-500 cursor-pointer">
                Like us on Facebook
              </h1>
              <FaTwitter className="mr-10" />
              <h1 className="-mt-5 hover:text-gray-500 cursor-pointer">
                Follow us on Twitter
              </h1>
              <FaFacebookF className="mr-10" />
              <h1 className="-mt-5 hover:text-gray-500 cursor-pointer ">
                Give us Feedback
              </h1>
            </div>

            {/* logging out button */}
            <div className="p-2 mt-4">
              <h1
                className="text-black-100 text-lg 
                 bg-blue-100  py-2  rounded-lg  
                hover:bg-blue-300 l
                  cursor-pointer
                   " >
                Log-Out
              </h1>
            </div>
          </div>
        ) : null}

        <div className="bg-gray-300  ">
            <div>
              <h1>hello</h1>
              <h1>hello</h1>
              <h1>hello</h1>
              <h1>hello</h1>
            </div>
        </div>




      </div>
    </div>
  );
};

export default CompanyLogged;
