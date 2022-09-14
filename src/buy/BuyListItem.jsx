import axios from "axios";
import React, { useState } from "react";
import { useEffect } from "react";
import cn from "classnames";
import { MdCheckBoxOutlineBlank, MdCheckBox } from "react-icons/md";
import { FaRegMinusSquare, FaRegPlusSquare } from "react-icons/fa";
import { constSelector } from "recoil";

const BuyListItem = ({
  item,
  index,
  onToggle,
  totalCount,
  setTotalCount,
  totalPrice,
  setTotalPrice,
  cartDelete,
}) => {
  let sessionStorage = window.sessionStorage;
  const userId = sessionStorage.getItem("id");

  // console.log(item.prdId);
  const [list, setList] = useState("");

  const [count, setCount] = useState(item.amount);
  const [price, setPrice] = useState(item.price);
  const [unitPrice, setUnitPrice] = useState(0);

  const { checked } = item;

  useEffect(() => {
    const getData = async () => {
      // console.log("amount", item.amount);
      // console.log("prdId", cart.prdId);
      const data = await axios({
        url: `http://localhost:4000/cartList2`,
        method: "POST",
        data: {
          prdId: item.prdId,
          count,
        },
      });
      setList(data.data);
    };
    getData();
  }, [item, count, price]);

  const onClick = async () => {
    cartDelete(item.prdId, userId);
  };

  return (
    <tr key={index}>
      <td>
        <div
          className={cn("checkbox1", { checked: checked })}
          onClick={() => {
            onToggle(userId, item.prdId);
          }}
        >
          {checked ? (
            <MdCheckBox className="checkbox" />
          ) : (
            // <input type="checkbox" className="checkbox" value={""} checked />
            <MdCheckBoxOutlineBlank className="checkbox" />
            // <input type="checkbox" className="checkbox" value={""} />
          )}
        </div>
      </td>
      <td>
        <div className="flex items-center space-x-3">
          <div className="avatar">
            <div className="mask mask-squircle w-12 h-12">
              <img src={list.prdImg} alt="Avatar Tailwind CSS Component" />
            </div>
          </div>
          <div>
            <div className="font-bold">{list.prdName}</div>
            <div className="text-sm opacity-50">{list.prdEName}</div>
          </div>
        </div>
      </td>
      <td>{list.prdPrice}</td>
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
          onClick={async () => {
            if (count <= 1) {
              alert("최소 수량입니다.");
            } else {
              const data = await axios({
                url: `http://localhost:4000/amount/${item.prdId}`,
                method: "PATCH",
                data: { count: count - 1, price: price - list.prdPrice },
              });

              setCount(count - 1);
              setTotalCount(totalCount - 1);
              setPrice(price - list.prdPrice);
              setTotalPrice(totalPrice - (price - list.prdPrice));
            }
          }}
        >
          <FaRegMinusSquare />
        </div>
        <div
          style={{
            display: "flex",
            width: "30px",
            height: "48px",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          {count}
        </div>
        <div
          className="plus"
          style={{
            display: "flex",
            width: "30px",
            height: "48px",
            alignItems: "center",
            justifyContent: "center",
          }}
          onClick={async () => {
            const data = await axios({
              url: `http://localhost:4000/amount/${item.prdId}`,
              method: "PATCH",
              data: { count: count + 1, price: price + list.prdPrice },
            });
            setCount(count + 1);
            setTotalCount(totalCount + 1);
            setPrice(price + list.prdPrice);
            setTotalPrice(totalPrice + (price + list.prdPrice));
          }}
        >
          <FaRegPlusSquare />
        </div>
        <br />
        {/* <span className="badge badge-ghost badge-sm"></span> */}
      </td>
      <td>{price}</td>
      {/* <td>{list.prdPrice.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")}</td> */}
      <td>
        <button
          className="btn btn-ghost btn-mg"
          style={{ color: "red" }}
          onClick={onClick}
        >
          삭제
        </button>
      </td>
    </tr>
  );
};

export default BuyListItem;
