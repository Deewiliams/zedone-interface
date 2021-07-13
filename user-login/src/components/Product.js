import React from 'react'
import product from '../images/product.png'
import MainTransaction from './MainTransaction'

const Product = () => {
    return (
        <MainTransaction 
        image={product}
        title="Product payments"
        secondTitle="About product payments"
        paragraph="Online transaction is a payment method in which the transfer 
        of fund or money happens online over electronic fund transfer. Online 
        transaction process (OLTP) is secure and password protected. Three steps involved 
        in the online transaction are Registration, Placing an order, and, Payment. "
   /> 
    )
}

export default Product
