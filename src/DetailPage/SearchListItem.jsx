import React, { useState } from "react";

import { Link } from "react-router-dom";

const SearchListItem = ({ arrSearch }) => {
  return (
    <li className="cell">
      <Link to="/WSBP" state={{ data: arrSearch.prdId }}>
        <div className="img-box">
          <img src={arrSearch.prdImg} alt="" />

          <div className="ico-view">
            <i className="fas fa-search" />
          </div>
        </div>
        <div className="prod-name">{arrSearch.prdName}</div>
        <div className="prod-name">{arrSearch.prdEName}</div>
        <div className="prod-price">
          {" "}
          {arrSearch.prdPrice.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")}
        </div>

        <div className="free-del">
          <span />
        </div>
      </Link>
    </li>
  );
};

export default SearchListItem;
