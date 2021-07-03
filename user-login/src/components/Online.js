import React from "react";
import transaction from "../images/transaction.png";

const Online = () => {
  return (
    <div className="h-screen bg-gradient-to-tr from-white to-purple-500">
      <div className="grid grid-col-1 gap-8 p-4 lg:p-20 md:grid-cols-2">
        <h1 className="bg-white mt-20 rounded-lg">
          <div className="">
            <img
              className="mt-4 lg:ml-52 "
              src={transaction}
              alt="transaction image"
            />
            <p className="mb-4 text-2xl font-bold lg:text-6xl">
              Online Transaction
            </p>
          </div>
        </h1>
        <h1 className="bg-white mt-20 rounded-lg">
          <div className="">
            <h1 className="mb-4 text-lg font-bold mt-4 md:text-4xl lg:text-6xl">
              About Online Transaction
            </h1>
            <p className="p-4 text-left tracking-wider md:text-4xl">
              Online transaction is a payment method in which the transfer of
              fund or money happens online over electronic fund transfer. Online
              transaction process (OLTP) is secure and password protected. Three
              steps involved in the online transaction are Registration, Placing
              an order, and, Payment.
            </p>
          </div>
        </h1>
      </div>
    </div>
  );
};

export default Online;
