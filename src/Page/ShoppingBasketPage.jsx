import React from "react";
import Footer from "../components/Footer";
import Topbar from "../components/Topbar";
import ShoppingCart from "../DetailPage/ShoppingCart";

const ShoppingBasketPage = () => {
  return (
    <div>
      <Topbar />
      <ShoppingCart />
      <Footer />
    </div>
  );
};

export default ShoppingBasketPage;
