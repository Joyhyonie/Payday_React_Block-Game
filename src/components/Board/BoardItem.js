import React from "react";
import MainCSS from "../../css/main.module.css";
function BoardItem({ rowIndex, columnIndex, value }) {
  return <div className={MainCSS.boardItem}></div>;
}

export default BoardItem;
