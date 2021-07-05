import React from "react";
import ButtonProps from "./ButtonProps";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import { useHistory } from "react-router-dom";

const HomeProps = (props) => {
  let history = useHistory();

  function handleClick() {
    history.push("/online");
  }
  return (
    <div>
      <li className="bg-white mt-20  shadow rounded-lg">
        <img className="p-2" src={props.image} />
        <div className="mt-16">
          <h1 className="text-2xl">{props.title}</h1>
        </div>
        {/* <ButtonProps info="More Information"/> */}
        <button type="button" onClick={handleClick}>
      click me
    </button>
      </li>
    </div>
  );
};

HomeProps.propTypes = {
  image: PropTypes.node.isRequired,
  title: PropTypes.string.isRequired,
};

export default HomeProps;
