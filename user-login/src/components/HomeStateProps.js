import React from "react";
import { Link } from "react-router-dom";
import CustomLink from "./CustomLink";
import PropTypes from "prop-types";

const HomeStateProps = (props) => {
  return (
    // register a company or personal account link
    <div className=" ml-60 pb-3 bg-white w-24 -mt-4 md:w-40 md:ml-auto ">
      <CustomLink to="/CompanyRegistration" title={props.company} />
      <CustomLink to="/" title={props.title} />
      <CustomLink to="/Login" title={props.company} />
      <CustomLink to="/" title={props.title} />
    </div>
  );
};

HomeStateProps.propTypes = {
  company: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
};

export default HomeStateProps;
