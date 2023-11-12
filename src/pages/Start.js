import React, { useState } from "react";
import blocks from "../../public/images/blocks.png";
import logo from "../../public/images/logo.png";
import CommonCSS from "../css/common.module.css";
import InputModal from "../modals/inputModal";

function Start() {
  const [inputModal, setInputModal] = useState(true);

  return (
    <div className={CommonCSS.start}>
      <div>
        {inputModal ? <InputModal setInputModal={setInputModal} /> : null}
      </div>
      <div className={CommonCSS.thumbnail}>
        <img className={CommonCSS.blocks} src={blocks} alt="blocks" />
        <img className={CommonCSS.logo} src={logo} alt="logo" />
      </div>
      <div className={CommonCSS.modeButtonBox}>
        <button
          style={{ padding: "0px 30px" }}
          onClick={() => setInputModal(true)}
        >
          자동모드
        </button>
        <button
          style={{ padding: "0px 30px" }}
          onClick={() => setInputModal(true)}
        >
          수동모드
        </button>
      </div>
      <button className={CommonCSS.helpButton}>?</button>
    </div>
  );
}

export default Start;
