import { Move } from "@/types";

const MAXIMIZE_SCORE = 10;
const dimensions = 3;

export class Strategy {
  constructor(private player: string, private opponent: string) {}

  private isMovesLeft(board: string[]) {
    return board.filter(b => b === "").length > 0;
  }

  private evaluate(board: string[]) {
    const hort = [
      [0, 1, 2],
      [3, 4, 5],
      [6, 7, 8]
    ];

    // check for horizontal victory
    for (let i = 0; i < hort.length; i++) {
      const row = hort[i];
      if (board[row[0]] === board[row[1]] && board[row[1]] === board[row[2]]) {
        if (board[row[0]] === this.player) {
          return MAXIMIZE_SCORE;
        } else if (board[row[0]] == this.opponent) {
          return -MAXIMIZE_SCORE;
        }
      }
    }

    const vert = [
      [0, 3, 6],
      [1, 4, 7],
      [2, 5, 8]
    ];

    // check for vertical victory
    for (let i = 0; i < vert.length; i++) {
      const column = vert[i];
      if (
        board[column[0]] === board[column[1]] &&
        board[column[1]] === board[column[2]]
      ) {
        if (board[column[0]] === this.player) {
          return MAXIMIZE_SCORE;
        } else if (board[column[0]] == this.opponent) {
          return -MAXIMIZE_SCORE;
        }
      }
    }

    const leftDiag = [0, 4, 7];

    // Checking for Diagonals for X or O victory.
    if (
      board[leftDiag[0]] === board[leftDiag[1]] &&
      board[leftDiag[1]] === board[leftDiag[2]]
    ) {
      if (board[leftDiag[0]] === this.player) {
        return MAXIMIZE_SCORE;
      } else if (board[leftDiag[0]] === this.opponent) {
        return -MAXIMIZE_SCORE;
      }
    }

    const rightDiag = [6, 4, 2];
    if (
      board[rightDiag[0]] == board[rightDiag[1]] &&
      board[rightDiag[1]] == board[rightDiag[2]]
    ) {
      if (board[rightDiag[0]] === this.player) {
        return MAXIMIZE_SCORE;
      } else if (board[rightDiag[0]] === this.opponent) {
        return -MAXIMIZE_SCORE;
      }
    }

    return 0;
  }

  private minimax(board: string[], depth: number, isMax: boolean) {
    const score = this.evaluate(board);

    // If Maximizer has won the game
    // return his/her evaluated score
    if (score === MAXIMIZE_SCORE) {
      return score - depth;
    }

    // If Minimizer has won the game
    // return his/her evaluated score
    if (score === -MAXIMIZE_SCORE) {
      return score + depth;
    }

    // If there are no more moves and
    // no winner then it is a tie
    if (!this.isMovesLeft(board)) {
      return 0;
    }

    // If this maximizer's move
    if (isMax) {
      let best = -1000;

      // Traverse all cells
      for (let i = 0; i < dimensions; i++) {
        for (let j = 0; j < dimensions; j++) {
          const idx = i * dimensions + j;
          // Check if cell is empty
          if (board[idx] === "") {
            // Make the move
            board[idx] = this.player;
            // Call minimax recursively and choose
            // the maximum value
            best = Math.max(best, this.minimax(board, depth + 1, !isMax));
            // Undo the move
            board[idx] = "";
          }
        }
      }
      return best;
    } else {
      // If this minimizer's move
      let best = 1000;

      // Traverse all cells
      for (let i = 0; i < dimensions; i++) {
        for (let j = 0; j < dimensions; j++) {
          const idx = i * dimensions + j;

          // Check if cell is empty
          if (board[idx] == "") {
            // Make the move
            board[idx] = this.opponent;

            // Call minimax recursively and choose
            // the minimum value
            best = Math.min(best, this.minimax(board, depth + 1, !isMax));

            // Undo the move
            board[idx] = "";
          }
        }
      }
      return best;
    }
  }

  findBestMove(board: string[]) {
    const bestMove: Move = {
      idx: -1,
      score: -1000
    };

    for (let i = 0; i < dimensions; i++) {
      for (let j = 0; j < dimensions; j++) {
        const idx = i * dimensions + j;

        // Check if cell is empty
        if (board[idx] === "") {
          // Make the move
          board[idx] = this.player;
          // Call minimax recursively and choose
          // the maximum value
          const best = this.minimax(board, 0, false);
          // Undo the move
          board[idx] = "";

          if (best > bestMove.score) {
            bestMove.score = best;
            bestMove.idx = idx;
          }
        }
      }
    }

    return bestMove;
  }
}
