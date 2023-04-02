import Square from './Square';
import calcWinner from '../utils/calcWinner';

export interface BoardProps {
  xIsNext: boolean;
  squares: Array<string | null>;
  onPlay: (squares: Array<string | null>) => void;
  size: number;
}

/**
 * Board component that represents the game board.
 * @param {Object} props - The props object.
 * @param {boolean} props.xIsNext - Determines whether it's the turn of the 'X' player or the 'O' player.
 * @param {Array<string | null>} props.squares - The current state of the board represented as an array.
 * @param {Function} props.onPlay - The callback function to be invoked when a player makes a move.
 * @param {number} props.size - The size of the board.
 * @returns {JSX.Element} A JSX element representing the game board.
 */
export default function Board({ xIsNext, squares, onPlay, size }: BoardProps) {
  function handleClick(i: number) {
    if (squares[i] || calcWinner(squares, size)) {
      return;
    }
    const nextSquares = squares.slice();
    if (xIsNext) {
      nextSquares[i] = '○';
    } else {
      nextSquares[i] = '●';
    }
    onPlay(nextSquares);
  }

  let status;
  if (squares.indexOf(null) === -1) {
    status = 'Draw Game!';
  }
  const winner = calcWinner(squares, size);
  if (winner) {
    status = `Winner: ${winner}`;
  } else if (squares.indexOf(null) === -1) {
    status = 'Draw Game!';
  } else {
    status = `Next player: ${xIsNext ? '○' : '●'}`;
  }

  return (
    <>
      <div className='status'>{status}</div>
      {Array(size)
        .fill(null)
        .map((_, row) => (
          <div className='board-row' key={row}>
            {squares.slice(row * size, (row + 1) * size).map((square, col) => (
              <Square
                key={row * size + col}
                value={square}
                onSquareClick={() => handleClick(row * size + col)}
              />
            ))}
          </div>
        ))}
    </>
  );
}
