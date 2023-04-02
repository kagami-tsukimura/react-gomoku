import lineIndex from './lineIndex';

/**
 * Determines the winner on the board.
 * @param {Array<string | null>} squares - An array that stores the state of each square on the board.
 * @param {number} boardSize - The length of one side of the board.
 * @returns {string | null} Returns the mark of the winner, if there is one, and null otherwise.
 */
export default function calcWinner(
  squares: Array<string | null>,
  boardSize: number
) {
  const lines = lineIndex(boardSize);

  for (let i = 0; i < lines.length; i++) {
    const [a, b, c, d, e] = lines[i];
    if (
      squares[a] &&
      squares[a] === squares[b] &&
      squares[a] === squares[c] &&
      squares[a] === squares[d] &&
      squares[a] === squares[e]
    ) {
      return squares[a];
    }
  }

  return null;
}
