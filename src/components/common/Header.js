import React, { useEffect, useState } from "react";
import miniLogo from "../../../public/images/mini-logo.png";
import robot from "../../../public/images/robot.png";
import MainCSS from "../../css/main.module.css";
import TypingText from "./TypingText";
function Header() {
  /* Header 주요 역할 = 알맞은 infomation(text) 노출 */
  let nickname = "부리부리부리부리"; // [임시]
  let test = 0; // [임시]
  const [text, setText] = useState("");
  const [textParagraph, setTextParagraph] = useState(1);

  useEffect(() => {
    if (test === 0) {
      const timer = setTimeout(() => {
        setText(
          nickname +
            "님! 반갑습니다 (^o^)/ :*:･｡,☆ﾟ’･:*:･｡, \n" +
            "게임 방법은 오른쪽 하단을 참고해주세요! 그럼 게임 시작 ~!",
        );
        setTextParagraph(2);
      }, 2500);
    } else if (test === 1) {
      setText(
        nickname +
          "님이 다섯번째 블럭을 4열 6행에 두었습니다.\n" +
          "상대방의 블럭 및 위치를 선택한 후, 놓기를 클릭해주세요.",
      );
      setTextParagraph(2);
    } else if (test === 2) {
      setText(
        nickname + "님이 놓을 블럭 및 위치를 선택한 후, 놓기를 클릭해주세요.",
      );
      setTextParagraph(1);
    } else if (test === 3) {
      setText(nickname + "님이 블럭 및 위치를 골똘히 고민 중입니다.....");
      setTextParagraph(1);
    }
  }, [test]);

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
