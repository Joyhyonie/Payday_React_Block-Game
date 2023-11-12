import React from "react";
import MainCSS from "../../css/main.module.css";
import BoardItem from "./BoardItem";
function Board() {
  const board = Array.from({ length: 10 }, () => Array(10).fill({ value: 0 }));

  return (
    <>
      <div className={MainCSS.board}>
        {board.map((row, rowIndex) =>
          row.map((col, colIndex) => (
            <BoardItem
              key={rowIndex * 10 + colIndex}
              value={col.value}
              rowIndex={rowIndex}
              columnIndex={colIndex}
            />
          )),
        )}
      </div>
    </>
  );
}

export default Board;
