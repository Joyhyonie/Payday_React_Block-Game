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
  gameStart,
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
            gameStart={gameStart}
          />
        ) : (
          <Someone
            turn={turn}
            selectedBlock={selectedBlock}
            setSelectedBlock={setSelectedBlock}
            gameStart={gameStart}
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
            gameStart={gameStart}
          />
        ) : (
          <Someone
            turn={turn}
            selectedBlock={selectedBlock}
            setSelectedBlock={setSelectedBlock}
            gameStart={gameStart}
          />
        )}
      </div>
    </div>
  );
}

export default FightersLayout;
