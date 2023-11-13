import React, { useState } from "react";
import MainCSS from "../../css/main.module.css";
import bong from "../../../public/images/bong.png";
import BlockBox from "./BlockBox";
import Cover from "./Cover";
import Thinking from "./Thinking";
function Me({ currentTurn }) {
  /* 현재 turn에 따라 box 활성화/비활성화 */
  /* 사용자가 선택한 프로필 노출 (switch) */

  // [임시] 상위 컴포넌트로 이동 예정
  // findTheBestWay() 호출 시, true / Auto mode이고 currentTurn이 나일 때, true
  const [thinking, setThinking] = useState(true);

  return (
    <>
      {!currentTurn ? <Cover /> : null}
      {thinking ? <Thinking /> : null}
      <BlockBox />
      <img src={bong} className={MainCSS.profile} alt="봉급이" />
    </>
  );
}

export default Me;
