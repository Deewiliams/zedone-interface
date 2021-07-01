import React from "react";
import ButtonProps from "./ButtonProps";

const HomeProps = (props) => {
  return (
    <div>
      <li className="bg-white rounded-lg">
        <img className="p-2" src={props.image} />
        <div className="mt-16">
          <h1 className="text-2xl">{props.title}</h1>
        </div>
        <ButtonProps info="More Information" />
      </li>
      {/*  */}
    </div>
  );
};

export default HomeProps;
