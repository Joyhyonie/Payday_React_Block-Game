import React, { useEffect, useState } from "react";
import Header from "../components/common/Header";
import Board from "../components/board/Board";
import FightersLayout from "./FightersLayout";
import Footer from "../components/common/Footer";
import MainCSS from "../css/main.module.css";
import ImpossibleModal from "../modals/ImpossibleModal";
import GiveUpModal from "../modals/GiveUpModal";
import RuleDesModal from "../modals/RuleDesModal";
import WinModal from "../modals/WinModal";
import LoseModal from "../modals/LoseModal";
import GameStartModal from "../modals/GameStartModal";

function MainLayout({ autoMode, profile, nickname, first }) {
  /* 첫 렌더링 시, 새로운 보드판 생성 */
  const newBoard = Array.from({ length: 10 }, () =>
    Array(10).fill({ value: 0 }),
  );

  const [board, setBoard] = useState(newBoard);
  const [selectedBlock, setSelectedBlock] = useState(null);
  const [selectedXy, setSelectedXy] = useState([]);
  const [gameStartModal, setGameStartModal] = useState(true);
  const [impossibleModal, setImpossibleModal] = useState(false);
  const [giveUpModal, setGiveUpModal] = useState(false);
  const [ruleDesModal, setRuleDesModal] = useState(false);
  const [winModal, setWinModal] = useState(false);
  const [loseModal, setLoseModal] = useState(false);

  /* 첫 렌더링 시, Game Start 띄우기 */
  useEffect(() => {
    const timer = setTimeout(() => {
      setGameStartModal(false);
      return () => clearTimeout(timer);
    }, 2300);
  }, []);

  return (
    <>
      {/* Game Start */}
      {gameStartModal ? <GameStartModal /> : null}

      {/* All modals in main */}
      {impossibleModal ? (
        <ImpossibleModal setImpossibleModal={setImpossibleModal} />
      ) : null}
      {giveUpModal ? <GiveUpModal setGiveUpModal={setGiveUpModal} /> : null}
      {ruleDesModal ? <RuleDesModal setRuleDesModal={setRuleDesModal} /> : null}
      {winModal ? <WinModal setWinModal={setWinModal} /> : null}
      {loseModal ? <LoseModal setLoseModal={setLoseModal} /> : null}
      <div className={MainCSS.alignCenter}>
        <div className={MainCSS.mainBox}>
          {/* Header/Footer에 필요: selectedBlock, selectedXy */}
          <Header nickname={nickname} />
          <div className={MainCSS.flex}>
            <Board
              board={board}
              selectedBlock={selectedBlock}
              selectedXy={selectedXy}
              setSelectedXy={setSelectedXy}
            />
            <div>
              <FightersLayout
                autoMode={autoMode}
                profile={profile}
                first={first}
                selectedBlock={selectedBlock}
                setSelectedBlock={setSelectedBlock}
              />
              <Footer
                setGiveUpModal={setGiveUpModal}
                setRuleDesModal={setRuleDesModal}
                selectedBlock={selectedBlock}
                selectedXy={selectedXy}
              />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default MainLayout;
