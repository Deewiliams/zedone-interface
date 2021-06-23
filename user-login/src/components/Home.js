import React from 'react'
import {Link} from 'react-router-dom'


const Home = () => {
    return (
        <div>
            <h1>Home Page</h1>
            <Link to="/CompanyRegistration">Home</Link>
            <Link to="/Login">Login</Link>

        </div>
    )
}

export default Home
