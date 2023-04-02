import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import './styles.css';

import Game from './Game';

const root = createRoot(document.getElementById('root')!);
const board = 10;
root.render(
  <StrictMode>
    <Game boardSize={board} />
  </StrictMode>
);
