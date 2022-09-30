import React from "react";
import "../styles/Footer.scss";
const Footer = () => {
  return (
    <footer className="company">
      <h3>주식회사 OOTD</h3>
      <ul>
        <li>본사 : 서울시 강남구 테헤란로 14길 15 SBS Building</li>
        <li>사업자등록번호 : 123-4567-890</li>
        <li>물류센터 : 경상남도 양산시 물금읍 증산리 848-5</li>
        <li>고객센터 : 1600-5252</li>
        <li>고객센터 운영시간 : 평일 09:00~18:00</li>
        <li>Copyright ⓒ OOTD All rights reserved.</li>
      </ul>
    </footer>
  );
};

export default Footer;
