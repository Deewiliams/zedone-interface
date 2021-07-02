import React from "react";
import { Link } from "react-router-dom";
import PropsType from "prop-types";

const CustomLink = (props) => {
  return (
    <h1 className="hover:bg-purple-200 md:text-2xl">
      <Link to={props.to}>{props.title}</Link>
    </h1>
  );
};

CustomLink.prototype = {
  to: PropsType.string.isRequired,
  title: PropsType.string.isRequired,
};
export default CustomLink;
