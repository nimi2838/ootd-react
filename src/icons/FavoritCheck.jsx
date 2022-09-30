import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import { AiOutlineHeart, AiFillHeart } from "react-icons/ai";
import "../styles/icons/FavoritCheck.scss";
import axios from "axios";
import cn from "classnames";

const FavoritCheck = ({
  checked,
  checkToggle,
  allCheck,
  setAllCheck,
  // onToggle,
  // setAllCount,
  // allCount,
  // insertHeart,
}) => {
  return (
    // <div>
    //   <AiOutlineHeart className="voidheart hrt-btn" />
    // </div>
    <div className={cn("favorite", { checked: checked })}>
      {checked === true || checked === 1 ? (
        <AiFillHeart
          className="fullheart hrt-btn"
          onClick={() => {
            checkToggle();
            setAllCheck(allCheck - 1);
            // checkInsert();

            // console.log("checked", checked);
            // setAllCount(allCount - 1);
            // insertHeart(!checked, allCount - 1);
            // onToggle();
          }}
        />
      ) : (
        <AiOutlineHeart
          className="voidheart hrt-btn"
          onClick={() => {
            checkToggle();
            setAllCheck(allCheck + 1);
            // checkInsert();

            // console.log("checked", checked);
            // insertHeart(!checked, allCount + 1);
            // setAllCount(allCount + 1);
            // onToggle();
          }}
          //  onClick={onClick}
        />
      )}
    </div>
  );
};

export default FavoritCheck;
