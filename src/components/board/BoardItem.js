import React, { useEffect, useState } from "react";
import MainCSS from "../../css/main.module.css";
function BoardItem({ rowIndex, colIndex, value, selectedXy, setSelectedXy }) {
  const clickedBoardItem = () => {
    setSelectedXy([rowIndex, colIndex]);
  };

  const getStyle = () => {
    if (rowIndex === selectedXy[0] && colIndex === selectedXy[1]) {
      return {
        border: "2px solid #70CBFF",
      };
    }
    return {};
  };

  return (
    <div
      className={MainCSS.boardItem}
      onClick={clickedBoardItem}
      style={getStyle()}
    ></div>
  );
}

export default BoardItem;
