import React from "react";
import MainCSS from "../css/main.module.css";
function Footer({ setGiveUpModal, setRuleDesModal }) {
  /* error/confirm에 따라 p 태그 색상 변경 */

  return (
    <div className={MainCSS.footer}>
      <p>두번째 블럭을 8열 1행에 두는 것으로 선택하셨습니다.</p>
      <button>놓기</button>
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
