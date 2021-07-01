import React from "react";
import ButtonProps from "./ButtonProps";
import PropTypes from "prop-types";

const HomeProps = (props) => {
  return (
    <div>
      <li className="bg-white shadow rounded-lg">
        <img className="p-2" src={props.image} />
        <div className="mt-16">
          <h1 className="text-2xl">{props.title}</h1>
        </div>
        <ButtonProps info="More Information" />
      </li>
    </div>
  );
};

HomeProps.PropsType = {
    image: PropTypes.node.required,
    title: PropTypes.string.required,

};

export default HomeProps;
