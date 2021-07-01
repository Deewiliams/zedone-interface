import React from "react";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";

const HomeStateProps = (props) => {
  return (
    <div className=" ml-60 pb-3 bg-white w-24 -mt-4 md:w-40 md:ml-auto ">
      <CustomLink to="/" title={props.company} />
      <CustomLink to="/" title={props.title} />
    </div>
  );
};

function CustomLink(props) {
  return (
    <h1 className="hover:bg-purple-200 md:text-2xl">
      <Link to={props.to}>{props.title}</Link>
    </h1>
  );
}


HomeStateProps.propTypes = {
  company: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
};

export default HomeStateProps;
