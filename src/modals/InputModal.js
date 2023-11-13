import React, { useEffect, useState } from "react";
import ModalCSS from "../css/modal.module.css";
import bong from "../../public/images/bong.png";
import kim from "../../public/images/kim.png";
import lee from "../../public/images/lee.png";
import { useNavigate } from "react-router-dom";
function inputModal({
  setInputModal,
  setProfile,
  nickname,
  setNickname,
  setTurn,
}) {
  const navigate = useNavigate();
  const [selectedProfile, setSelectedProfile] = useState("");
  const [alertPro, setAlertPro] = useState(false);
  const [alertNickname, setAlertNickname] = useState(false);

  const getStyle = (profile) => {
    return {
      border: profile === selectedProfile ? "3px solid #70CBFF" : "none",
      boxSizing: "border-box",
    };
  };

  const setCharacter = (profile) => {
    setSelectedProfile(profile);
    setProfile(profile);
  };

  const startGame = () => {
    /* 게임 시작 전, 모든 input이 정상적으로 입력된 것을 검증 후, main으로 navigate */
    setAlertPro(false);
    setAlertNickname(false);

    if (selectedProfile === "" && nickname.length === 0) {
      setAlertPro(true);
      setAlertNickname(true);
    } else if (selectedProfile === "") {
      setAlertPro(true);
    } else if (nickname.length === 0) {
      setAlertNickname(true);
    } else {
      navigate("/main");
    }
  };

  return (
    <div className={ModalCSS.background} onClick={() => setInputModal(false)}>
      <div className={ModalCSS.container} onClick={(e) => e.stopPropagation()}>
        ▸ 캐릭터 선택
        <div className={ModalCSS.characterBox}>
          <img
            src={bong}
            onClick={() => setCharacter("bong")}
            style={getStyle("bong")}
            alt="봉급이"
          />
          <img
            src={kim}
            onClick={() => setCharacter("kim")}
            style={getStyle("kim")}
            alt="김길동"
          />
          <img
            src={lee}
            onClick={() => setCharacter("lee")}
            style={getStyle("lee")}
            alt="코더리"
          />
        </div>
        {/* 평소에 빈 영역, 캐릭터 선택을 하지 않았을 경우 alert */}
        <p>{alertPro ? "! 캐릭터를 선택해주세요." : "\u00A0"}</p>
        <div className={ModalCSS.nicknameBox}>
          ▸ 닉네임 입력 <br />
          <input
            type="text"
            maxLength={8}
            value={nickname}
            onChange={(e) => setNickname(e.target.value)}
          />
          <p>{alertNickname ? "! 닉네임을 입력해주세요." : "\u00A0"}</p>
        </div>
        <div className={ModalCSS.checkBox}>
          <input
            type="radio"
            name="turn"
            value="first"
            defaultChecked
            onChange={(e) => setTurn(true)}
          />
          선공
          <input
            type="radio"
            name="turn"
            value="later"
            onChange={(e) => setTurn(false)}
          />
          후공
        </div>
        <div className={ModalCSS.buttonBox}>
          <button
            className={ModalCSS.orangeButton}
            style={{ padding: "0px 40px", marginTop: "20px" }}
            onClick={() => startGame()}
          >
            게임 시작
          </button>
        </div>
      </div>
    </div>
  );
}

export default inputModal;
