import React from "react";
import {
  MdCheckBoxOutlineBlank,
  MdRemoveCircleOutline,
  MdCheckBox,
  MdModeEditOutline,
} from "react-icons/md";
import cn from "classnames";
import "../styles/board/NoticeListItem.scss";

const NoticeListItem = ({
  Notice,
  onRemove,
  onToggle,
  onInsertToggle,
  setSelectedNotice,
}) => {
  const { id, text, checked } = Notice;
  //console.log(`${id}번 NoticelistItem에서 Notice를 출력함`, Notice);
  return (
    <li className="NoticeListItem">
<<<<<<< Updated upstream
      <div
        className={cn("checkbox", { checked: checked })}
=======
      {/* <div
        className={cn("checkbox1", { checked: checked })}
>>>>>>> Stashed changes
        onClick={() => {
          onToggle(id);
        }}
      >
        {checked ? <MdCheckBox /> : <MdCheckBoxOutlineBlank />}
      </div> */}
      <div className="NoticeNumber">{id}</div>
      <div className="text">{text}</div>
      {/* <div
        className="edit"
        onClick={() => {
          onInsertToggle();
          setSelectedNotice((prev) => Notice);
        }}
      >
        <MdModeEditOutline />
      </div>
      <div
        className="remove"
        onClick={() => {
          onRemove(id);
        }}
      >
        <MdRemoveCircleOutline />
      </div> */}
      <div className="NoticeListDate"></div>
    </li>
  );
};

export default NoticeListItem;
