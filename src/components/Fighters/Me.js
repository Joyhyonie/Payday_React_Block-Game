import React from "react";
import CommonCSS from "../../css/common.module.css";
import bong from "../../../public/images/bong.png";
import BlockBox from "./BlockBox";
function Me() {
  /* 현재 turn에 따라 box 활성화/비활성화 */
  /* 사용자가 선택한 프로필 노출 (switch) */

  return (
    <>
      <BlockBox />
      <img src={bong} className={CommonCSS.profile} alt="봉급이" />
    </>
  );
}

export default Me;
