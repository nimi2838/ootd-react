import React, { useEffect, useState } from "react";
import Footer from "../components/Footer";
import Ring from "../components/Ring";
import Topbar from "../components/Topbar";
import axios from "axios";
import { useLocation } from "react-router-dom";
const RGDP = () => {
  const location = useLocation();
  const prdno = location.state.prdNo;
  const [prd, setPrd] = useState([]);
  useEffect(() => {
    const getData = async () => {
      const data = await axios({
        url: `http://localhost:4000/prdlist`,
        method: "POST",
        data: { prdno },
      });
      setPrd(data.data);
    };
    getData();
  }, []);
  return (
    <div>
      <Topbar />
      <Ring prd={prd} />
      <Footer />
    </div>
  );
};

export default RGDP;
