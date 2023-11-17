import React from "react";
import CommonCSS from "../css/common.module.css";
import blocks from "../../public/images/blocks.png";
import { useNavigate } from "react-router-dom";
function Error() {
  const navigate = useNavigate();

  const goToStart = () => {
    // localStorage.clear(); // 처음으로: 기존의 data 모두 clear
    localStorage.removeItem("autoMode");
    localStorage.removeItem("profile");
    localStorage.removeItem("nickname");
    localStorage.removeItem("first");
    navigate("/");
  };

  return (
    <div className={CommonCSS.error}>
      <img className={CommonCSS.blocks} src={blocks} alt="blocks" />
      <div className={CommonCSS.errorBox}>
        <p>유효하지않은 URL입니다! 😶‍</p>
        <button onClick={goToStart}>돌아가기</button>
      </div>
    </div>
  );
}

export default Error;
