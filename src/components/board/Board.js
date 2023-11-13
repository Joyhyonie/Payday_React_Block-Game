import React, { useEffect } from "react";
import MainCSS from "../../css/main.module.css";
import BoardItem from "./BoardItem";
function Board({ board, selectedBlock, selectedXy, setSelectedXy }) {
  // [임시] 출력용
  useEffect(() => {
    console.log(selectedXy);
  }, [selectedXy]);

  return (
    <>
      <div className={MainCSS.board}>
        {board.map((row, rowIndex) =>
          row.map((col, colIndex) => (
            <BoardItem
              key={rowIndex * 10 + colIndex}
              value={col.value}
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
