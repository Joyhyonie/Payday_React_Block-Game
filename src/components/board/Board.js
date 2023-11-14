import React from "react";
import MainCSS from "../../css/main.module.css";
import BoardItem from "./BoardItem";
function Board({ board, selectedXy, setSelectedXy }) {
  return (
    <>
      <div className={MainCSS.board}>
        {board.map((row, rowIndex) =>
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

export default Board;
