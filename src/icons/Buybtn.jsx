import React, { useState } from "react";
import { BiWon } from "react-icons/bi";
import "../styles/icons/BuyBtn.scss";

function BuyBtn() {
  return (
    <div className="buy-btn">
      <button className="sell">
        <div className="won">
          <BiWon />
        </div>{" "}
        구매하기
      </button>
    </div>
  );
}
export default BuyBtn;
