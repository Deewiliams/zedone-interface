import React from "react";
import ButtonProps from "./Button";
import PropTypes from "prop-types";

const HomeProps = (props) => {
  return (
    <div>
      <li className="bg-white mt-2 lg:-mt-6 shadow-xl rounded-lg">
        <img className="p-2" src={props.image} alt="pictures" />
        <div className="mt-16">
          <h1 className="text-2xl">{props.title}</h1>
        </div>
        <ButtonProps info="More Information" link={props.link} />
      </li>
    </div>
  );
};

HomeProps.propTypes = {
  image: PropTypes.node.isRequired,
  title: PropTypes.string.isRequired,
  link: PropTypes.string.isRequired,
};

export default HomeProps;
