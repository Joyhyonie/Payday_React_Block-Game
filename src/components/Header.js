import React from "react";
import miniLogo from "../../public/images/mini-logo.png";
import robot from "../../public/images/robot.png";
import CommonCSS from "../css/common.module.css";
function Header() {
  return (
    <div className={CommonCSS.header}>
      <img src={miniLogo} className={CommonCSS.miniLogo} alt="mini-logo" />
      <div className={CommonCSS.desBox}>
        <img src={robot} className={CommonCSS.robot} alt="robot" />
        <pre>
          Joy님이 다섯번째 블럭을 4열 6행에 두었습니다. <br />
          상대방의 블럭 및 위치를 선택한 후, 놓기를 클릭해주세요.|
        </pre>
      </div>
    </div>
  );
}

export default Header;
