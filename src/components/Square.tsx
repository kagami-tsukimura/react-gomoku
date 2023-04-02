interface SquareProps {
  value: string | null;
  onSquareClick: () => void;
}

/**
 * Represents a square on the game board.
 * @param {object} props - The props object.
 * @param {string | null} props.value - The value of the square, either "X", "O", or null.
 * @param {function} props.onSquareClick - The callback function to be called when the square is clicked.
 * @returns {JSX.Element} The rendered square button.
 */
export default function Square({ value, onSquareClick }: SquareProps) {
  return (
    <button className='square' onClick={onSquareClick}>
      {value}
    </button>
  );
}
