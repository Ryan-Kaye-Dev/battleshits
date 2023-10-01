export default class Player {
    constructor(name, board) {
        this.name = name;
        this.board = board;
        this.turn = false;
    }

    randomAttack() {
        let x = Math.floor(Math.random() * 10);
        let y = Math.floor(Math.random() * 10);
        if (this.board.board[x][y].hit) {
            this.randomAttack();
        } else {
            this.board.receiveAttack(x, y);
        }
    }
}