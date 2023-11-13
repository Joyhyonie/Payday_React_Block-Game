import React from "react";
import MainCSS from "../../css/main.module.css";
import thinking from "../../../public/images/thinking.gif";
import balloon from "../../../public/images/balloon.png";
function Thinking() {
  return (
    <div className={MainCSS.clearCover}>
      <img src={balloon} className={MainCSS.balloon} alt="말풍선" />
      <img src={thinking} className={MainCSS.thinking} alt="생각중" />
    </div>
  );
}

export default Thinking;
