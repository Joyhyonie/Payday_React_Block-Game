import React, { useState } from "react";
import blocks from "../../public/images/blocks.png";
import logo from "../../public/images/logo.png";
import CommonCSS from "../css/common.module.css";
import InputModal from "../modals/InputModal";
import ModeDesModal from "../modals/ModeDesModal";

function Start({
  setAutoMode,
  setProfile,
  nickname,
  setNickname,
  first,
  setFirst,
}) {
  const [inputModal, setInputModal] = useState(false);
  const [modeDesModal, setModeDesModal] = useState(false);

  return (
    <div className={CommonCSS.start}>
      {/* inputModal */}
      {inputModal ? (
        <InputModal
          setInputModal={setInputModal}
          setProfile={setProfile}
          nickname={nickname}
          setNickname={setNickname}
          first={first}
          setFirst={setFirst}
        />
      ) : null}
      {/* modeDesModal */}
      {modeDesModal ? <ModeDesModal setModeDesModal={setModeDesModal} /> : null}

      <div className={CommonCSS.thumbnail}>
        <img className={CommonCSS.blocks} src={blocks} alt="blocks" />
        <img className={CommonCSS.logo} src={logo} alt="logo" />
      </div>
      <div className={CommonCSS.modeButtonBox}>
        <button
          style={{ padding: "0px 30px" }}
          onClick={() => {
            setInputModal(true);
            setAutoMode(true);
          }}
        >
          자동모드
        </button>
        <button
          style={{ padding: "0px 30px" }}
          onClick={() => {
            setInputModal(true);
            setAutoMode(false);
          }}
        >
          수동모드
        </button>
      </div>
      <button
        className={CommonCSS.helpButton}
        onMouseOver={() => setModeDesModal(true)}
        onMouseOut={() => setModeDesModal(false)}
      >
        ?
      </button>
    </div>
  );
}

export default Start;
