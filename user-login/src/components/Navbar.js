import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <div className="">
      <div className="flex flex-row justify-end space-x-2 p-4 text-sm -mt-8 md:mt-3 text-gray-50 md:text-2xl md:space-x-5 cursor-pointer">
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
    </div>
  );
};

export default Navbar;
