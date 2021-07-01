import React from "react";

const ButtonProps = (props) => {
  return (
    <button
      className="bg-purple-300 px-4 py-2 mb-4 
        hover:bg-purple-500 hover:text-white cursor-pointer rounded-lg
        "
    >
      {props.info}
    </button>
  );
};

export default ButtonProps;
