/* 최선의 블럭 및 좌표를 찾아내기 위한 함수 */
const findTheBestWay = () => {};

/* runRecursive()를 호출하기 위한 함수 */
const callRecursive = () => {};

/* 모든 경우의 수 좌표를 구하기 위한 재귀 함수 */
const runRecursive = () => {};

/* 경우의 수를 구하기 위해 tempBoard를 생성하는 함수 */
const copyBoard = () => {};

/* board에 block을 set하기 위한 함수 */
// const setBlockOnTheBoard = (selectedBlock, selectedXy, board) => {
//   if (selectedBlock === 1) {
//     for (let i = 0; i < 10; i++) {
//       if (i === selectedXy[0]) {
//         for (let j = selectedXy[1]; j < selectedXy[1] + 3; j++) {
//           board[i][j] = 1;
//         }
//         break;
//       }
//     }
//   } else {
//     let blockIndex = 0;
//     for (let i = 0; i < 10; i++) {
//       if (i === selectedXy[0] || i === selectedXy[0] + 1) {
//         for (let j = selectedXy[1]; j < selectedXy[1] + 2; j++) {
//           if (blocks[selectedBlock - 1][blockIndex++] === 1) {
//             board[i][j] = 1;
//           }
//         }
//       }
//     }
//   }
// };

// export {
//   putRandomBlock,
//   checkBoard,
//   findTheBestWay,
//   callRecursive,
//   runRecursive,
//   collectSys,
//   copyBoard,
//   setBlockOnTheBoard,
// };
