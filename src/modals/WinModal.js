import React from "react";
import ModalCSS from "../css/modal.module.css";
import bong from "../../public/images/bong.png";
import kim from "../../public/images/kim.png";
import lee from "../../public/images/lee.png";
import { useNavigate } from "react-router-dom";
import JSConfetti from "js-confetti";

function winModal({ profile, nickname }) {
  const navigate = useNavigate();
  const comfetti = new JSConfetti();

  /* 폭죽효과 */
  const onCompetti = () => {
    comfetti.addConfetti({
      confettiColors: ["#FE0E1A", "#FEDD50", "#55C475", "#0155B6", "#B23BB1"],
      confettiRadius: 3,
      confettiNumber: 500,
    });
  };

  /* winModal 활성화 시, 동작 */
  onCompetti();

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

  const goToStart = () => {
    // localStorage.clear(); // 처음으로: 기존의 data 모두 clear
    localStorage.removeItem("autoMode");
    localStorage.removeItem("profile");
    localStorage.removeItem("nickname");
    localStorage.removeItem("first");
    navigate("/");
  };

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
          <button className={ModalCSS.orangeButton} onClick={goToStart}>
            처음으로
          </button>
          {/* mode, profile, nickname, first 모두 이전과 동일한 값을 가진 상태에서 새 게임 시작 */}
          <button onClick={() => window.location.reload()}>다시하기</button>
        </div>
      </div>
    </div>
  );
}

export default winModal;
