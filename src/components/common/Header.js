import React, { useEffect, useState } from "react";
import miniLogo from "../../../public/images/mini-logo.png";
import robot from "../../../public/images/robot.png";
import MainCSS from "../../css/main.module.css";
import TypingText from "./TypingText";
function Header({
  nickname,
  selectedBlock,
  selectedXy,
  gameStart,
  setGameStart,
  turn,
  thinking,
}) {
  const [text, setText] = useState("");
  const [textParagraph, setTextParagraph] = useState(1);

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

  useEffect(() => {
    if (!gameStart) {
      console.log("첫번째 불림!");
      // gameStart가 false일 때(처음일 때),
      const introTimer = setTimeout(() => {
        setText(
          nickname +
            "님! 반갑습니다 (^o^)/ :*:･｡,☆ﾟ’･:*:･｡, \n" +
            "게임 설명은 오른쪽 하단을 참고해주세요! 그럼 게임 시작 ~!",
        );
        setTextParagraph(2);
      }, 2500);

      const startTimer = setTimeout(() => {
        setGameStart(true); // intro text 끝난 후, GameStart
      }, 8000);

      const clearTimers = () => {
        clearTimeout(introTimer);
        clearTimeout(startTimer);
      };

      return () => clearTimers();
    } else if (turn) {
      console.log("두번째 불림!");
      // turn이 true일 때 (setTimeOut으로 늦추기)
      setText(
        nickname +
          "님이 " +
          block +
          "번째 블럭을 " +
          selectedXy[0] +
          "열 " +
          selectedXy[1] +
          "행에 두었습니다.\n" +
          "상대방의 블럭 및 위치를 선택한 후, 놓기를 클릭해주세요.",
      );
      setTextParagraph(2);
    } else if (!turn) {
      console.log("세번째 불림!");
      // turn이 false일 때 (setTimeOut으로 늦추기)
      setText(
        "상대방이 " +
          block +
          "번째 블럭을 " +
          selectedXy[0] +
          "열 " +
          selectedXy[1] +
          "행에 두었습니다.\n" +
          nickname +
          "님이 놓을 블럭 및 위치를 선택한 후, 놓기를 클릭해주세요.",
      );
      setTextParagraph(2);
    } else if (thinking) {
      console.log("네번째 불림!");
      // thinking이 true일 때
      setText(nickname + "님이 고민 중입니다.....");
      setTextParagraph(1);
    }
  }, [gameStart, turn]);

  return (
    <div className={MainCSS.header}>
      <img src={miniLogo} className={MainCSS.miniLogo} alt="mini-logo" />
      <div className={MainCSS.desBox}>
        <img src={robot} className={MainCSS.robot} alt="robot" />
        <TypingText text={text} textParagraph={textParagraph} />
      </div>
    </div>
  );
}

export default Header;
