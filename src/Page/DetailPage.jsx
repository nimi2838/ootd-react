import React, { useState } from "react";
import Footer from "../components/Footer";
import Topbar from "../components/Topbar";
import DetailItem from "../DetailPage/DetailItem";
import { useLocation } from "react-router-dom";
import axios from "axios";

const WSBP = () => {
  const location = useLocation();
  // console.log(location);

  const [prdName, setPrdName] = useState("");
  const [prdEName, setPrdEName] = useState("");
  const [prdPrice, setPrdPrice] = useState("");
  const [prdid, setPrdid] = useState("");
  const [prdImg, setPrdImg] = useState("");
  const [prdCheck, setPrdCheck] = useState("");

  // useEffect(() => {
  const getData = async () => {
    const data = await axios({
      url: `http://localhost:4000/product`,
      method: "POST",
      data: { prdId: location.state.data },
    });

    setPrdid(data.data.prdId);
    setPrdName(data.data.prdName);
    setPrdEName(data.data.prdEName);
    setPrdPrice(data.data.prdPrice);
    setPrdImg(data.data.prdImg);
    setPrdCheck(data.data.checked);
  };
  getData();
  // }, []);

  return (
    <div>
      <Topbar />
      <DetailItem
        prdId={prdid}
        prdName={prdName}
        prdEName={prdEName}
        prdPrice={prdPrice}
        prdImg={prdImg}
        prdCheck={prdCheck}
      />
      <Footer />
    </div>
  );
};

export default WSBP;
