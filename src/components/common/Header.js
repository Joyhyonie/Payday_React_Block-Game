import React, { useEffect, useState } from "react";
import miniLogo from "../../../public/images/mini-logo.png";
import robot from "../../../public/images/robot.png";
import MainCSS from "../../css/main.module.css";
import TypingText from "./TypingText";
function Header({
  autoMode,
  nickname,
  prevBlock,
  prevXy,
  setGameStart,
  turn,
  info,
}) {
  const [text, setText] = useState("");
  const [textParagraph, setTextParagraph] = useState(1);

  let block;
  switch (prevBlock) {
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
    setText("WELCOME TO BLOCK GAME");
  }, []);

  /* intro */
  useEffect(() => {
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
      if (turn) {
        // autoMode ? 내가 선공이고, auto일 때의 text : 내가 선공이고, passive일 때의 text;
        if (autoMode) {
          setText(nickname + "님이 선공! 자동으로 블럭을 둡니다.");
          setTextParagraph(1);
        } else {
          setText(
            nickname +
              "님이 선공!\n" +
              nickname +
              "님이 놓을 블럭 및 위치를 선택한 후, 놓기를 클릭해주세요.",
          );
          setTextParagraph(2);
        }
      } else {
        setText(
          nickname +
            "님이 후공!\n" +
            "상대방의 블럭 및 위치를 선택한 후, 놓기를 클릭해주세요.",
        );
        setTextParagraph(2);
      }
    }, 7000);

    const clearTimers = () => {
      clearTimeout(introTimer);
      clearTimeout(startTimer);
    };

    return () => clearTimers();
  }, []);

  useEffect(() => {
    if (info === "someone") {
      // 내가 두었고, 상대방이 둘 차례일 때,
      setText(
        nickname +
          "님이 " +
          block +
          "번째 블럭을 " +
          prevXy[0] +
          "열 " +
          prevXy[1] +
          "행에 두었습니다.\n" +
          "상대방의 블럭 및 위치를 선택한 후, 놓기를 클릭해주세요.",
      );
      setTextParagraph(2);
    } else if (info === "auto") {
      // 상대방이 두었고, 내가 auto일 때,
      setText(nickname + "님은 고민 중.....");
      setTextParagraph(1);
    } else if (info === "passive") {
      // 상대방이 두었고, 내가 passive일 때,
      setText(
        "상대방이 " +
          block +
          "번째 블럭을 " +
          prevXy[0] +
          "열 " +
          prevXy[1] +
          "행에 두었습니다.\n" +
          nickname +
          "님이 놓을 블럭 및 위치를 선택한 후, 놓기를 클릭해주세요.",
      );
      setTextParagraph(2);
    }
  }, [info]);

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
