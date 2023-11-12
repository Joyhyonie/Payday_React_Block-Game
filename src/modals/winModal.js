import React from "react";
import ModalCSS from "../css/modal.module.css";
import bong from "../../public/images/bong.png";
import kim from "../../public/images/kim.png";
import lee from "../../public/images/lee.png";
import { useNavigate } from "react-router-dom";
import JSConfetti from "js-confetti";

function winModal({ setWinModal }) {
  const navigate = useNavigate();
  const comfetti = new JSConfetti();

  /* 폭죽효과 */
  function onCompetti() {
    comfetti.addConfetti({
      confettiColors: ["#FE0E1A", "#FEDD50", "#55C475", "#0155B6", "#B23BB1"],
      confettiRadius: 3,
      confettiNumber: 500,
    });
  }

  /* winModal 활성화 시, 동작 */
  onCompetti();

  /* [임시] user nickname/profile */
  let nickname = "Joy";
  let profile = "bong";

  let character;
  switch (profile) {
    case "bong":
      character = bong;
      break;
    case "kim":
      character = kim;
      break;
    case "lee":
      character = lee;
      break;
  }

  return (
    <div className={ModalCSS.background} style={{ cursor: "default" }}>
      <div className={ModalCSS.container} onClick={(e) => e.stopPropagation()}>
        <div className={ModalCSS.profileBox}>
          <img
            src={character}
            style={{ cursor: "pointer" }}
            onClick={onCompetti}
            alt="프로필"
          />
        </div>
        <div className={ModalCSS.centerInfo}>
          상대방이 더이상 둘 수 없습니다.
          <br />
          {nickname}님의 승리입니다!
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

export default winModal;
