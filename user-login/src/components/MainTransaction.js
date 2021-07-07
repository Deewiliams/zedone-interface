import React from "react";
import PropTypes from "prop-types";
import Navbar from "./Navbar";

const MainTransaction = (props) => {
  return (
    <div className="h-screen bg-gradient-to-tr from-white to-purple-500">
      <Navbar />
      <div className="grid grid-col-1 gap-2 p-4 -mt-16 lg:p-12 md:grid-cols-2">
        <h1 className="bg-white mt-20 rounded-lg">
          <div className="">
            <img className="mt-4 m-auto" src={props.image} alt="transaction" />
            <p className="mb-4 text-2xl font-bold lg:text-4xl">
              {props.title}
            </p>
          </div>
        </h1>
        <h1 className="bg-white mt-8 md:mt-20 rounded-lg">
          <div className="">
            <h1 className="mb-4 text-lg font-bold mt-4 md:text-4xl lg:text-4xl">
              {props.secondTitle}
            </h1>
            <p className="p-4 text-left tracking-wide md:text-2xl">
              {props.paragraph}
            </p>
          </div>
        </h1>
      </div>
    </div>
  );
};

MainTransaction.propTypes = {
  image: PropTypes.node.isRequired,
  title: PropTypes.string.isRequired,
  secondTitle: PropTypes.string.isRequired,
  paragraph: PropTypes.string.isRequired,

}
export default MainTransaction;
