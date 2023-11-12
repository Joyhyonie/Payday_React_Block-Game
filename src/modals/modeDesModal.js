import React from "react";
import ModalCSS from "../css/modal.module.css";
import robot from "../../public/images/robot.png";
function modeDesModal() {
  return (
    <div className={ModalCSS.desContainer}>
      <div className={ModalCSS.desTitle}>
        <img src={robot} alt="로봇" />
        <p>자동/수동모드란?</p>
      </div>
      <ul>
        <li>자동모드: 최고의 블럭/위치를 찾아 자동으로 놓습니다.</li>
        <li>수동모드: 직접 블럭/위치를 선택하여 놓을 수 있습니다. </li>
        <li style={{ listStyle: "none" }}>
          (상대방의 블럭/위치는 항상 수동모드입니다.)
        </li>
      </ul>
    </div>
  );
}

export default modeDesModal;
