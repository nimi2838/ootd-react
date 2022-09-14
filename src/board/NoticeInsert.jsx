import React, { useState } from "react";
import { MdAdd } from "react-icons/md";
import "../styles/board/NoticeInsert.scss";

const NoticeInsert = ({ onInsert }) => {
  const [value, setValue] = useState("");
  const onChange = (e) => {
    setValue(e.target.value);
  };
  const onSubmit = (e) => {
    e.preventDefault();
    setValue("");
    onInsert(value);
  };

  return (
    <form className="NoticeInsert" onSubmit={onSubmit}>
      <input
        onChange={onChange}
        value={value}
        placeholder="할 일을 입력하세요"
      />
      <button className="Insert-button" type="submit">
        <MdAdd />
      </button>
    </form>
  );
};

export default NoticeInsert;
