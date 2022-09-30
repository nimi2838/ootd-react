import React, { useState } from "react";
import "../styles/Pop-up.scss";

const Popup = () => {
  // const [row, Setrow] = useState("curr");
  const [active, setActive] = useState(true);

  return (
    <div>
      <input
        type="checkbox"
        id="my-modal-3"
        className="modal-toggle"
        onChange={() => {}}
        checked={active}
      />
      <div className="modal">
        <div className="modal-box relative">
          <label
            onClick={() => {
              setActive(!active);
            }}
            htmlFor="my-modal-3"
            className="btn btn-sm btn-circle absolute right-2 top-2"
          >
            ✕
          </label>
          <h3 className="text-lg font-bold">4조 가상의 쇼핑몰 사이트 만들기</h3>
          <p className="py-4">
            조원 : 최흥진,유안상,봉하늘,배상운 <br />
            간단(?)한 쇼핑몰 페이지를 만들어 보았습니다.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Popup;
