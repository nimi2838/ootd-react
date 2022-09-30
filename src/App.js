import React, { useEffect, useState } from "react";
import axios from "axios";
import "tailwindcss/tailwind.css";
import { useParams } from "react-router-dom";
import Topbar from "./components/Topbar";
import MainPG from "./components/MainPG";
import Footer from "./components/Footer";
import Popup from "./components/Pop-up";

// WGDP 페이지 prdno 에러
// Woman 페이지 state 배열로 못 넣는지 물어보기

//Board 관련 에러시 아래 명령어 터미널에 적용
//npm install --save @ckeditor/ckeditor5-react @ckeditor/ckeditor5-build-classic

function App() {
  let { params } = useParams();
  const [prd, setPrd] = useState([]);

  const [isLoading, setIsLoading] = useState(true);
  useEffect(() => {
    const getData = async () => {
      const data = await axios({
        url: `http://localhost:4000/test2`,
        method: "GET",
      });
      // console.log("data", data.data);
      setPrd(data.data);
      setIsLoading(false);
      // console.log(prd[2].prdName);
    };
    getData();
  }, []);

  if (isLoading) {
    return <>Loading...</>;
  }

  return (
    <div>
      <Topbar />
      <Popup />
      <MainPG />
      <Footer />
    </div>
  );
}

export default App;
