/**
 * Returns an array of line indices for the specified board size.
 * Each line index is an array of five integers that represent the indices of squares that form a line.
 *
 * @param {number} boardSize - The size of the board.
 * @returns {number[][]} An array of line indices.
 */
export default function lineIndex(boardSize: number): number[][] {
  const lines: number[][] = [];

  // Horizontal
  for (let i = 0; i < boardSize * boardSize; i += boardSize) {
    for (let j = i; j <= i + boardSize - 5; j++) {
      lines.push([j, j + 1, j + 2, j + 3, j + 4]);
    }
  }

  // Vertical
  for (let i = 0; i < boardSize; i++) {
    for (let j = i; j <= i + boardSize * (boardSize - 5); j += boardSize) {
      lines.push([
        j,
        j + boardSize,
        j + boardSize * 2,
        j + boardSize * 3,
        j + boardSize * 4,
      ]);
    }
  }

  // Diagonal (Upper left to lower right)
  for (let i = 0; i <= boardSize * boardSize - boardSize * 4; i++) {
    if (i % boardSize <= boardSize - 5) {
      lines.push([
        i,
        i + (boardSize + 1),
        i + (boardSize + 1) * 2,
        i + (boardSize + 1) * 3,
        i + (boardSize + 1) * 4,
      ]);
    }
  }

  // Diagonal (Upper right to lower left)
  for (let i = 0; i <= boardSize * boardSize - boardSize * 4; i++) {
    if (i % boardSize >= 4) {
      lines.push([
        i,
        i + (boardSize - 1),
        i + (boardSize - 1) * 2,
        i + (boardSize - 1) * 3,
        i + (boardSize - 1) * 4,
      ]);
    }
  }

  return lines;
}
