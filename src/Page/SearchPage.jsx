import React, { useState, useEffect } from "react";
import axios from "axios";
import { BiSearchAlt } from "react-icons/bi";
import Topbar from "../components/Topbar";
import Footer from "../components/Footer";
import SearchListItem from "../components/SearchListItem";
import "../styles/SearchPage.scss";
const SearchPage = () => {
  const [arrSearch, setArrSearch] = useState([]);
  const [search, setSearch] = useState("");
  const onChange = (e) => {
    e.preventDefault();
    console.log(e.target.value);
    setSearch(e.target.value);
  };
  const onCheckEnter = (e) => {
    if (e.key === "Enter") {
    }
  };
  useEffect(() => {
    const getData = async () => {
      const data = await axios({
        url: `http://localhost:4000/SearchPage`,
        method: "POST",
        data: {
          search,
        },
      });
      setArrSearch(data.data);
      // console.log("avbs", arrSearch);
    };
    getData();
  }, [search]);
  return (
    <div>
      <Topbar />
      <input
        type="text"
        placeholder="검색할 상품 이름을 검색해주세요"
        onChange={onChange}
        onKeyPress={onCheckEnter}
      />
      <button type="submit">
        <BiSearchAlt />
      </button>
      <div className="list-box-1 con">
        <div className="itemList">
          <ul className="row">
            {arrSearch.map((arrSearch, index) => {
              return <SearchListItem arrSearch={arrSearch} key={index} />;
            })}
          </ul>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default SearchPage;
