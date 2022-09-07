import React, { useEffect, useState } from "react";
import "../styles/subscss/TestBae.scss";
import axios from "axios";
import { BiSearchAlt } from "react-icons/bi";

const TestBae = () => {
  const [arrSearch, setArrSearch] = useState([]);

  const { prdName, prdPrice, prdImg } = arrSearch;
  const [search, setSearch] = useState("");
  const onChange = (e) => {
    e.preventDefault();
    console.log(e.target.value);
    setSearch(e.target.value);
  };
  const onCheckEnter = (e) => {
    if (e.key === "Enter") {
      onSearch();
    }
  };
  const onSearch = async () => {
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
  };
  return (
    <div>
      <input
        type="text"
        placeholder="검색할 상품 이름을 검색해주세요"
        onChange={onChange}
        onKeyPress={onCheckEnter}
      />
      <button type="submit" onClick={onSearch}>
        <BiSearchAlt />
      </button>
      <div className="itemList">
        <ul className="searchList">
          {arrSearch.map((arrSearch, index) => {
            <li key={search} className="searchItem">
              <span>
                <img src={prdImg} alt="" />
              </span>
              <span>상품명:</span>
              <span>{prdPrice}</span>
              <span>가격:</span>
              <span>{prdName}</span>
            </li>;
          })}
          {console.log(arrSearch.prdImg)}
        </ul>
      </div>
    </div>
  );
};

export default TestBae;
