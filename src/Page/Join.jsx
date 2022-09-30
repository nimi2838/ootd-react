import axios from "axios";
import React, { useState } from "react";
import Topbar from "../components/Topbar";
import Footer from "../components/Footer";
import "../styles/Join.scss";

const Join = (args) => {
  const [id, setJoinId] = useState("");
  const [pw, setJoinPw] = useState("");
  const [name, setJoinName] = useState("");

  const [user, setUser] = useState([]);

  const joinbtn = async () => {
    if (id.length === 0) {
      alert("아이디 없음");
      return;
    }
    if (pw.length === 0) {
      alert("비번 없음");
      return;
    }
    if (name.length === 0) {
      alert("이름 없음");
      return;
    }
    await axios({
      url: `http://localhost:4000/test1`,
      method: "POST",
      data: {
        id,
        pw,
        name,
      },
    });
    setUser(id, pw, name);
    alert("회원가입 성공!");
  };

  const joinIdChange = (e) => {
    setJoinId(e.target.value);
  };

  const joinPwChange = (e) => {
    setJoinPw(e.target.value);
  };

  const joinNameChange = (e) => {
    setJoinName(e.target.value);
  };

  const onSubmit = async (e) => {
    e.preventDefault();
    setJoinId("");
    setJoinPw("");
    setJoinName("");
    setUser(id, pw, name);
  };

  return (
    <div className="join_box">
      <div className="align-center">
        <h1>회원가입</h1>

        <div className="form_box">
          <form name="joinForm" className="joinForm" onSubmit={onSubmit}>
            <input
              type="text"
              name="id"
              className="joininput"
              value={id}
              onChange={joinIdChange}
              placeholder="아이디를 입력하세요"
            />
            <input
              type="text"
              name="pw"
              className="joininput"
              value={pw}
              onChange={joinPwChange}
              placeholder="비밀번호를 입력하세요"
            />
            <input
              type="text"
              name="name"
              className="joininput"
              value={name}
              onChange={joinNameChange}
              placeholder="이름을 입력하세요"
            />
            <button className="btn btn-ghost" type="submit" onClick={joinbtn}>
              회원가입
            </button>
            {/* <button className="btn" type="submit" onClick={joinbtn}>
          회원가입
        </button> */}
          </form>
        </div>
      </div>
    </div>
  );
};

export default Join;
