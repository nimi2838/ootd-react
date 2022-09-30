import React from "react";
import { Link, useParams } from "react-router-dom";

const Kids = ({ prd }) => {
  const { id } = useParams();
  console.log("prd", prd);

  return (
    <div>
      <section>
        <div className="sub-menu">
          <h1>KIDS</h1>
        </div>
        <div className="main-pic">
          <img
            src="https://search.pstatic.net/sunny/?src=http%3A%2F%2Fimg.theqoo.net%2Fimg%2FJGmXb.jpg&type=sc960_832"
            alt=""
          />
        </div>
        <div className="list-box-1 con">
          <ul className="row">
            <li className="cell">
              <Link to="/DetailPage" state={{ data: "K001" }}>
                <div className="img-box">
                  <img src={prd.length > 0 ? prd[0].prdImg : ""} alt="" />
                  <div className="ico-view">
                    <i className="fas fa-search" />
                  </div>
                </div>
                <div className="prod-name">
                  {prd.length > 0 && prd[0].prdName}
                </div>
                {prd.length > 0 && (
                  <div className="prod-price">
                    {" "}
                    {prd[0].prdPrice
                      .toString()
                      .replace(/\B(?=(\d{3})+(?!\d))/g, ",")}
                  </div>
                )}
                <div className="free-del">
                  <span />
                </div>
              </Link>
            </li>
            <li className="cell">
              <Link to="/DetailPage" state={{ data: "K002" }}>
                <div className="img-box">
                  <img src={prd.length > 0 ? prd[1].prdImg : ""} alt="" />
                  <div className="ico-view">
                    <i className="fas fa-search" />
                  </div>
                </div>
                <div className="prod-name">
                  {" "}
                  {prd.length > 0 && prd[1].prdName}
                </div>
                {prd.length > 0 && (
                  <div className="prod-price">
                    {" "}
                    {prd[1].prdPrice
                      .toString()
                      .replace(/\B(?=(\d{3})+(?!\d))/g, ",")}
                  </div>
                )}
              </Link>
            </li>

            <li className="cell">
              <Link to="/DetailPage" state={{ data: "K003" }}>
                <div className="img-box">
                  <img src={prd.length > 0 ? prd[2].prdImg : ""} alt="" />
                  <div className="ico-view">
                    <i className="fas fa-search" />
                  </div>
                </div>
                <div className="prod-name">
                  {prd.length > 0 && prd[2].prdName}
                </div>
                {prd.length > 0 && (
                  <div className="prod-price">
                    {" "}
                    {prd[2].prdPrice
                      .toString()
                      .replace(/\B(?=(\d{3})+(?!\d))/g, ",")}
                  </div>
                )}
              </Link>
            </li>
            <li className="cell">
              <Link to="/DetailPage" state={{ data: "K004" }}>
                <div className="img-box">
                  <img src={prd.length > 0 ? prd[3].prdImg : ""} alt="" />
                  <div className="ico-view">
                    <i className="fas fa-search" />
                  </div>
                </div>
                <div className="prod-name">
                  {prd.length > 0 && prd[3].prdName}
                </div>
                {prd.length > 0 && (
                  <div className="prod-price">
                    {" "}
                    {prd[3].prdPrice
                      .toString()
                      .replace(/\B(?=(\d{3})+(?!\d))/g, ",")}
                  </div>
                )}
              </Link>
            </li>
            <li className="cell">
              <Link to="/DetailPage" state={{ data: "K005" }}>
                <div className="img-box">
                  <img src={prd.length > 0 ? prd[4].prdImg : ""} alt="" />
                  <div className="ico-view">
                    <i className="fas fa-search" />
                  </div>
                </div>
                <div className="prod-name">
                  {prd.length > 0 && prd[4].prdName}{" "}
                </div>
                {prd.length > 0 && (
                  <div className="prod-price">
                    {" "}
                    {prd[4].prdPrice
                      .toString()
                      .replace(/\B(?=(\d{3})+(?!\d))/g, ",")}
                  </div>
                )}
              </Link>
            </li>
            <li className="cell">
              <Link to="/DetailPage" state={{ data: "K006" }}>
                <div className="img-box">
                  <img src={prd.length > 0 ? prd[5].prdImg : ""} alt="" />
                  <div className="ico-view">
                    <i className="fas fa-search" />
                  </div>
                </div>
                <div className="prod-name">
                  {prd.length > 0 && prd[5].prdName}
                </div>
                {prd.length > 0 && (
                  <div className="prod-price">
                    {" "}
                    {prd[5].prdPrice
                      .toString()
                      .replace(/\B(?=(\d{3})+(?!\d))/g, ",")}
                  </div>
                )}
              </Link>
            </li>
            <li className="cell">
              <Link to="/DetailPage" state={{ data: "K007" }}>
                <div className="img-box">
                  <img src={prd.length > 0 ? prd[6].prdImg : ""} alt="" />
                  <div className="ico-view">
                    <i className="fas fa-search" />
                  </div>
                </div>
                <div className="prod-name">
                  {prd.length > 0 && prd[6].prdName}{" "}
                </div>
                {prd.length > 0 && (
                  <div className="prod-price">
                    {" "}
                    {prd[6].prdPrice
                      .toString()
                      .replace(/\B(?=(\d{3})+(?!\d))/g, ",")}
                  </div>
                )}
              </Link>
              <div className="free-del">
                <span />
              </div>
            </li>
            <li className="cell">
              <Link to="/DetailPage" state={{ data: "K008" }}>
                <div className="img-box">
                  <img src={prd.length > 0 ? prd[7].prdImg : ""} alt="" />
                  <div className="ico-view">
                    <i className="fas fa-search" />
                  </div>
                </div>
                <div className="prod-name">
                  {prd.length > 0 && prd[7].prdName}{" "}
                </div>
                {prd.length > 0 && (
                  <div className="prod-price">
                    {" "}
                    {prd[7].prdPrice
                      .toString()
                      .replace(/\B(?=(\d{3})+(?!\d))/g, ",")}
                  </div>
                )}
              </Link>
            </li>
            <li className="cell">
              <Link to="/DetailPage" state={{ data: "K009" }}>
                <div className="img-box">
                  <img src={prd.length > 0 ? prd[8].prdImg : ""} alt="" />
                  <div className="ico-view">
                    <i className="fas fa-search" />
                  </div>
                </div>
                <div className="prod-name">
                  {prd.length > 0 && prd[8].prdName}
                </div>
                {prd.length > 0 && (
                  <div className="prod-price">
                    {" "}
                    {prd[8].prdPrice
                      .toString()
                      .replace(/\B(?=(\d{3})+(?!\d))/g, ",")}
                  </div>
                )}
                <div className="free-del">
                  <span />
                </div>
              </Link>
            </li>
            <li className="cell">
              <Link to="/DetailPage" state={{ data: "K010" }}>
                <div className="img-box">
                  <img src={prd.length > 0 ? prd[9].prdImg : ""} alt="" />
                  <div className="ico-view">
                    <i className="fas fa-search" />
                  </div>
                </div>
                <div className="prod-name">
                  {prd.length > 0 && prd[9].prdName}{" "}
                </div>
                {prd.length > 0 && (
                  <div className="prod-price">
                    {" "}
                    {prd[9].prdPrice
                      .toString()
                      .replace(/\B(?=(\d{3})+(?!\d))/g, ",")}
                  </div>
                )}
              </Link>
              <div className="free-del">
                <span />
              </div>
            </li>
            <li className="cell">
              <Link to="/DetailPage" state={{ data: "K011" }}>
                <div className="img-box">
                  <img src={prd.length > 0 ? prd[10].prdImg : ""} alt="" />
                  <div className="ico-view">
                    <i className="fas fa-search" />
                  </div>
                </div>
                <div className="prod-name">
                  {prd.length > 0 && prd[10].prdName}
                </div>
                {prd.length > 0 && (
                  <div className="prod-price">
                    {" "}
                    {prd[10].prdPrice
                      .toString()
                      .replace(/\B(?=(\d{3})+(?!\d))/g, ",")}
                  </div>
                )}
              </Link>
            </li>
            <li className="cell">
              <Link to="/DetailPage" state={{ data: "K012" }}>
                <div className="img-box">
                  <img src={prd.length > 0 ? prd[11].prdImg : ""} alt="" />
                  <div className="ico-view">
                    <i className="fas fa-search" />
                  </div>
                </div>
                <div className="prod-name">
                  {prd.length > 0 && prd[11].prdName}
                </div>
                {prd.length > 0 && (
                  <div className="prod-price">
                    {" "}
                    {prd[11].prdPrice
                      .toString()
                      .replace(/\B(?=(\d{3})+(?!\d))/g, ",")}
                  </div>
                )}
                <div className="free-del">
                  <span />
                </div>
              </Link>
            </li>
            <li className="cell">
              <Link to="/DetailPage" state={{ data: "K013" }}>
                <div className="img-box">
                  <img src={prd.length > 0 ? prd[12].prdImg : ""} alt="" />
                  <div className="ico-view">
                    <i className="fas fa-search" />
                  </div>
                </div>
                <div className="prod-name">
                  {prd.length > 0 && prd[12].prdName}{" "}
                </div>
                {prd.length > 0 && (
                  <div className="prod-price">
                    {" "}
                    {prd[12].prdPrice
                      .toString()
                      .replace(/\B(?=(\d{3})+(?!\d))/g, ",")}
                  </div>
                )}
              </Link>
            </li>
            <li className="cell">
              <Link to="/DetailPage" state={{ data: "K014" }}>
                <div className="img-box">
                  <img src={prd.length > 0 ? prd[13].prdImg : ""} alt="" />
                  <div className="ico-view">
                    <i className="fas fa-search" />
                  </div>
                </div>
                <div className="prod-name">
                  {prd.length > 0 && prd[13].prdName}{" "}
                </div>
                {prd.length > 0 && (
                  <div className="prod-price">
                    {" "}
                    {prd[13].prdPrice
                      .toString()
                      .replace(/\B(?=(\d{3})+(?!\d))/g, ",")}
                  </div>
                )}
              </Link>
            </li>
            <li className="cell">
              <Link to="/DetailPage" state={{ data: "K015" }}>
                <div className="img-box">
                  <img src={prd.length > 0 ? prd[14].prdImg : ""} alt="" />
                  <div className="ico-view">
                    <i className="fas fa-search" />
                  </div>
                </div>

                <div className="prod-name">
                  {prd.length > 0 && prd[14].prdName}
                </div>
                {prd.length > 0 && (
                  <div className="prod-price">
                    {" "}
                    {prd[14].prdPrice
                      .toString()
                      .replace(/\B(?=(\d{3})+(?!\d))/g, ",")}
                  </div>
                )}
              </Link>
              <div className="free-del">
                <span />
              </div>
            </li>
            <li className="cell">
              <Link to="/DetailPage" state={{ data: "K016" }}>
                <div className="img-box">
                  <img src={prd.length > 0 ? prd[15].prdImg : ""} alt="" />
                  <div className="ico-view">
                    <i className="fas fa-search" />
                  </div>
                </div>
                <div className="prod-name">
                  {prd.length > 0 && prd[15].prdName}
                </div>
                {prd.length > 0 && (
                  <div className="prod-price">
                    {" "}
                    {prd[15].prdPrice
                      .toString()
                      .replace(/\B(?=(\d{3})+(?!\d))/g, ",")}
                  </div>
                )}
                <div className="free-del">
                  <span />
                </div>
              </Link>
            </li>
            <li className="cell">
              <Link to="/DetailPage" state={{ data: "K017" }}>
                <div className="img-box">
                  <img src={prd.length > 0 ? prd[16].prdImg : ""} alt="" />
                  <div className="ico-view">
                    <i className="fas fa-search" />
                  </div>
                </div>
                <div className="prod-name">
                  {prd.length > 0 && prd[16].prdName}
                </div>
                {prd.length > 0 && (
                  <div className="prod-price">
                    {" "}
                    {prd[16].prdPrice
                      .toString()
                      .replace(/\B(?=(\d{3})+(?!\d))/g, ",")}
                  </div>
                )}
              </Link>
            </li>
            <li className="cell">
              <Link to="/DetailPage" state={{ data: "K018" }}>
                <div className="img-box">
                  <img src={prd.length > 0 ? prd[17].prdImg : ""} alt="" />
                  <div className="ico-view">
                    <i className="fas fa-search" />
                  </div>
                </div>

                <div className="prod-name">
                  {prd.length > 0 && prd[17].prdName}
                </div>
                {prd.length > 0 && (
                  <div className="prod-price">
                    {" "}
                    {prd[17].prdPrice
                      .toString()
                      .replace(/\B(?=(\d{3})+(?!\d))/g, ",")}
                  </div>
                )}
                <div className="free-del">
                  <span />
                </div>
              </Link>
            </li>
            <li className="cell">
              <Link to="/DetailPage" state={{ data: "K019" }}>
                <div className="img-box">
                  <img src={prd.length > 0 ? prd[18].prdImg : ""} alt="" />
                  <div className="ico-view">
                    <i className="fas fa-search" />
                  </div>
                </div>
                <div className="prod-name">
                  {prd.length > 0 && prd[18].prdName}
                </div>
                {prd.length > 0 && (
                  <div className="prod-price">
                    {" "}
                    {prd[18].prdPrice
                      .toString()
                      .replace(/\B(?=(\d{3})+(?!\d))/g, ",")}
                  </div>
                )}
                <div className="free-del">
                  <span />
                </div>
              </Link>
            </li>
            <li className="cell">
              <Link to="/DetailPage" state={{ data: "K020" }}>
                <div className="img-box">
                  <img src={prd.length > 0 ? prd[19].prdImg : ""} alt="" />
                  <div className="ico-view">
                    <i className="fas fa-search" />
                  </div>
                </div>
                <div className="prod-name">
                  {prd.length > 0 && prd[19].prdName}
                </div>
                {prd.length > 0 && (
                  <div className="prod-price">
                    {" "}
                    {prd[19].prdPrice
                      .toString()
                      .replace(/\B(?=(\d{3})+(?!\d))/g, ",")}
                  </div>
                )}
                <div className="free-del">
                  <span />
                </div>
              </Link>
            </li>
          </ul>
        </div>
      </section>
    </div>
  );
};

export default Kids;
