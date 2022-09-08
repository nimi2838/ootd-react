import React, { useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import UserIcon from "../components/UserIcon";
import { useRecoilState } from "recoil";
import { authenticatedState } from "../recoil/authState";
import { BiSearchAlt } from "react-icons/bi";

const Login = () => {
  let sessionStorage = window.sessionStorage;
  let [savedLoginId, setSavedLoginId] = useState("");
  let [id, setId] = useState("");
  let [pw, setPw] = useState("");
  const [authenticated, setAuthenticated] = useRecoilState(authenticatedState);

  const idChange = (e) => {
    setId(e.target.value);
  };
  const pwChange = (e) => {
    setPw(e.target.value);
  };

  return (
    <nav className="login">
      {/*  로그인/회원가입 버튼  */}
      <Link to="/SearchPage" className="Search">
        <BiSearchAlt className="mirror" style={{ margin: "0 20" }} />
      </Link>
      {authenticated ? (
        <div
          style={{
            display: "flex",
          }}
        >
          <div
            style={{
              display: "flex",
              fontSize: "30px",
              alignItems: "center",
              margin: "0 8px 0 0",
            }}
          >
            <UserIcon />
          </div>
          <button
            onClick={() => {
              setAuthenticated(false);
            }}
            style={{ display: "flex", alignItems: "center" }}
          >
            logout
          </button>
        </div>
      ) : (
        <div>
          <input
            type="text"
            placeholder="id"
            name="id"
            value={id}
            onChange={idChange}
            style={{
              width: "100px",
              height: "20px",
              color: "black",
              display: "inline-block",
            }}
            maxLength={14}
            autoComplete="off"
          />
          <span>&nbsp;</span>
          <input
            type="password"
            placeholder="Password"
            name="pw"
            value={pw}
            onChange={pwChange}
            style={{
              width: "100px",
              height: "20px",
              color: "black",
              display: "inline-block",
            }}
            maxLength={16}
            autoComplete="off"
          />
          <span>&nbsp;</span>
          <button
            onClick={async () => {
              const data = await axios({
                url: "http://localhost:4000/test1/doLogin",
                method: "POST",
                data: { id, pw },
              });
              if (data.data === true) {
                alert("로그인 성공");
                setAuthenticated(true);

                sessionStorage.setItem("id", id);

                setSavedLoginId(sessionStorage.getItem("id"));
              } else {
                alert("로그인 실패");
              }
            }}
          >
            Login
          </button>
          <span>&nbsp;</span>
          <Link to="/Join">
            <button>JOIN</button>
          </Link>
        </div>
      )}
    </nav>
  );
};

export default Login;
