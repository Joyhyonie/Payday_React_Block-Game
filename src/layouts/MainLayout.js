import React, { useState } from "react";
import Header from "../components/Header";
import Board from "../components/Board/Board";
import FightersLayout from "./FightersLayout";
import Footer from "../components/Footer";
import MainCSS from "../css/main.module.css";
import ImpossibleModal from "../modals/impossibleModal";
import GiveUpModal from "../modals/giveUpModal";
import RuleDesModal from "../modals/ruleDesModal";
import WinModal from "../modals/winModal";
import LoseModal from "../modals/loseModal";

function MainLayout() {
  /* 처음 렌더링될 때만 Game Start 띄우기 */

  const [impossibleModal, setImpossibleModal] = useState(false);
  const [giveUpModal, setGiveUpModal] = useState(false);
  const [ruleDesModal, setRuleDesModal] = useState(false);
  const [winModal, setWinModal] = useState(true);
  const [loseModal, setLoseModal] = useState(false);

  return (
    <>
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
          <Header />
          <div className={MainCSS.flex}>
            <Board />
            <div>
              <FightersLayout />
              <Footer
                setGiveUpModal={setGiveUpModal}
                setRuleDesModal={setRuleDesModal}
              />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default MainLayout;
