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
import MockBoard from "../components/board/MockBoard";

function MainLayout({ emptyBoard, autoMode, profile, nickname, first }) {
  const [board, setBoard] = useState(emptyBoard);
  const [mockBoard, setMockBoard] = useState(board);
  const [selectedBlock, setSelectedBlock] = useState(null);
  const [selectedXy, setSelectedXy] = useState([]);
  const [prevBlock, setPrevBlock] = useState(null);
  const [prevXy, setPrevXy] = useState([]);
  const [turn, setTurn] = useState(first);
  const [info, setInfo] = useState("");
  const [toggle, setToggle] = useState(false); // 현재 board에 가능한 좌표가 있는지의 여부를 확인하기 위한 useState
  const [thinking, setThinking] = useState(false);
  const [gameStart, setGameStart] = useState(false);
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
  const updateBoard = (selectedBlock, selectedXy, prevBoard) => {
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

    // 이전 상태를 기반으로 새로운 배열을 생성하여 불변성을 유지
    const newBoard = JSON.parse(JSON.stringify(prevBoard));
    let row = selectedXy[0];
    let col = selectedXy[1];

    if (selectedBlock === 1) {
      for (let i = 0; i < 10; i++) {
        if (i === row) {
          for (let j = col; j < col + 3; j++) {
            if (newBoard[i] && newBoard[i][j]) {
              newBoard[i][j].value = 1;
              newBoard[i][j].color = color;
            }
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
              if (newBoard[i] && newBoard[i][j]) {
                newBoard[i][j].value = 1;
                newBoard[i][j].color = color;
              }
            }
          }
        }
      }
    }

    return newBoard; // 업데이트된 배열을 반환하여 board 업데이트
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

    /* 놓을 수 있다면, board에 block 두기 */
    const putBlock = () => {
      setBoard((prevBoard) =>
        updateBoard(selectedBlock, selectedXy, prevBoard),
      );
      // 현재 turn을 확인한 후, Header에 알맞은 info를 띄우기 위한 if문
      if (turn) {
        setInfo("someone");
      } else {
        autoMode ? setInfo("auto") : setInfo("passive");
      }
      // info에 블럭/위치를 나타내기 위해 현재의 블럭/위치를 prevBlock/prevXy에 저장
      setPrevBlock(selectedBlock);
      setPrevXy(selectedXy);
      // 놓은 후, 기존 값 초기화 & turn 변경
      setSelectedBlock(null);
      setSelectedXy([]);
      setTurn(!turn);
      setThinking(false);
      // 놓은 후, 앞으로 둘 수 있는 경우의 수가 0개라면, 현재 turn이 true라면 내가 진 것 / false라면 상대방이 진 것 (바로 위에서 turn을 변경했다는 기준하에)
      // 현재 반영된 board 기준으로 count 해야하므로, useEffect 안에서 실행되어야하기 때문에,
      // checkBoard()가 호출될 때마다 해당 useEffect를 렌더링 시키기 위해 toggle(useState) 생성
      setToggle(!toggle);
    };

    /* count가 0보다 크다. = 블럭이 해당 위치에 들어갈 수 없다. */
    if (count > 0) {
      setImpossibleModal(true);
    } else {
      if (selectedBlock === 1) {
        if (selectedXy[0] <= 9 && selectedXy[1] <= 7) {
          putBlock();
        } else {
          setImpossibleModal(true);
        }
      } else {
        if (selectedXy[0] <= 8 && selectedXy[1] <= 8) {
          putBlock();
        } else {
          setImpossibleModal(true);
        }
      }
    }
  };

  /* 각 block별, 현재 board에 둘 수 있는 좌표(경우의 수)들을 배열로 반환하기 위한 함수 */
  const collectXys = (selectedBlock, board) => {
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
                if (
                  board[i][j + 1].value === 0 &&
                  board[i + 1][j + 1].value === 0
                ) {
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

  let winningRoutes = [];

  /* 모든 경우의 수 좌표를 구하기 위한 재귀 함수 */
  const runRecursive = (xysList, board, currentRoute) => {
    for (const xy of xysList) {
      const tempBoard = JSON.parse(JSON.stringify(board));
      let newBoard = updateBoard(xy[0], [xy[1], xy[2]], tempBoard);

      const tempXysList = [];

      for (let blockNum = 1; blockNum <= 5; blockNum++) {
        const tempXys = collectXys(blockNum, newBoard);
        tempXysList.push(...tempXys);
      }
      // console.log("tempXysList: " + tempXysList);

      if (tempXysList.length === 0) {
        currentRoute.push(xy);
        if (currentRoute.length % 2 === 1) {
          winningRoutes.push([...currentRoute]);
        }
        console.log("완료 currentRoute: " + currentRoute);
        console.log(
          "리스트 추가 완. ====================================================",
        );
        currentRoute.pop(); // 원상 복구
      } else {
        currentRoute.push(xy);
        runRecursive(tempXysList, newBoard, currentRoute);
        console.log("진행중 currentRoute: " + currentRoute);
        currentRoute.pop(); // 원상 복구
      }
    }
  };

  /* runRecursive()를 호출하기 위한 함수 */
  const callRecursive = (xysList, board) => {
    winningRoutes = []; // 이전 시점의 winningRoutes 제거
    runRecursive(xysList, board, []);
  };

  /* 최선의 블럭 및 좌표를 찾아내기 위한 함수 */
  const findTheBestWay = () => {
    setThinking(true);
    // 현재 가능한 경우의 수 List
    let xysList = [];

    // collectXys(): 경우의 수(좌표) 구하기
    for (let blockNum = 1; blockNum <= 5; blockNum++) {
      let xys = collectXys(blockNum, board); // xys => [][]
      xysList = xysList.concat(xys); // xysList는 [][][]가 아닌, 블럭 구별없이 [][] 형태여야함
    }

    let way;
    if (xysList.length < 30) {
      // 앞으로의 경우의 수가 20가지 미만이라면, 최적의 루트를 찾는 재귀함수 호출
      callRecursive(xysList, board); // winningRoutes에 앞으로 이길 수 있는 모든 Route 저장

      // map으로 가장 많이 등장한 route.get(0) 찾기
      let routeCount = new Map();
      let maxCount = 0;
      let mostFrequentRoute = null;

      for (let route of winningRoutes) {
        let key = JSON.stringify(route[0]);
        let count = routeCount.get(key) || 0;
        routeCount.set(key, count + 1);

        if (count + 1 > maxCount) {
          maxCount = count + 1;
          mostFrequentRoute = route[0];
          console.log("mostFrequentRoute: " + mostFrequentRoute);
        }
      }

      // mostFrequentRoute가 null이라는 것은, 이길 수 있는 경우의 수가 더 이상 존재하지 않음을 의미.
      // 하지만 마지막까지 수를 둬야하므로 현재 둘 수 있는 좌표 찾기
      if (mostFrequentRoute === null) {
        let losingXysList = [];

        for (let blockNum = 1; blockNum <= 5; blockNum++) {
          let losingXys = collectXys(blockNum, board);

          if (losingXys.length !== 0) {
            losingXysList.push(losingXys);
          }
        }

        if (losingXysList.length !== 0) {
          way = [
            losingXysList[0][0][0],
            losingXysList[0][0][1],
            losingXysList[0][0][2],
          ];
          console.log("졌잘싸...! : " + way);
        } else {
          way = [0, 0, 0]; // 반환 시, 패배
        }
      } else {
        way = mostFrequentRoute;
      }
    } else {
      // 앞으로의 경우의 수가 20가지 이상이라면, 현재 가능한 좌표 중 랜덤으로 고르기

      const getRandomXy = (array) => {
        const randomXyIndex = Math.floor(Math.random() * array.length);
        return array[randomXyIndex];
      };

      way = getRandomXy(xysList);
      if (way === undefined) {
        // way가 undefined가 아닐 때까지 반복
        while (true) {
          way = getRandomXy(xysList);
          if (way !== undefined) {
            break;
          }
        }
      }
    }

    console.log("way: " + way);
    return way;
  };

  /* --------------------------------------------------------------------------------------------------------------- */

  useEffect(() => {
    /* 첫 렌더링 시, Game Start 띄우기 */
    const timer = setTimeout(() => {
      setGameStartModal(false);
      return () => clearTimeout(timer);
    }, 2300);
  }, []);

  useEffect(() => {
    /* 블럭/위치가 모두 존재할 때, 실제 board 대신 mockBoard를 보여주어 미리보기 기능을 수행 */
    if (selectedBlock && selectedXy.length !== 0) {
      setMockBoard(board); // 현재 보드를 set 한 후,
      setMockBoard((prevMockBoard) =>
        updateBoard(selectedBlock, selectedXy, prevMockBoard),
      ); // 현재 입력된 블럭/위치를 더하여 set
    }
  }, [selectedBlock, selectedXy]);

  useEffect(() => {
    if (!turn) {
      setThinking(false);
    }

    if (autoMode && turn && gameStart) {
      setThinking(true);
      const timer = setTimeout(() => {
        /* 최적의 좌표 찾아오기 */
        let way = findTheBestWay();
        if (way[0] !== 0) {
          // way가 [0, 0, 0]일 경우, 나의 패배
          setBoard((prevBoard) =>
            updateBoard(way[0], [way[1], way[2]], prevBoard),
          );
          // setBoard 후, 현재 가능한 좌표가 없다면 상대방 패배
          setToggle(!toggle);
          // info에 블럭/위치를 나타내기 위해 현재의 블럭/위치를 prevBlock/prevXy에 저장
          setPrevBlock(way[0]);
          setPrevXy([way[1], way[2]]);
          setInfo("someone");
          setTurn(false);
        }
      }, 1000);

      return () => clearTimeout(timer);
    }
  }, [turn, gameStart]);

  /* 앞으로 둘 수 있는 count가 0일 때, Win or Lose modal을 띄우는 useEffect */
  useEffect(() => {
    let xysList = [];

    for (let blockNum = 1; blockNum <= 5; blockNum++) {
      let xys = collectXys(blockNum, board);
      xysList = xysList.concat(xys);
    }

    // 현재 둘 수 있는 경우의 수 count
    console.log("현재 둘 수 있는 경우의 수 count: " + xysList.length);

    if (xysList.length === 0) {
      turn ? setLoseModal(true) : setWinModal(true);
    }
  }, [toggle]);

  /* --------------------------------------------------------------------------------------------------------------- */

  return (
    <>
      {/* Game Start */}
      {gameStartModal ? <GameStartModal /> : null}

      {/* All modals in main */}
      {impossibleModal ? (
        <ImpossibleModal setImpossibleModal={setImpossibleModal} />
      ) : null}
      {giveUpModal ? (
        <GiveUpModal
          setGiveUpModal={setGiveUpModal}
          turn={turn}
          setWinModal={setWinModal}
          setLoseModal={setLoseModal}
        />
      ) : null}
      {ruleDesModal ? <RuleDesModal setRuleDesModal={setRuleDesModal} /> : null}
      {winModal ? <WinModal profile={profile} nickname={nickname} /> : null}
      {loseModal ? <LoseModal nickname={nickname} /> : null}
      <div className={MainCSS.alignCenter}>
        <div className={MainCSS.mainBox}>
          <Header
            autoMode={autoMode}
            nickname={nickname}
            prevBlock={prevBlock}
            prevXy={prevXy}
            setGameStart={setGameStart}
            turn={turn}
            info={info}
          />
          <div className={MainCSS.flex}>
            {selectedBlock && selectedXy.length !== 0 ? (
              <MockBoard
                mockBoard={mockBoard}
                selectedXy={selectedXy}
                setSelectedXy={setSelectedXy}
              />
            ) : (
              <Board
                board={board}
                selectedXy={selectedXy}
                setSelectedXy={setSelectedXy}
              />
            )}
            <div>
              <FightersLayout
                autoMode={autoMode}
                profile={profile}
                first={first}
                turn={turn}
                selectedBlock={selectedBlock}
                setSelectedBlock={setSelectedBlock}
                thinking={thinking}
                gameStart={gameStart}
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
