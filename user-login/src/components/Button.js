import React from "react";
import PropTypes from "prop-types";
import { useHistory } from "react-router-dom";

const ButtonProps = (props) => {
  let history = useHistory();

  function handleClick () {
    history.push(props.link)
  }
  return (
    <div>
      <button
        className="bg-purple-300 px-4 py-2 mb-4 
        hover:bg-purple-500 hover:text-white cursor-pointer rounded-lg"
        type="button"
        onClick={handleClick}
      >
        {props.info}
      </button>
    </div>
  );
};

ButtonProps.propTypes = {
  info: PropTypes.string.isRequired,
  link: PropTypes.string.isRequired,
};

export default ButtonProps;
