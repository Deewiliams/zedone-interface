import React from "react";
import PropsType from "prop-types";

const MainTransaction = (props) => {
  return (
    <div className="h-screen bg-gradient-to-tr from-white to-purple-500">
      <div className="grid grid-col-1 gap-8 p-4 lg:p-12 md:grid-cols-2">
        <h1 className="bg-white mt-20 rounded-lg">
          <div className="">
            <img className="mt-4" src={props.image} alt="transaction image" />
            <p className="mb-4 text-2xl font-bold lg:text-4xl">
              {props.title}
              {/* Online Transaction */}
            </p>
          </div>
        </h1>
        <h1 className="bg-white mt-20 rounded-lg">
          <div className="">
            <h1 className="mb-4 text-lg font-bold mt-4 md:text-4xl lg:text-4xl">
              {props.secondTitle}
              {/* About Online Transaction */}
            </h1>
            <p className="p-4 text-left tracking-wider md:text-2xl">
              {props.paragraph}
            </p>
          </div>
        </h1>
      </div>
    </div>
  );
};

// MainTransaction.prototype = {
//   image: PropsType.node.isRequired,
//   title: PropsType.string.isRequired,
//   secondTitle: PropsType.string.isRequired,
//   paragraph: PropsType.string.isRequired,

// }
export default MainTransaction;
