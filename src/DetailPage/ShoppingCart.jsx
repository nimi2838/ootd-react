import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import "../styles/ShoppingCart.scss";
import ShoppingListItem from "../DetailPage/ShoppingListItem";
import axios from "axios";

const ShoppingCart = () => {
  const [CartArr, SetCartArr] = useState([]);
  useEffect(() => {
    const getData = async () => {
      const data = await axios({
        url: `http://localhost:4000/SBP`,
        method: "GET",
      });
      SetCartArr(data.data);
      console.log(data.data);
    };
    getData();
  }, []);

  return (
    <div className="Shopping-Main">
      <div
        className="overflow-x-auto w-full"
        style={{ width: "90%", margin: "15vh auto" }}
      >
        <table className="table w-full">
          <thead>
            <tr>
              <th>
                <label>
                  <input type="checkbox" className="checkbox" />
                </label>
              </th>
              <th>상품명</th>
              <th>수량</th>
              <th>가격</th>
              <th></th>
            </tr>
          </thead>

          {/*    {/* head */}
          {/* <thead
            style={{
              display: "flex",
              justyficontent: "space-between",
            }} */}
          {/* >
            <tr className="cart-menubar">
              <th className="cart-title">상품 명</th>
              <th className="cart-title">상품 개수</th>
              <th className="cart-title">상품 가격</th>
            </tr>
          </thead>  */}
          <tbody>
            {CartArr.map((CartArr, index) => {
              return (
                <ShoppingListItem
                  CartArr={CartArr}
                  SetCartArr={SetCartArr}
                  key={index}
                />
              );
            })}
          </tbody>
          {/** 구매 취소 버튼 */}
          <tfoot style={{ width: "100%" }}>
            <tr>
              <th />
              <th></th>
              <th></th>
              <th>돌아가기</th>
              <th>결제하기</th>
            </tr>
          </tfoot>
        </table>
      </div>
    </div>
  );
};

export default ShoppingCart;
