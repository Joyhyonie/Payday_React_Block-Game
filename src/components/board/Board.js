import React, { useEffect, useState } from "react";
import MainCSS from "../../css/main.module.css";
import BoardItem from "./BoardItem";
import MockBoardItem from "./MockBoardItem";
function Board({
  board,
  selectedBlock,
  selectedXy,
  setSelectedXy,
  setBlockOnTheBoard,
}) {
  /* 블럭/위치를 선택했을 때, 미리보기를 위해 set */
  if (selectedBlock && selectedXy.length !== 0) {
  }

  return (
    <>
      <div className={MainCSS.board}>
        {board.map((row, rowIndex) =>
          row.map((col, colIndex) => (
            /* MockBoardItem */
            // selectedBlock과 selectedXy가 존재할 때 활성화 / 아닐 경우, BoardItem

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

export default Board;
