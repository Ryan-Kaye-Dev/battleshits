import Player from './Player';
import Gameboard from './Gameboard';
import { renderBoards, updateBoards } from './ui';

export default function gameLoop() {
    let player1board = new Gameboard();
    let player2board = new Gameboard();

    let player1 = new Player('Player 1', player1board);
    let player2 = new Player('Player 2', player2board);
    player1.turn = true;
    let gameOver = false;
    let winner = null;

    player1board.randomlyPlaceShips();
    player2board.randomlyPlaceShips();
    renderBoards(player1board, player2board);

    while (!gameOver) {
        if (player1.turn) {
            player1.randomAttack();
            updateBoards(player1board, player2board);
            player1.turn = false;
            player2.turn = true;
        } else {
            player2.randomAttack();
            updateBoards(player1board, player2board);
            player2.turn = false;
            player1.turn = true;
        }
        if (player1board.isAllSunk()) {
            gameOver = true;
            winner = player2;
        } else if (player2board.isAllSunk()) {
            gameOver = true;
            winner = player1;
        }
    }
    return winner;
}