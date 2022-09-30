import React, { useState, useEffect } from "react";
import axios from "axios";
import "../styles/Topbar.scss";
import Login from "./Login";
import { BsEye } from "react-icons/bs";

import { Link, useParams } from "react-router-dom";

// import { Router } from "express";

const Topbar = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [prd, setPrd] = useState([]);
  useEffect(() => {
    const getData = async () => {
      const data = await axios({
        url: `http://localhost:4000/test2`,
        method: "GET",
      });
      setPrd(data.data);
      setIsLoading(false);
    };
    getData();
  }, []);

  if (isLoading) {
    return <>Loading...</>;
  }
  return (
    <div className="top-bar-sub">
      <header className="top-header">
        <h1 className="topbar_title">
          <div className="move-home">
            <Link to="/">
              <BsEye />{" "}
            </Link>{" "}
            <Link to="/">OOTD</Link>
          </div>
        </h1>
        <nav className="top-bar">
          <div className="menu-box-1">
            <ul>
              <li>
                <Link to={`/GoodsList/M`}>MAN</Link>
                <ul>
                  <li>
                    <Link to={`/`}>SUMMER</Link>
                    <ul>
                      <li>
                        <Link to={`/`}>TOP</Link>
                      </li>
                      <li>
                        <Link to={`/`}>BOTTOM</Link>
                      </li>
                    </ul>
                  </li>
                  <li>
                    <Link to={`/`}>WINTER</Link>
                    <ul>
                      <li>
                        <Link to={`/`}>TOP</Link>
                      </li>
                      <li>
                        <Link to={`/`}>BOTTOM</Link>
                      </li>
                    </ul>
                  </li>
                </ul>
              </li>
              <li>
                <Link to={`/GoodsList/W`}>WOMAN</Link>
                <ul>
                  <li>
                    <Link to={`/`}>SUMMER</Link>
                    <ul>
                      <li>
                        <Link to={`/`}>TOP</Link>
                      </li>
                      <li>
                        <Link to={`/`}>BOTTOM</Link>
                      </li>
                    </ul>
                  </li>
                  <li>
                    <Link to={`/`}>WINTER</Link>
                    <ul>
                      <li>
                        <Link to={`/`}>TOP</Link>
                      </li>
                      <li>
                        <Link to={`/`}>BOTTOM</Link>
                      </li>
                    </ul>
                  </li>
                </ul>
              </li>
              <li>
                <Link to={`/GoodsList/K`}>KIDS</Link>
                <ul>
                  <li>
                    <Link to={`/`}>SUMMER</Link>
                    <ul>
                      <li>
                        <Link to={`/`}>TOP</Link>
                      </li>
                      <li>
                        <Link to={`/`}>BOTTOM</Link>
                      </li>
                    </ul>
                  </li>
                  <li>
                    <Link to={`/`}>WINTER</Link>
                    <ul>
                      <li>
                        <Link to={`/`}>TOP</Link>
                      </li>
                      <li>
                        <Link to={`/`}>BOTTOM</Link>
                      </li>
                    </ul>
                  </li>
                </ul>
              </li>
              <li>
                <Link to={`/GoodsList/R`}>ACCESSORY</Link>
                <ul>
                  <li>
                    <Link to={`/`}>RING</Link>
                    <ul>
                      <li>
                        <Link to={`/`}>GOLD</Link>
                      </li>
                      <li>
                        <Link to={`/`}>DIAMOND</Link>
                      </li>
                    </ul>
                  </li>
                  <li>
                    <Link to={`/`}>NECKLACE</Link>
                    <ul>
                      <li>
                        <Link to={`/`}>GOLD</Link>
                      </li>
                      <li>
                        <Link to={`/`}>DIAMOND</Link>
                      </li>
                    </ul>
                  </li>
                </ul>
              </li>
            </ul>
          </div>
        </nav>

        <Login />
      </header>
    </div>
  );
};

export default Topbar;
