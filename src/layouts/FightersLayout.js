import React, { useEffect, useState } from "react";
import Me from "../components/fighters/Me";
import Someone from "../components/fighters/Someone";
import MainCSS from "../css/main.module.css";
function FightersLayout({
  autoMode,
  profile,
  first,
  selectedBlock,
  setSelectedBlock,
}) {
  /* 선공/후공 여부 판단 후, component 배치 설정 */

  // first는 선/후공, turn은 현재 놓을 사람의 turn
  const [turn, setTurn] = useState(first);

  return (
    <div className={MainCSS.fighters}>
      <div className={MainCSS.firstTurn}>
        {/* 선공 */}
        {first ? (
          <Me
            turn={turn}
            profile={profile}
            selectedBlock={selectedBlock}
            setSelectedBlock={setSelectedBlock}
          />
        ) : (
          <Someone
            turn={turn}
            selectedBlock={selectedBlock}
            setSelectedBlock={setSelectedBlock}
          />
        )}
      </div>
      <p className={MainCSS.vs}>VS</p>
      <div className={MainCSS.laterTurn}>
        {/* 후공 */}
        {!first ? (
          <Me
            turn={turn}
            profile={profile}
            selectedBlock={selectedBlock}
            setSelectedBlock={setSelectedBlock}
          />
        ) : (
          <Someone
            turn={turn}
            selectedBlock={selectedBlock}
            setSelectedBlock={setSelectedBlock}
          />
        )}
      </div>
    </div>
  );
}

export default FightersLayout;
