import React from "react";
import Me from "../components/Fighters/Me";
import Someone from "../components/Fighters/Someone";
import CommonCSS from "../css/common.module.css";
function FightersLayout() {
  /* 선공/후공 여부 판단 후, component 배치 설정 */

  return (
    <div className={CommonCSS.fighters}>
      <div className={CommonCSS.firstTurn}>
        <Me /> {/* [임시] 선공자리 */}
      </div>
      <p className={CommonCSS.vs}>VS</p>
      <div className={CommonCSS.laterTurn}>
        <Someone /> {/* [임시] 후공자리 */}
      </div>
    </div>
  );
}

export default FightersLayout;
