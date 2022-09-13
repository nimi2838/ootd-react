import React from "react";
import "../styles/sub_detail/SubDetailMan.scss";

import { Link } from "react-router-dom";
import BuybtnMan from "../btn/BuybtnMan";
import ShoppingCart from "../btn/ShoppingCart";
import FavoritCheck from "../btn/FavoritCheck";
import { useRecoilState } from "recoil";
import { authenticatedState } from "../recoil/authState";
import axios from "axios";
import CartList from "../components/CartList";
import BuyWoman from "../buy/BuyWoman";

const SubDetailWoman = ({ prdId, prdName, prdEName, prdPrice, prdImg }) => {
  const [authenticated, setAuthenticated] = useRecoilState(authenticatedState);

  let sessionStorage = window.sessionStorage;
  const userId = sessionStorage.getItem("id");

  const cartAdd = async () => {
    await axios({
      url: `http://localhost:4000/cart`,
      method: "POST",
      data: {
        prdId,
        userId,
      },
    });
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
                Product Info <span>제품정보</span>
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
                Price Info <span>가격정보</span>
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
              <div className="buy">
                <BuybtnMan />
              </div>
              <div className="cart">
                {authenticated === true ? (
                  <Link to={`/BuyWoman/${prdId}`}>
                    <ShoppingCart prdId={prdId} userId={userId} />
                  </Link>
                ) : (
                  console.log("로그인이 필요합니다.")
                )}
              </div>
              <div className="heart">
                <FavoritCheck />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
export default SubDetailWoman;
