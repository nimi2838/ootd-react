import React from "react";
import { Footer } from "react-daisyui";
import { Link } from "react-router-dom";
import Topbar from "../components/Topbar";

import "../styles/board/NoticeContent.scss";
import NoticeList from "./NoticeList";

const NoticeContent = ({ Notice }) => {
  // const { id, reg_date, title, contents } = Notice;
  return (
    <>
      <Topbar />
      <article className="notice-content">
        <div className="notice-main-title">공지사항</div>
        <div className="notice-date">date</div>
        <nav className="numANDtitle">
          <div className="notice-content-num">NUM</div>
          <div className="notice-content-title">title</div>
        </nav>
        <div className="notice-content-text">content</div>
        <nav className="notice-content-btn">
          <button className="btn mod-btn">수정</button>

          <button className="btn del-btn">삭제</button>

          <Link to={`/NoticeList`}>
            <button className="btn list-btn">목록</button>
          </Link>
        </nav>
      </article>
      <Footer />
    </>
  );
};

export default NoticeContent;
