import React from 'react'
import MainTransaction from '../components/MainTransaction'
import transaction from "../images/transaction.png"
import Navbar from "../components/Navbar";

const Online = () => {
    return (
        <div>
           <MainTransaction 
                image={transaction}
                title="Online Transaction"
                secondTitle="About Online Transaction"
                paragraph="Online transaction is a payment method in which the transfer 
                of fund or money happens online over electronic fund transfer. Online 
                transaction process (OLTP) is secure and password protected. Three steps involved 
                in the online transaction are Registration, Placing an order, and, Payment. "
           /> 
             <Navbar />
        </div>
    )
}

export default Online
