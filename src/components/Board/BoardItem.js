import React from "react";
import BoardCSS from "../../css/board.module.css";
function BoardItem({ rowIndex, columnIndex, value }) {
  return <div className={BoardCSS.boardItem}></div>;
}

export default BoardItem;
