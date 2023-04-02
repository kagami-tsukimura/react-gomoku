import { useState, useMemo } from 'react';
import Board, { BoardProps } from './components/Board';

interface GameProps {
  boardSize: number;
}

/**
 * Component for managing the game state and rendering the game board and move history.
 * @returns  {JSX.Element} The Game component
 */
export default function Game({ boardSize }: GameProps): JSX.Element {
  const [history, setHistory] = useState<Array<Array<string | null>>>([
    Array(boardSize ** 2).fill(null),
  ]);
  const [currentMove, setCurrentMove] = useState(0);
  const xIsNext = currentMove % 2 === 1;
  const currentSquares = useMemo(() => {
    return history[currentMove];
  }, [history, currentMove]);

  /**
   * Updates the game state when a square is played.
   * @param {Array<string | null>} nextSquares - The new state of the game board
   */
  function handlePlay(nextSquares: Array<string | null>): void {
    const nextHistory = [...history.slice(0, currentMove + 1), nextSquares];
    setHistory(nextHistory);
    setCurrentMove(nextHistory.length - 1);
  }
  /**
   * Changes the current move to the specified move in the game history.
   * @param {number} nextMove - The index of the move to jump to
   */
  function jumpTo(nextMove: number): void {
    setCurrentMove(nextMove);
  }
  const moves = history.map((_, move) => {
    let description;
    if (move > 0) {
      description = 'Go to move #' + move;
    } else {
      description = 'Go to game start';
    }
    return (
      <li key={move}>
        <button onClick={() => jumpTo(move)}>{description}</button>
      </li>
    );
  });

  const boardProps: BoardProps = {
    xIsNext,
    squares: currentSquares,
    onPlay: handlePlay,
    size: boardSize,
  };

  return (
    <div className='game'>
      <div className='game-board'>
        <Board {...boardProps} />
      </div>
      <div className='game-info'>
        <ol>{moves}</ol>
      </div>
    </div>
  );
}
