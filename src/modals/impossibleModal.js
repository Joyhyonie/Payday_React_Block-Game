import React from "react";
import ModalCSS from "../css/modal.module.css";
function impossibleModal({ setImpossibleModal }) {
  return (
    <div
      className={ModalCSS.background}
      onClick={() => setImpossibleModal(false)}
    >
      <div className={ModalCSS.container} onClick={(e) => e.stopPropagation()}>
        <div className={ModalCSS.centerInfo}>
          해당 위치에 블럭을 둘 수 없습니다.
          <br />
          다시 선택해주세요.
        </div>
      </div>
    </div>
  );
}

export default impossibleModal;
