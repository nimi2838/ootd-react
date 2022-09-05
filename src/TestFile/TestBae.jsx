import React, { useEffect, useState } from "react";
import "../styles/subscss/TestBae.scss";
import axios from "axios";
import { BiSearchAlt } from "react-icons/bi";

const TestBae = ({ prd }) => {
  const [arrSearch, setArrSearch] = useState([]);
  const { prdName, prdPrice, prdImg } = arrSearch;
  const [search, setSearch] = useState("");
  const onChange = (e) => {
    e.preventDefault();
    console.log(e.target.value);
    setSearch(e.target.value);
  };
  const onSearch = async () => {
    // if (onChange === "") {
    //   const getData = async () => {
    //     const data = await axios({
    //       url: `http://loacalhost:4000/SearchPage`,
    //       method: "GET",
    //     });
    //     console.log(data.data);
    //     setSearch(data.data);
    //     await new Promise((resolve, reject) => {
    //       setTimeout(() => {
    //         resolve();
    //       }, 3000);
    //     });
    //   };
    //   getData();
    // } else {
    const getData = async () => {
      const data = await axios({
        url: `http://localhost:4000/SearchPage`,
        method: "POST",
        data: {
          search,
        },
      });
      console.log("실행", data.data);
      setArrSearch(data.data);
    };
    getData();
    // }
  };
  return (
    <div>
      <input
        type="text"
        placeholder="검색할 상품 이름을 검색해주세요"
        onChange={onChange}
      />
      <button type="submit" onClick={onSearch}>
        <BiSearchAlt />
      </button>
      <div className="itemList">
        <ul className="searchList">
          {arrSearch.map((arrSearch, index) => {
            <li key={index} className="searchItem">
              <span>상품명:</span>
              <span>{prdName}</span>
              가격: {prdPrice}
            </li>;
          })}
          {console.log(arrSearch)}
        </ul>
      </div>
    </div>
  );
};

export default TestBae;
