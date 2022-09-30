import React, { useState, useEffect } from "react";
import axios from "axios";
import { BiSearchAlt } from "react-icons/bi";
import Topbar from "../components/Topbar";
import Footer from "../components/Footer";
import SearchListItem from "../DetailPage/SearchListItem";
import "../styles/SearchResultPage.scss";
const SearchResultPage = () => {
  const [arrSearch, setArrSearch] = useState([]);
  const [search, setSearch] = useState("");
  const onChange = (e) => {
    e.preventDefault();
    setSearch(e.target.value);
    console.log(e.target.value);
  };
  const onSubmit = (e) => {
    e.preventDefault();
    onSerch(search);
  };
  const onSerch = async (search) => {
    const data = await axios({
      url: `http://localhost:4000/SearchPage`,
      method: "POST",
      data: {
        search,
      },
    });
    setArrSearch(data.data);
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
  }, []);
  return (
    <div>
      <Topbar />
      <div className="form-control">
        <form onSubmit={onSubmit} className="controler">
          <input
            type="text"
            placeholder="검색할 상품 이름을 검색해주세요"
            onChange={onChange}
            value={search}
            className="input-bar"
            style={{ width: "300px", border: "3px solid black" }}
          />
          <button type="submit" className="search-btn">
            <BiSearchAlt className="mirror" />
          </button>
        </form>
      </div>
      <div className="list-box-1 con">
        <div className="itemList">
          <ul className="row">
            {arrSearch.length > 0 ? (
              arrSearch.map((arrSearch, index) => {
                return <SearchListItem arrSearch={arrSearch} key={index} />;
              })
            ) : (
              <li className="ListItemZone">
                <div
                  className="ListItemZone_Text"
                  style={{ paddingTop: "10%" }}
                >
                  검색하신 상품이 없습니다.
                </div>
              </li>
            )}
          </ul>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default SearchResultPage;
