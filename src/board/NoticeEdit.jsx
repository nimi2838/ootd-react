import React, { useEffect, useState } from "react";

import "../styles/board/NoticeEdit.scss";

const NoticeEdit = ({ selectedNotice, onUpdate, onInsertToggle }) => {
  const [value, setValue] = useState("");

  const onChange = (e) => {
    setValue(e.target.value);
  };

  const onSubmit = (e) => {
    e.preventDefault();
    onUpdate(selectedNotice.id, value);
    setValue("");
  };

  useEffect(() => {
    setValue(selectedNotice.text);
  }, [selectedNotice]);

  return (
    <div
      className="background"
      onClick={(e) => {
        if (e.target !== e.currentTarget) return;
        onInsertToggle();
      }}
    >
      <form onSubmit={onSubmit} className="noticeedit__insert">
        <h2>수정하기</h2>
        <input
          onChange={onChange}
          value={value}
          placeholder="할 일을 입력하세요"
        />
        <button type="submit">수정하기</button>
      </form>
    </div>
  );
};

export default NoticeEdit;
