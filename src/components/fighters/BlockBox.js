import React, { useEffect, useState } from "react";
import MainCSS from "../../css/main.module.css";
import one from "../../../public/images/blockOne.png";
import two from "../../../public/images/blockTwo.png";
import three from "../../../public/images/blockThree.png";
import four from "../../../public/images/blockFour.png";
import five from "../../../public/images/blockFive.png";

function BlockBox({ selectedBlock, setSelectedBlock }) {
  /* 선택된 블럭에 따른 색 변경 */
  const style = (blockNumber) => {
    if (selectedBlock !== null && selectedBlock !== blockNumber) {
      return { filter: "opacity(0.25)" };
    }
    return {};
  };

  return (
    <div className={MainCSS.blockBox}>
      <div>
        <img
          src={one}
          onClick={() => setSelectedBlock(1)}
          style={style(1)}
          alt="첫번째 블럭"
        />
      </div>
      <div>
        <img
          src={two}
          onClick={() => setSelectedBlock(2)}
          style={style(2)}
          alt="두번째 블럭"
        />
      </div>
      <div>
        <img
          src={three}
          onClick={() => setSelectedBlock(3)}
          style={style(3)}
          alt="세번째 블럭"
        />
      </div>
      <div>
        <img
          src={four}
          onClick={() => setSelectedBlock(4)}
          style={style(4)}
          alt="네번째 블럭"
        />
      </div>
      <div>
        <img
          src={five}
          onClick={() => setSelectedBlock(5)}
          style={style(5)}
          alt="다섯번째 블럭"
        />
      </div>
    </div>
  );
}

export default BlockBox;
