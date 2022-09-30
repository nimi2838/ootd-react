import React from "react";
import Footer from "../components/Footer";
import Topbar from "../components/Topbar";
import Payment from "../DetailPage/Payment";

const PaymentPage = () => {
  return (
    <div>
      <Topbar />
      <Payment />
      <Footer />
    </div>
  );
};

export default PaymentPage;
