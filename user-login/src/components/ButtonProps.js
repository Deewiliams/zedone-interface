import React from "react";
import PropTypes from "prop-types";

const ButtonProps = (props) => {
  return (
    <button
      className="bg-purple-300 px-4 py-2 mb-4 
        hover:bg-purple-500 hover:text-white cursor-pointer rounded-lg"
    >
      {props.info}
    </button>
  );
};

ButtonProps.propTypes = {
  info: PropTypes.string.isRequired,
};

export default ButtonProps;
