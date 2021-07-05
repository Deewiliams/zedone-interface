import React from 'react'
import Subscription from '../images/Subscriptions.png'
import MainTransaction from './MainTransaction'

const Subscriptions = () => {
    return (
    
             <MainTransaction 
                image={Subscription}
                title="Subcriptions Payment"
                secondTitle="About Subcriptions Payment"
                paragraph="Online transaction is a payment method in which the transfer 
                of fund or money happens online over electronic fund transfer. Online 
                transaction process (OLTP) is secure and password protected. Three steps involved 
                in the online transaction are Registration, Placing an order, and, Payment. "
           /> 
        
    )
}

export default Subscriptions
