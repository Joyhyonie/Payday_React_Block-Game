import React from "react";
import CommonCSS from "../css/common.module.css";
function Footer() {
  /* error/confirm에 따라 p 태그 색상 변경 */

  return (
    <div className={CommonCSS.footer}>
      <p>두번째 블럭을 8열 1행에 두는 것으로 선택하셨습니다.</p>
      <button>놓기</button>
      <button className={CommonCSS.giveUp}>기권</button>
      <button>?</button>
    </div>
  );
}

export default Footer;
