import React, { useState } from "react";
import ModalCSS from "../css/modal.module.css";
import gameStart from "../../public/images/gameStart.png";
function GameStartModal() {
  return (
    <div className={ModalCSS.background} style={{ cursor: "default" }}>
      <div className={ModalCSS.gameStartBox}>
        <img src={gameStart} alt="게임시작" />
      </div>
    </div>
  );
}

export default GameStartModal;
