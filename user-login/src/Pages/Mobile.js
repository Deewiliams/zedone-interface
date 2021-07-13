import React from 'react'
import MainTransaction from '../components/MainTransaction'
import mobile from "../images/mobile.png"

const Mobile = () => {
    return (
        <MainTransaction 
        image={mobile}
        title="Mobile Payments"
        secondTitle="About About Mobile payments"
        paragraph="Online transaction is a payment method in which the transfer 
        of fund or money happens online over electronic fund transfer. Online 
        transaction process (OLTP) is secure and password protected. Three steps involved 
        in the online transaction are Registration, Placing an order, and, Payment. "
   /> 
    )
}

export default Mobile
