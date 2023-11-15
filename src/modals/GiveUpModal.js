import React from "react";
import ModalCSS from "../css/modal.module.css";
function giveUpModal({ setGiveUpModal, turn, setWinModal, setLoseModal }) {
  const winOrLose = () => {
    /* 현재의 turn에 따라 기권 시, modal open */
    if (turn) {
      setGiveUpModal(false);
      setLoseModal(true);
    } else {
      setGiveUpModal(false);
      setWinModal(true);
    }
  };

  return (
    <div className={ModalCSS.background} onClick={() => setGiveUpModal(false)}>
      <div className={ModalCSS.container} onClick={(e) => e.stopPropagation()}>
        <div className={ModalCSS.centerInfo}>정말 기권하시겠습니까?</div>
        <div className={ModalCSS.buttonBox}>
          <button onClick={winOrLose}>네ㅠㅠ</button>
          <button onClick={() => setGiveUpModal(false)}>아니요</button>
        </div>
      </div>
    </div>
  );
}

export default giveUpModal;
