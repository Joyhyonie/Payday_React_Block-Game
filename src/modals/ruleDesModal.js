import React from "react";
import ModalCSS from "../css/modal.module.css";
import robot from "../../public/images/robot.png";
function ruleDesModal() {
  return (
    <div className={ModalCSS.desContainer}>
      <div className={ModalCSS.desTitle}>
        <img src={robot} alt="로봇" />
        <p>게임 설명</p>
      </div>
      <div className={ModalCSS.text}>
        10x10 보드에 블럭 및 위치를 선택하여 놓고, <br />
        더이상 놓을 자리가 없을 경우 지게 됩니다. <br />
        따라서 마지막 턴에 상대방이 놓을 수 없게끔 <br />
        게임을 이끌어 가는 것이 이기는 방법! <br />
        머리를 데굴데굴 잘 굴려서 이겨봅시다. ㅎㅎ
      </div>
    </div>
  );
}

export default ruleDesModal;
