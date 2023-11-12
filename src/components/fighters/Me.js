import React from "react";
import MainCSS from "../../css/main.module.css";
import bong from "../../../public/images/bong.png";
import BlockBox from "./BlockBox";
import Cover from "./Cover";
function Me({ currentTurn }) {
  /* 현재 turn에 따라 box 활성화/비활성화 */
  /* 사용자가 선택한 프로필 노출 (switch) */

  return (
    <>
      {!currentTurn ? <Cover /> : null}
      <BlockBox />
      <img src={bong} className={MainCSS.profile} alt="봉급이" />
    </>
  );
}

export default Me;
