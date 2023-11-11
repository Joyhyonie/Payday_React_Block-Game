import React from "react";
import blocks from "../../public/images/blocks.png";
import logo from "../../public/images/logo.png";
import CommonCSS from "../css/common.module.css";
import { useNavigate } from "react-router-dom";

function Start() {
  const navigate = useNavigate();

  return (
    <>
      <div className={CommonCSS.thumbnail}>
        <img className={CommonCSS.blocks} src={blocks} alt="blocks" />
        <img className={CommonCSS.logo} src={logo} alt="logo" />
      </div>
      <div className={CommonCSS.modeButtonBox}>
        <button
          style={{ padding: "0px 30px" }}
          onClick={() => navigate("/main")}
        >
          자동모드
        </button>
        <button style={{ padding: "0px 30px" }}>수동모드</button>
      </div>
      <button className={CommonCSS.helpButton}>?</button>
    </>
  );
}

export default Start;
