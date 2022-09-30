import axios from "axios";
import React from "react";
import { useEffect } from "react";
import { useState } from "react";

const ShoppingListItem = ({ CartArr, SetCartArr }) => {
  const Deletebtn = async () => {
    try {
      await axios({
        url: `http://localhost:4000/SBP/${CartArr.prdId}`,
        method: "DELETE",
      });
    } catch (e) {
      console.error(e);
    }
  };
  useEffect(() => {
    const getData = async () => {
      const data = await axios({
        url: "http://localhost:4000/SBP",
        method: "GET",
      });
      SetCartArr(data.data);
    };
    getData();
  });
  return (
    <tr className="Shopping-list-item">
      <th>
        <label>
          <input type="checkbox" className="checkbox" />
        </label>
      </th>
      <td>
        <div className="flex items-center space-x-3">
          <div className="avatar">
            <div className="mask mask-squircle w-12 h-12">
              <img src={CartArr.prdImg} alt="Avatar Tailwind CSS Component" />
            </div>
          </div>
          <div>
            <div className="font-bold">{CartArr.prdName}</div>
          </div>
        </div>
      </td>
      <td>
        {CartArr.prdEname}
        <br />
      </td>
      <td>수량</td>
      <td></td>
      <th>
        <button className="btn btn-ghost btn-xs">삭제</button>
      </th>

      {/* <td>
        <div></div>
      </td> */}
      {/* <td>
        <div className="flex items-center space-x-3">
          <div className="avatar">
            <div className="mask mask-squircle w-12 h-12">
              <img src={CartArr.prdImg} alt="Avatar Tailwind CSS Component" />
            </div>
          </div>
          <div>
            <div className="font-bold">{CartArr.prdName}</div>
            <div className="text-sm opacity-50">{CartArr.prdEname}</div>
          </div>
        </div>
      </td>
      <td></td>
      <td
        style={{
          display: "flex",
        }}
      >
        <div
          className="minus"
          style={{
            display: "flex",
            width: "30px",
            height: "48px",
            alignItems: "center",
            justifyContent: "center",
          }}
        ></div>
        <div
          style={{
            display: "flex",
            width: "30px",
            height: "48px",
            alignItems: "center",
            justifyContent: "center",
          }}
        ></div>
        <div
          className="plus"
          style={{
            display: "flex",
            width: "30px",
            height: "48px",
            alignItems: "center",
            justifyContent: "center",
          }}
        ></div>
        <br />
        {/* <span className="badge badge-ghost badge-sm"></span> */}
      {/* </td> */}
      {/* // <td>{CartArr.prdPrice}</td> */}
      {/* <td>{list.prdPrice.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")}</td> */}
      {/* // <td>
      //   <button */}
      {/* //     className="btn btn-ghost btn-mg"
      //     style={{ color: "red" }}
      //     onClick={() => { */}
      {/* //       Deletebtn();
      //     }}
      //   >
      //     삭제
      //   </button> */}
      {/* // </td> */}
    </tr>
  );
};

export default ShoppingListItem;
