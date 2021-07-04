import React from 'react'
import { Link } from "react-router-dom";

const HomeLink = (props) => {
    return (
        
        <Link to={props.to}>{props.info}</Link>
    )
}

export default HomeLink
