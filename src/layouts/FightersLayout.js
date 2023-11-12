import React from "react";
import Me from "../components/Fighters/Me";
import Someone from "../components/Fighters/Someone";
import MainCSS from "../css/main.module.css";
function FightersLayout() {
  /* 선공/후공 여부 판단 후, component 배치 설정 */

  return (
    <div className={MainCSS.fighters}>
      <div className={MainCSS.firstTurn}>
        <Me /> {/* [임시] 선공자리 */}
      </div>
      <p className={MainCSS.vs}>VS</p>
      <div className={MainCSS.laterTurn}>
        <Someone /> {/* [임시] 후공자리 */}
      </div>
    </div>
  );
}

export default FightersLayout;
