import React from 'react'
import Navbar from '../components/Navbar'


const AboutUs = () => {
    return (
        <div className="h-screen lg:h-screen bg-gradient-to-tr from-white to-purple-500">
            <Navbar />
          <div className="w-2/4 m-auto ">
          <div className="grid gap-4 ">
               <div className="h-16 bg-white w-60 md:text-2xl text-center">what is ZedOne All about</div>
              
           </div>
          </div>
        </div>
    )
}

export default AboutUs
