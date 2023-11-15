import React, { useEffect, useState } from "react";
import Me from "../components/fighters/Me";
import Someone from "../components/fighters/Someone";
import MainCSS from "../css/main.module.css";
function FightersLayout({
  autoMode,
  profile,
  first,
  turn,
  selectedBlock,
  setSelectedBlock,
  thinking,
}) {
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
            thinking={thinking}
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
            thinking={thinking}
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
