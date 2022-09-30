import React, { useState } from "react";
import { AiOutlineShoppingCart } from "react-icons/ai";
import axios from "axios";
import "../styles/icons/ShoppingCart.scss";

function ShoppingCart({ prdId }) {
  const [dup, setDup] = useState(false);
  const [addCart, setAddCart] = useState("");
  const cartAdd = async () => {
    const data = await axios({
      url: `http://localhost:4000/SBP`,
      method: "POST",
      data: {
        prdId,
      },
    });
    setAddCart(data.data);
    console.log(data.data);
  };
  return (
    <div onClick={cartAdd} className="all-cart">
      <button className="shopping-cart">
        <AiOutlineShoppingCart />
      </button>
    </div>
  );
}
export default ShoppingCart;
