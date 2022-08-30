import React, { useEffect, useState } from "react";
import Footer from "../components/Footer";
import Topbar from "../components/Topbar";
import SubDetailWoman from "../sub_detail/SubDetailWoman";
import { useLocation } from "react-router-dom";
import axios from "axios";

const WSBP = () => {
  const location = useLocation();
  // console.log(location);

  const [prdName, setPrdName] = useState("");
  const [prdEName, setPrdEName] = useState("");
  const [prdPrice, setPrdPrice] = useState("");
  const [prdId, setPrdId] = useState("");
  const [prdImg, setPrdImg] = useState("");

  // useEffect(() => {
  const getData = async () => {
    const data = await axios({
      url: `http://localhost:4000/product`,
      method: "POST",
      data: { prdId },
    });
    // console.log("prdid", prdId);

    // console.log(data.data);

    setPrdId(location.state.data);
    setPrdName(data.data.prdName);
    setPrdEName(data.data.prdEName);
    setPrdPrice(data.data.prdPrice);
    setPrdImg(data.data.prdimg);
  };
  getData();
  // }, []);

  return (
    <div>
      <Topbar />
      <SubDetailWoman
        prdId={prdId}
        prdName={prdName}
        prdEName={prdEName}
        prdPrice={prdPrice}
        prdImg={prdImg}
      />
      <Footer />
    </div>
  );
};

export default WSBP;
