/**
 *
 * @param {Array} existingBoard - array of queens positions,
 * where each value is position in row and index is position in column
 * @param {Number} newQueenPosition
 * @returns {boolean}
 */
function isSafe(existingBoard, newQueenPosition) {
  const currentColumn = existingBoard.length;
  return !existingBoard.some((queenPosInRow, queenPosInColumn) => {
    const delta = currentColumn - queenPosInColumn;
    const notBeatenByRow = queenPosInRow !== newQueenPosition;
    const notBeatenByLowerDiagonal = queenPosInRow + delta !== newQueenPosition;
    const notBeatenByUpperDiagonal = queenPosInRow - delta !== newQueenPosition;
    return !(notBeatenByRow && notBeatenByLowerDiagonal && notBeatenByUpperDiagonal);
  })
}


function findAllSolutions(columnsLeft, N) {
  if (columnsLeft <= 0) return [[]];
  return findAllSolutions(columnsLeft - 1, N)
    .reduce((result, currentBoard) => {
      for (let newQueenPos = 0; newQueenPos < N; newQueenPos++) {
        if (isSafe(currentBoard, newQueenPos))
          result.push(currentBoard.concat([newQueenPos]))
      }
      return result;
    }, []);
}

function countSolutions(N) {
  return findAllSolutions(N, N).length
}

module.exports.isSafe = isSafe;
module.exports.countSolutions = countSolutions;