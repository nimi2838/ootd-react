import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import BuyBtn from "../icons/BuyBtn";
import ShoppingCart from "../icons/ShoppingCart";
import FavoritCheck from "../icons/FavoritCheck";
import { useRecoilState } from "recoil";
import { authenticatedState } from "../recoil/authState";
import axios from "axios";
import "../styles/DetailItem.scss";

const DetailItem = ({ prdId, prdName, prdEName, prdPrice, prdImg }) => {
  const [authenticated, setAuthenticated] = useRecoilState(authenticatedState);

  let sessionStorage = window.sessionStorage;
  const userId = sessionStorage.getItem("id");

  const [arrcheck, setArrcheck] = useState([]);
  const [checked, setChecked] = useState("");

  useEffect(() => {
    console.log("prdId:", prdId);
    // const getData = async () => {
    //   const data = await axios({
    //     url: `http://localhost:4000/heart/${userId}/${prdId}`,
    //     method: "GET",
    //   });
    //   // console.log(data.data);
    //   // setArrcheck(data.data);
    // };
    // getData();
  }, []);

  const insertHeart = async (checked) => {
    await axios({
      url: `http://localhost:4000/addHeart/${userId}/${prdId}`,
      method: "patch",
      data: { checked },
    });
    // setArrcheck((arrcheck) =>
    //   arrcheck.map((checked) =>
    //     checked.prdId === prdId
    //       ? { ...checked, checked: !checked.checked }
    //       : checked
    //   )
    // );
  };

  const onToggle = () => {
    setChecked((checked) => !checked);
    console.log("checked", checked);
  };

  return (
    <>
      <div className="detail_wrap">
        <p className="title_name">
          {" "}
          {prdName}
          <span>{prdEName}</span>
        </p>
        <div className="sub_box flex">
          <div className="img-box">
            <img src={prdImg} alt="img" />
          </div>

          <div className="product-text">
            <div className="text-wrap">
              <h2>
                제품정보 <span>　　　　　Product Info</span>
              </h2>
              <div className="text-box1 flex">
                <div className="text1">
                  <p className="p1">브랜드/품번</p>
                  <p className="p2">조회수(1개월)</p>
                  <p className="p3">누적판매(1년)</p>
                  <p className="p4">구매후기</p>
                </div>
                <div className="text2">
                  <p className="p1">{prdId}</p>
                  <p className="p2">9.9천 회 이상</p>
                  <p className="p3">600개 이상</p>
                  <p className="p4">
                    ★★★★★ <span>5</span>
                  </p>
                </div>
              </div>
            </div>
            <hr />
            <div className="price-wrap">
              <h2>
                Price Info <span>　　　　　가격정보</span>
              </h2>
              <div className="text-box1 flex">
                <div className="text1">
                  <p className="p1">OOTD 판매가</p>
                  <p className="p2">OOTD 회원가</p>
                  <p className="p3">OOTD 적립금</p>
                </div>
                <div className="text2">
                  <p className="p1">
                    {/* {prdPrice.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")} */}
                    {/* {prdPrice.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")} */}
                    {parseInt(prdPrice)
                      .toString()
                      .replace(/\B(?=(\d{3})+(?!\d))/g, ",")}
                    원
                  </p>
                  <div className="p2">
                    {" "}
                    20,000원 ~ 25,000원
                    <br />
                    <div className="coupon-btn">
                      <Link to="/">쿠폰받기</Link>
                    </div>
                  </div>
                  <p className="p3">최대 1,250원</p>
                </div>
              </div>
            </div>
            <hr />
            <div className="buy-btn-box flex">
              <div
                onClick={() => {
                  console.log(checked);
                }}
              >
                click
              </div>
              <div className="buy">
                <BuyBtn />
              </div>
              {/* <div
                onClick={() => {
                  console.log("현재 체크값", checked);
                  console.log("체크된 개수", heartCount);
                }}
              >
                check
              </div> */}
              <div className="cart-heart">
                <div className="heart">
                  <FavoritCheck
                    prdId={prdId}
                    checked={checked}
                    insertHeart={insertHeart}
                    onToggle={onToggle}
                    // setHeart={setHeart}
                    // checked={checked} onClick={onClick}
                  />
                  <div className="heartCount">{/* {heartCount} */}</div>
                </div>
                <div className="cart">
                  <ShoppingCart prdId={prdId} />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
export default DetailItem;
