import React, { useState } from "react";
import transaction from "../images/transaction.png";
import mobile from "../images/mobile.png";
import subscriptions from "../images/Subscriptions.png";
import product from "../images/product.png";
import HomeProps from "./HomeProps";
import NavbarTitle from "./NavbarTitle";

const Home = () => {
  return (
    <div className="h-screen-full lg:h-screen bg-gradient-to-tr from-white to-purple-500">
      <div>
      <NavbarTitle 
      title="We Offer the following services"
      />
        <ul className="grid gap-4 md:grid-cols-2 lg:grid-cols-4 p-4 ">
          <HomeProps image={transaction} title="Online Transaction" />

          <HomeProps image={subscriptions} title="Subscriptions Payments" />

          <HomeProps image={mobile} title="Mobile Payments" />

          <HomeProps image={product} title="Product Payments" />
        </ul>
      </div>
     
    </div>
  );
};

export default Home;
