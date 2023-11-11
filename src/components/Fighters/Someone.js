import React from "react";
import CommonCSS from "../../css/common.module.css";
import ya from "../../../public/images/ya.png";
import BlockBox from "./BlockBox";
import bong from "../../../public/images/bong.png";
function Someone() {
  /* 현재 turn에 따라 box 활성화/비활성화 */

  return (
    <>
      <img src={ya} className={CommonCSS.profile} alt="YA" />
      <BlockBox />
    </>
  );
}

export default Someone;
