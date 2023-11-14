import React, { useEffect, useState } from "react";
import MainCSS from "../../css/main.module.css";
import BoardItem from "./BoardItem";
function MockBoard({ mockBoard, selectedXy, setSelectedXy }) {
  return (
    <>
      <div className={MainCSS.board}>
        {/* selectedBlock과 selectedXy가 존재할 때 활성화 / 아닐 경우, BoardItem */}
        {mockBoard.map((row, rowIndex) =>
          row.map((col, colIndex) => (
            <BoardItem
              key={rowIndex * 10 + colIndex}
              value={col.value}
              color={col.color}
              selectedXy={selectedXy}
              setSelectedXy={setSelectedXy}
              rowIndex={rowIndex}
              colIndex={colIndex}
            />
          )),
        )}
      </div>
    </>
  );
}

export default MockBoard;
