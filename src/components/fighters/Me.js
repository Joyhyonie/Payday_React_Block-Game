import React, { useState } from "react";
import MainCSS from "../../css/main.module.css";
import bong from "../../../public/images/bong.png";
import kim from "../../../public/images/kim.png";
import lee from "../../../public/images/lee.png";
import BlockBox from "./BlockBox";
import Cover from "./Cover";
import Thinking from "./Thinking";
import MockBlockBox from "./MockBlockBox";
function Me({ turn, profile, selectedBlock, setSelectedBlock }) {
  /* 현재 turn에 따라 box 활성화/비활성화 */
  /* 사용자가 선택한 프로필 노출 (switch) */

  // [임시] 상위 컴포넌트로 이동 예정
  // findTheBestWay() 호출 시, true / Auto mode이고 currentTurn이 나일 때, true
  const [thinking, setThinking] = useState(false);

  let character;
  switch (profile) {
    case "bong":
      character = bong;
      break;
    case "kim":
      character = kim;
      break;
    case "lee":
      character = lee;
      break;
    default:
      character = bong;
  }

  return (
    <>
      {!turn ? <Cover /> : null}
      {thinking ? <Thinking /> : null}
      {turn ? (
        <BlockBox
          selectedBlock={selectedBlock}
          setSelectedBlock={setSelectedBlock}
        />
      ) : (
        <MockBlockBox />
      )}

      <img src={character} className={MainCSS.profile} alt="프로필" />
    </>
  );
}

export default Me;
