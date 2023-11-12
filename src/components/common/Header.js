import React from "react";
import miniLogo from "../../../public/images/mini-logo.png";
import robot from "../../../public/images/robot.png";
import MainCSS from "../../css/main.module.css";
import TypingText from "./TypingText";
function Header() {
  return (
    <div className={MainCSS.header}>
      <img src={miniLogo} className={MainCSS.miniLogo} alt="mini-logo" />
      <div className={MainCSS.desBox}>
        <img src={robot} className={MainCSS.robot} alt="robot" />
        <TypingText
          text={
            "Joy님이 다섯번째 블럭을 4열 6행에 두었습니다.\n" +
            "상대방의 블럭 및 위치를 선택한 후, 놓기를 클릭해주세요."
          }
        />
      </div>
    </div>
  );
}

export default Header;
