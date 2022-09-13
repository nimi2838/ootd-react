import React from "react";
import NoticeListItem from "./NoticeListItem";
import "../styles/board/NoticeList.scss";

const NoticeList = ({
  notices,
  onRemove,
  onToggle,
  onInsertToggle,
  setSelectedNotice,
}) => {
  return (
    <ul className="NoticeList">
      {notices.map((Notice, index) => {
        //console.log(`${index}번 Notice `, Notice);
        return (
          <NoticeListItem
            Notice={Notice}
            key={index}
            onRemove={onRemove}
            onToggle={onToggle}
            onInsertToggle={onInsertToggle}
            setSelectedNotice={setSelectedNotice}
          />
        );
      })}
    </ul>
  );
};

export default NoticeList;
