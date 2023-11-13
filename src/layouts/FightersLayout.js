import React, { useState } from "react";
import Me from "../components/fighters/Me";
import Someone from "../components/fighters/Someone";
import MainCSS from "../css/main.module.css";
function FightersLayout() {
  /* 선공/후공 여부 판단 후, component 배치 설정 */

  /* 현재 turn */
  // 선공 선택 시, true가 기본값 / 후공 선택 시, false가 기본값
  const [currentTurn, setCurrentTurn] = useState(true);

  /* 현재 turn의 style */
  const style = {
    border: "3px solid #70CBFF",
    boxSizing: "border-box",
  };

  return (
    <div className={MainCSS.fighters}>
      <div className={MainCSS.firstTurn} style={currentTurn ? style : null}>
        <Me currentTurn={currentTurn} /> {/* [임시] 선공자리 */}
      </div>
      <p className={MainCSS.vs}>VS</p>
      <div className={MainCSS.laterTurn} style={!currentTurn ? style : null}>
        <Someone currentTurn={currentTurn} /> {/* [임시] 후공자리 */}
      </div>
    </div>
  );
}

export default FightersLayout;
