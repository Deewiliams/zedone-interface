import React from 'react'
import error from "../images/404.svg"

const PageNotFound = () => {
    return (
        <div className="h-screen bg-purple-300 p-4">
            <img className="mt-20 m-auto md:" src={error} alt="page not found" />
            <h1 className="text-2xl m-auto mt-4 md:text-4xl lg:text-4xl">ooops! sorry page not found</h1>
        </div>
    )
}

export default PageNotFound
