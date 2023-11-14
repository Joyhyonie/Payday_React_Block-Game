import React, { useEffect, useState } from "react";
import MainCSS from "../../css/main.module.css";
function MockBoardItem({
  rowIndex,
  colIndex,
  value,
  color,
  selectedXy,
  setSelectedXy,
}) {
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

  const getColor = () => {
    switch (color) {
      case "red":
        return { background: "#FE0E1A", border: "2px solid #D3151F" };
      case "yellow":
        return { background: "#FEDD50", border: "2px solid #E5C84C" };
      case "green":
        return { background: "#55C475", border: "2px solid #46A461" };
      case "blue":
        return { background: "#0155B6", border: "2px solid #05438A" };
      case "purple":
        return { background: "#B23BB1", border: "2px solid #962D95" };
    }
  };

  return (
    <div
      className={MainCSS.boardItem}
      onClick={clickedBoardItem}
      style={value === 1 ? getColor() : getStyle()}
    ></div>
  );
}

export default MockBoardItem;
