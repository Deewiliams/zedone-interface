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
        <NavbarTitle title="We Offer the following services" />
        <ul className="grid gap-4 md:grid-cols-2 lg:grid-cols-4 p-4 ">
          <HomeProps
            link="/online"
            image={transaction}
            title="Online Transaction"
          />

          <HomeProps
            link="/subscriptions"
            image={subscriptions}
            title="Subscriptions Payments"
          />

          <HomeProps link="/drf" image={mobile} title="Mobile Payments" />

          <HomeProps link="/xyn" image={product} title="Product Payments" />
        </ul>
      </div>
    </div>
  );
};

export default Home;

