import React from 'react'
import PropTypes from "prop-types";

const NavbarTitle = (props) => {
    return (
        <div>
        <h1 className="lg:text-white text-white font-bold text-sm -mt-2 pb-12 md:text-2xl lg:p-8">
         {props.title}
        </h1>
      </div>
    )
}
NavbarTitle.propTypes = {
    title: PropTypes.string.isRequired,
}

export default NavbarTitle
