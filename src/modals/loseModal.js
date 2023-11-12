import React from "react";
import { useNavigate } from "react-router-dom";
import ModalCSS from "../css/modal.module.css";
import ya from "../../public/images/ya.png";
function loseModal({ setLoseModal }) {
  const navigate = useNavigate();

  /* [임시] user nickname */
  let nickname = "Joy";

  return (
    <div className={ModalCSS.background} style={{ cursor: "default" }}>
      <div className={ModalCSS.container} onClick={(e) => e.stopPropagation()}>
        <div className={ModalCSS.profileBox}>
          <img src={ya} alt="YA" />
          <p>ㅋㅋ</p>
        </div>
        <div className={ModalCSS.centerInfo}>
          {nickname}님이 더이상 둘 수 없습니다.
          <br />
          상대방의 승리입니다. ㅠㅠ
        </div>
        <div className={ModalCSS.buttonBox}>
          <button
            className={ModalCSS.orangeButton}
            onClick={() => navigate("/")}
          >
            처음으로
          </button>
          {/* mode, profile, nickname, turn 모두 이전과 동일한 값을 가진 상태에서 새 게임 시작 */}
          <button>다시하기</button>
        </div>
      </div>
    </div>
  );
}

export default loseModal;
