import React from "react";
import ModalCSS from "../css/modal.module.css";
function giveUpModal({ setGiveUpModal }) {
  return (
    <div className={ModalCSS.background} onClick={() => setGiveUpModal(false)}>
      <div className={ModalCSS.container} onClick={(e) => e.stopPropagation()}>
        <div className={ModalCSS.centerInfo}>정말 기권하시겠습니까?</div>
        <div className={ModalCSS.buttonBox}>
          {/* setGiveUpModal(false), setLoseModal(true) */}
          <button>네ㅠㅠ</button>
          <button onClick={() => setGiveUpModal(false)}>아니요</button>
        </div>
      </div>
    </div>
  );
}

export default giveUpModal;
