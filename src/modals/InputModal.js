import React from "react";
import ModalCSS from "../css/modal.module.css";
import bong from "../../public/images/bong.png";
import kim from "../../public/images/kim.png";
import lee from "../../public/images/lee.png";
import { useNavigate } from "react-router-dom";
function inputModal({ setInputModal }) {
  const navigate = useNavigate();

  /* p태그 요소 */
  // ! 캐릭터를 선택해주세요.
  // ! 닉네임을 입력해주세요.
  // ! 선공/후공을 선택해주세요.

  /* 선택된 캐릭터 활성화 css */
  const color = { border: "2px solid #70CBFF" };

  return (
    <div className={ModalCSS.background} onClick={() => setInputModal(false)}>
      <div className={ModalCSS.container} onClick={(e) => e.stopPropagation()}>
        ▸ 캐릭터 선택
        <div className={ModalCSS.characterBox}>
          <img src={bong} style={color} alt="봉급이" />
          <img src={kim} alt="김길동" />
          <img src={lee} alt="코더리" />
        </div>
        {/* 평소에 빈 영역, 캐릭터 선택을 하지 않았을 경우 "! 캐릭터를 선택해주세요." */}
        <p>&nbsp;</p>
        <div className={ModalCSS.nicknameBox}>
          ▸ 닉네임 입력 <br />
          <input type="text" maxLength={8} />
          <p>&nbsp;</p>
        </div>
        <div className={ModalCSS.checkBox}>
          <input type="radio" name="turn" value="first" checked /> 선공
          <input type="radio" name="turn" value="later" /> 후공
        </div>
        <p>&nbsp;</p>
        <div className={ModalCSS.buttonBox}>
          <button
            className={ModalCSS.orangeButton}
            style={{ padding: "0px 40px" }}
            onClick={() => navigate("/main")}
          >
            게임 시작
          </button>
        </div>
      </div>
    </div>
  );
}

export default inputModal;
