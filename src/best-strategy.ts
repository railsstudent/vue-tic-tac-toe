import { Move } from "@/types";

const MAXIMIZE_SCORE = 10;

export class Strategy {
  private multiArrayBoard: string[][];
  constructor(
    board: string[],
    private player: string,
    private opponent: string
  ) {
    this.multiArrayBoard = [];
    this.multiArrayBoard.push([board[0], board[1], board[2]]);
    this.multiArrayBoard.push([board[3], board[4], board[5]]);
    this.multiArrayBoard.push([board[6], board[7], board[8]]);

    console.log("multiArrayBoard", this.multiArrayBoard);
  }

  isMovesLeft() {
    return this.multiArrayBoard.reduce(
      (acc, row) => acc + row.filter(r => r === "").length,
      0
    );
  }

  evaluate() {
    // check for horizontal victory
    for (let i = 0; i < this.multiArrayBoard.length; i++) {
      if (
        this.multiArrayBoard[i][0] === this.multiArrayBoard[i][1] &&
        this.multiArrayBoard[i][1] === this.multiArrayBoard[i][2]
      ) {
        if (this.multiArrayBoard[i][0] === this.player) {
          return MAXIMIZE_SCORE;
        } else if (this.multiArrayBoard[i][0] == this.opponent) {
          return -MAXIMIZE_SCORE;
        }
      }
    }

    // check for vertical victory
    for (let i = 0; i < this.multiArrayBoard.length; i++) {
      if (
        this.multiArrayBoard[0][i] === this.multiArrayBoard[1][i] &&
        this.multiArrayBoard[1][i] === this.multiArrayBoard[2][i]
      ) {
        if (this.multiArrayBoard[0][i] === this.player) {
          return MAXIMIZE_SCORE;
        } else if (this.multiArrayBoard[0][i] == this.opponent) {
          return -MAXIMIZE_SCORE;
        }
      }
    }

    // Checking for Diagonals for X or O victory.
    if (
      this.multiArrayBoard[0][0] == this.multiArrayBoard[1][1] &&
      this.multiArrayBoard[1][1] == this.multiArrayBoard[2][2]
    ) {
      if (this.multiArrayBoard[0][0] == this.player) return MAXIMIZE_SCORE;
      else if (this.multiArrayBoard[0][0] == this.opponent)
        return -MAXIMIZE_SCORE;
    }

    if (
      this.multiArrayBoard[0][2] == this.multiArrayBoard[1][1] &&
      this.multiArrayBoard[1][1] == this.multiArrayBoard[2][0]
    ) {
      if (this.multiArrayBoard[0][0] == this.player) return MAXIMIZE_SCORE;
      else if (this.multiArrayBoard[0][0] == this.opponent)
        return -MAXIMIZE_SCORE;
    }

    return 0;
  }

  minimax(depth: number, isMax: boolean) {
    const score = this.evaluate();

    // If Maximizer has won the game
    // return his/her evaluated score
    if (score === MAXIMIZE_SCORE) {
      return score;
    }

    // If Minimizer has won the game
    // return his/her evaluated score
    if (score === -MAXIMIZE_SCORE) {
      return score;
    }

    // If there are no more moves and
    // no winner then it is a tie
    if (!this.isMovesLeft()) {
      return 0;
    }

    // If this maximizer's move
    if (isMax) {
      let best = -1000;

      // Traverse all cells
      for (let i = 0; i < this.multiArrayBoard.length; i++) {
        for (let j = 0; j < this.multiArrayBoard[i].length; j++) {
          // Check if cell is empty
          if (this.multiArrayBoard[i][j] === "") {
            // Make the move
            this.multiArrayBoard[i][j] = this.player;
            // Call minimax recursively and choose
            // the maximum value
            best = Math.max(best, this.minimax(depth + 1, !isMax));
            // Undo the move
            this.multiArrayBoard[i][j] = "";
          }
        }
      }
      return best;
    } else {
      // If this minimizer's move
      let best = 1000;

      // Traverse all cells
      for (let i = 0; i < 3; i++) {
        for (let j = 0; j < 3; j++) {
          // Check if cell is empty
          if (this.multiArrayBoard[i][j] == "") {
            // Make the move
            this.multiArrayBoard[i][j] = this.opponent;

            // Call minimax recursively and choose
            // the minimum value
            best = Math.min(best, this.minimax(depth + 1, !isMax));

            // Undo the move
            this.multiArrayBoard[i][j] = "";
          }
        }
      }
      return best;
    }
  }

  findBestMove() {
    const bestMove: Move = {
      idx: -1,
      score: -1000
    };

    for (let i = 0; i < this.multiArrayBoard.length; i++) {
      for (let j = 0; j < this.multiArrayBoard[i].length; j++) {
        // Check if cell is empty
        if (this.multiArrayBoard[i][j] === "") {
          // Make the move
          this.multiArrayBoard[i][j] = this.player;
          // Call minimax recursively and choose
          // the maximum value
          const best = this.minimax(0, false);
          // Undo the move
          this.multiArrayBoard[i][j] = "";

          if (best > bestMove.score) {
            bestMove.score = best;
            bestMove.idx = i * this.multiArrayBoard[i].length + j;
          }
        }
      }
    }

    return bestMove;
  }
}
