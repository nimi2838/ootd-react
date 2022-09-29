import React, { Children, useEffect, useState } from "react";
import "../styles/buy/BuyMan.scss";
import Topbar from "../components/Topbar";
import Footer from "../components/Footer";
import { Link, useParams } from "react-router-dom";
import axios from "axios";
import BuyListItem from "./BuyListItem";

const BuyWoman = (args) => {
  let sessionStorage = window.sessionStorage;
  const userId = sessionStorage.getItem("id");

  const [cart, setCart] = useState([]);
  // const [amount, setAmount] = useState("");
  const [totalCount, setTotalCount] = useState(0);
  const [totalPrice, setTotalPrice] = useState(0);

  const params = useParams();

  const prdId = params.prdId;

  useEffect(() => {
    const getData = async () => {
      const data = await axios({
        url: `http://localhost:4000/cartlist`,
        method: "POST",
        data: { userId },
      });

      setCart(data.data);
      let count = 0;
      let prdprice = 0;
      data.data.map((item, index) => {
        count += item.amount;
        prdprice += item.price;

        // console.log(prdprice);
      });
      setTotalCount(count);
      setTotalPrice(prdprice);
    };
    getData();
  }, [userId]);

  useEffect(() => {
    const getData = async () => {
      const data = await axios({
        url: `http://localhost:4000/totalPrice`,
        method: "POST",
        data: { userId },
      });

      setTotalPrice(data.data.price);
    };
    getData();
  }, [totalPrice]);

  const onToggle = async (userId, prdId) => {
    await axios.patch(`http://localhost:4000/check/${userId}/${prdId}`);
    setCart((cart) =>
      cart.map((cart) =>
        cart.userId === userId && cart.prdId === prdId
          ? { ...cart, checked: !cart.checked }
          : cart
      )
    );
  };

  const cartDelete = async (prdId, userId) => {
    const data = await axios({
      url: `http://localhost:4000/cartDelete`,
      method: "POST",
      data: {
        prdId,
        userId,
      },
    });
    setCart(data.data);
  };

  return (
    <>
      <Topbar />
      <div
        className="overflow-x-auto w-full"
        style={{ width: "60%", margin: "15vh auto" }}
      >
        <table className="table w-full">
          {/* head */}
          <thead>
            <tr>
              <th>
                <label>
                  <input type="checkbox" className="checkbox" />
                </label>
              </th>
              <th>상품명</th>
              <th>단가</th>
              <th>수량</th>
              <th>가격</th>
              <th></th>
            </tr>
          </thead>
          <tbody>
            {/* row 1 */}

            {/* {cart.map((cart) => (
              <tr>
                <td>{prdEName}</td>
              </tr>
            ))} */}
            {cart.map((item, index) => {
              return (
                <BuyListItem
                  item={item}
                  key={index}
                  onToggle={onToggle}
                  totalCount={totalCount}
                  setTotalCount={setTotalCount}
                  totalPrice={totalPrice}
                  setTotalPrice={setTotalPrice}
                  cartDelete={cartDelete}
                />
                // <li cart={cart} key={index}>
                //   {cart.prdId}
                // </li>
              );
            })}
            {/* ))} */}

            {/* row 4 */}
            <tr>
              <td>
                <label>
                  <span></span>
                </label>
              </td>
              <td></td>
              <td>
                <div className="flex items-center space-x-3">
                  <div className="avatar">
                    <div className="mask mask-squircle w-12 h-12">
                      <span></span>
                    </div>
                  </div>
                  <div>
                    <div className="font-bold"></div>
                    <div className="text-sm opacity-50"></div>
                  </div>
                </div>
              </td>
              <td
                style={{
                  fontSize: "1rem",
                  fontWeight: "bold",
                  textAlign: "center",
                }}
              >
                총 수량
                <br />
                <div
                  style={{
                    color: "red",
                    fontSize: "1rem",
                    fontWeight: "bold",
                  }}
                >
                  {totalCount}
                </div>
                {/* <span className="badge badge-ghost badge-sm"></span> */}
              </td>
              <td
                style={{
                  fontSize: "1rem",
                  fontWeight: "bold",
                  textAlign: "center",
                }}
              >
                총 가격
                <br />
                <div
                  style={{
                    textAlign: "center",
                    color: "red",
                    fontSize: "1rem",
                    fontWeight: "bold",
                  }}
                >
                  {totalPrice}원
                </div>
                {/* <span className="badge badge-ghost badge-lg"></span> */}
              </td>

              <td></td>
            </tr>
            <tr>
              <td></td>
              <td></td>
              <td>
                <Link to="/WSBP">
                  <button className="btn">돌아가기</button>
                </Link>
              </td>
              <td></td>
              <td>
                <button
                  className="btn btn-secondary"
                  style={{ marginLeft: "0" }}
                >
                  구매하기
                </button>
              </td>

              <td></td>
            </tr>
          </tbody>
          {/* foot */}
        </table>
      </div>
      <Footer />
    </>
  );
};

export default BuyWoman;
