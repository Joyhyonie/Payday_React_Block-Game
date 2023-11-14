import React, { useEffect, useState } from "react";
import MainCSS from "../../css/main.module.css";
import setBlockOnTheBoard from "../board/Board";
function Footer({
  setGiveUpModal,
  setRuleDesModal,
  selectedBlock,
  selectedXy,
  checkBoard,
}) {
  const [errorText, setErrorText] = useState("");

  useEffect(() => {
    if (selectedBlock && selectedXy.length !== 0) {
      setErrorText("");
    }
  }, [errorText]);

  /* error/confirm에 따라 p 태그 색상 변경 */
  let block;
  switch (selectedBlock) {
    case 1:
      block = "첫";
      break;
    case 2:
      block = "두";
      break;
    case 3:
      block = "세";
      break;
    case 4:
      block = "네";
      break;
    case 5:
      block = "다섯";
      break;
  }

  const putBlock = () => {
    /* 놓기 전, errorText 노출 및 검증 */
    if (selectedBlock === null && selectedXy.length === 0) {
      setErrorText("! 블럭 및 위치를 선택해주세요.");
    } else if (selectedBlock === null) {
      setErrorText("! 블럭을 선택해주세요.");
    } else if (selectedXy.length === 0) {
      setErrorText("! 위치를 선택해주세요.");
    }

    /* setBlockOnTheBoard() 호출 */
    checkBoard(selectedBlock, selectedXy);
  };

  return (
    <div className={MainCSS.footer}>
      <p
        style={{ color: "#55C475", backgroundColor: "#343434", zIndex: "100" }}
      >
        {selectedBlock &&
          selectedXy.length !== 0 &&
          block +
            "번째 블럭을 " +
            selectedXy[0] +
            "열 " +
            selectedXy[1] +
            "행에 두는 것으로 선택하셨습니다."}
      </p>
      <p style={{ color: "#FE0E1A" }}>{errorText && errorText}</p>
      <button onClick={() => putBlock()}>놓기</button>
      <button className={MainCSS.giveUp} onClick={() => setGiveUpModal(true)}>
        기권
      </button>
      <button
        onMouseOver={() => setRuleDesModal(true)}
        onMouseOut={() => setRuleDesModal(false)}
      >
        ?
      </button>
    </div>
  );
}

export default Footer;
