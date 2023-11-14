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

function MainLayout({ emptyBoard, autoMode, profile, nickname, first }) {
  const [board, setBoard] = useState(emptyBoard);
  const [selectedBlock, setSelectedBlock] = useState(null);
  const [selectedXy, setSelectedXy] = useState([]);
  const [gameStartModal, setGameStartModal] = useState(true);
  const [impossibleModal, setImpossibleModal] = useState(false);
  const [giveUpModal, setGiveUpModal] = useState(false);
  const [ruleDesModal, setRuleDesModal] = useState(false);
  const [winModal, setWinModal] = useState(false);
  const [loseModal, setLoseModal] = useState(false);

  const blocks = [
    [1, 1, 1],
    [0, 1, 1, 1],
    [1, 0, 1, 1],
    [1, 1, 1, 0],
    [1, 1, 0, 1],
  ];

  /* board에 block을 set하기 위한 함수 */
  const setBlockOnTheBoard = (selectedBlock, selectedXy) => {
    let color;
    switch (selectedBlock) {
      case 1:
        color = "red";
        break;
      case 2:
        color = "yellow";
        break;
      case 3:
        color = "green";
        break;
      case 4:
        color = "blue";
        break;
      case 5:
        color = "purple";
        break;
    }

    setBoard((prevBoard) => {
      // 이전 상태를 기반으로 새로운 배열을 생성하여 불변성을 유지
      const newBoard = JSON.parse(JSON.stringify(prevBoard));
      let row = selectedXy[0];
      let col = selectedXy[1];

      if (selectedBlock === 1) {
        for (let i = 0; i < 10; i++) {
          if (i === row) {
            for (let j = col; j < col + 3; j++) {
              newBoard[i][j].value = 1; // 놓을 수 없는 위치에 두려고 할 때 에러
              newBoard[i][j].color = color;
            }
            break;
          }
        }
      } else {
        let blockIndex = 0;
        for (let i = 0; i < 10; i++) {
          if (i === row || i === row + 1) {
            for (let j = col; j < col + 2; j++) {
              if (blocks[selectedBlock - 1][blockIndex++] === 1) {
                newBoard[i][j].value = 1; // 놓을 수 없는 위치에 두려고 할 때 에러
                newBoard[i][j].color = color;
              }
            }
          }
        }
      }

      /* 놓고나서 기존 값 초기화 */
      setSelectedBlock(null);
      setSelectedXy([]);

      return newBoard; // 업데이트된 배열을 반환하여 board 업데이트
    });
  };

  /* board에 들어갈 수 있는 유효한 block인지 확인 후, set하기 위한 함수 */
  const checkBoard = (selectedBlock, selectedXy) => {
    let count = 0;
    let blockIndex = 0;
    let row = selectedXy[0];
    let col = selectedXy[1];

    try {
      if (selectedBlock === 1) {
        for (let i = 0; i < 10; i++) {
          if (i === row) {
            for (let j = col; j < col + 3; j++) {
              if (board[i][j].value === 1) count++;
            }
          }
        }
      } else {
        for (let i = 0; i < 9; i++) {
          if (i === row || i === row + 1) {
            for (let j = col; j < col + 2; j++) {
              if (
                board[i][j].value === 1 &&
                blocks[selectedBlock - 1][blockIndex] === 1
              )
                count++;
              blockIndex++;
            }
          }
        }
      }
    } catch (e) {
      setImpossibleModal(true);
    }

    /* count가 0보다 크다. = 블럭이 해당 위치에 들어갈 수 없다. */
    if (count > 0) {
      setImpossibleModal(true);
    } else {
      if (selectedBlock === 1) {
        if (selectedXy[0] <= 9 && selectedXy[1] <= 7) {
          setBlockOnTheBoard(selectedBlock, selectedXy);
        } else {
          setImpossibleModal(true);
        }
      } else {
        if (selectedXy[0] <= 8 && selectedXy[1] <= 8) {
          setBlockOnTheBoard(selectedBlock, selectedXy);
        } else {
          setImpossibleModal(true);
        }
      }
    }
  };

  /* 각 block별, 현재 board에 둘 수 있는 좌표(경우의 수)들을 배열로 반환하기 위한 함수 */
  const collectSys = (selectedBlock, board) => {
    const xys = [];

    if (selectedBlock === 1) {
      for (let i = 0; i < 10; i++) {
        for (let j = 0; j < 8; j++) {
          if (
            board[i][j].value === 0 &&
            board[i][j + 1].value === 0 &&
            board[i][j + 2].value === 0
          ) {
            xys.push([selectedBlock, i, j]);
          }
        }
      }
    } else {
      for (let i = 0; i < 9; i++) {
        for (let j = 0; j < 9; j++) {
          if (selectedBlock === 2) {
            if (
              board[i][j + 1].value === 0 &&
              board[i + 1][j].value === 0 &&
              board[i + 1][j + 1].value === 0
            ) {
              xys.push([selectedBlock, i, j]);
            }
          } else if (board[i][j].value === 0) {
            switch (selectedBlock) {
              case 3:
                if (
                  board[i + 1][j].value === 0 &&
                  board[i + 1][j + 1].value === 0
                ) {
                  xys.push([selectedBlock, i, j]);
                }
                break;
              case 4:
                if (
                  board[i][j + 1].value === 0 &&
                  board[i + 1][j].value === 0
                ) {
                  xys.push([selectedBlock, i, j]);
                }
                break;
              case 5:
                if (board[i][j + 1] === 0 && board[i + 1][j + 1] === 0) {
                  xys.push([selectedBlock, i, j]);
                }
                break;
            }
          }
        }
      }
    }

    return xys;
  };

  useEffect(() => {
    /* 첫 렌더링 시, Game Start 띄우기 */
    const timer = setTimeout(() => {
      setGameStartModal(false);
      return () => clearTimeout(timer);
    }, 2300);

    /* Auto 선공일 경우, 맨 처음의 랜덤한 블럭&좌표를 지정하는 함수 */
    // Game Start 및, 처음 info 끝난 후, 두는 것으로 순서 설정
    if (autoMode && first) {
      let blockNum;
      let row, col;
      const putRandomBlock = () => {
        blockNum = Math.floor(Math.random() * 5) + 1;
        if (blockNum === 1) {
          row = Math.floor(Math.random() * 10);
          col = Math.floor(Math.random() * 8);
        } else {
          row = Math.floor(Math.random() * 9);
          col = Math.floor(Math.random() * 9);
        }
      };
      putRandomBlock();
      setBlockOnTheBoard(blockNum, [row, col]);
    }
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
              setBlockOnTheBoard={setBlockOnTheBoard}
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
                checkBoard={checkBoard}
              />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default MainLayout;
