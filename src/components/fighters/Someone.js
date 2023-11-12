import React from "react";
import MainCSS from "../../css/main.module.css";
import ya from "../../../public/images/ya.png";
import BlockBox from "./BlockBox";
import bong from "../../../public/images/bong.png";
import Cover from "./Cover";
function Someone({ currentTurn }) {
  /* 현재 turn에 따라 box 활성화/비활성화 */

  return (
    <>
      {currentTurn ? <Cover /> : null}
      <img src={ya} className={MainCSS.profile} alt="YA" />
      <BlockBox />
    </>
  );
}

export default Someone;
