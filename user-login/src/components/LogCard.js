import React,{useState} from 'react'

const initialState = {
    firstName: '',
    lastName: '',
    phoneNumber: '',
    address: '',
}

const LogCard = () => {

    const [update, setUpdate] = useState(initialState);

    function handleChange (event){
        setUpdate({...update, [event.target.name]: event.target.value});
        
    }

    function handleClick () {
        console.log(update);
    }
    return (
     <div className="h-screen bg-purple-300">
         {/* <ul className="grid gap-4 md:grid-cols-2 lg:grid-cols-4 lg:gap-py-8 p-4 ">
             <li className="bg-white lg:bg-blue-400 rounded-lg"><div className="h-24">Hello1</div></li>
             <li className="bg-white rounded-lg"><div className="h-24">Hello2</div></li>
             <li className="bg-white rounded-lg"><div className=""><p className="p-2">In publishing and graphic design, Lorem ipsum is a placeholder text commonly used to demonstrate the visual form of a document or a typeface without relying on meaningful content. Lorem ipsum may be used as a placeholder before final copy is available. It is also used to temporarily replace text in a process called greeking, which allows designers to consider the form of a webpage or publication, without the meaning of the text influencing the design.

</p></div></li>
             <li className="bg-white row-span-4 rounded-lg"><div className="h-24">Hello4</div></li>        
             <li className="bg-white rounded-lg"><div className="h-24">Hello5</div></li>
             <li className="bg-white rounded-lg"><div className="h-24">Hello6</div></li>
             <li className="bg-white rounded-lg"><div className="h-24">Hello7</div></li>
             <li className="bg-white rounded-lg"><div className="h-24">Hello8</div></li>
             
         </ul> */}
            <div className="bg-black h-28 shadow-xl">
            <div className="flex justify-around flex-row-reverse p-4">
            <div>
                <h className="text-4xl text-gray-100">ZedOne</h>
            </div>
            <div>
                <h1 className="text-4xl text-gray-100" >The Best</h1>
            </div>
            </div>
            </div>



            <form>
            <div className="grid gap-y-8 p-4 justify-items-center">
                <input className="w-1/3 h-10 
                p-3 rounded-lg 
                placeholder-opacity-100 
                ..." placeholder="First Name" 
                value={update.firstName}
                onChange={handleChange}
                name="firstName"
                />


                <input className="w-1/3 h-10 p-3 
                rounded-lg placeholder-opacity-100 
                ..." placeholder="Last Name" 
                value={update.lastName}
                onChange={handleChange}
                name="lastName"
                />

                <input className="w-1/3 h-10 p-3 
                rounded-lg placeholder-opacity-100 
                ..." placeholder="Phone Number"
                value={update.phoneNumber}
                onChange={handleChange}
                name="phoneNumber"
                 />

                <input className="w-1/3 h-10 p-3 
                rounded-lg placeholder-opacity-100
                 ..." placeholder="Address" 
                 value={update.address}
                onChange={handleChange}
                name="address"
                 />

            </div>
            </form>
            <button className="p-2 bg-yellow-600 
            rounded-lg w-1/3 h-10 
            hover:bg-yellow-400 
            hover:text-gray-100 
            text-2xl"
            role="submit"
            onClick={handleClick}
            >
                Submit
            </button>


            

     </div>
    )
}
export default LogCard
