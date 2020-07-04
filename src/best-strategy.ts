
const MAXIMIZE_SCORE = 10;

export class Strategy {
    private multiArrayBoard: string[][]
    constructor(board: string[], private player: string, private opponent: string) {
        this.multiArrayBoard = []
        this.multiArrayBoard.push([
            board[0],
            board[1],
            board[2]
        ])        
        this.multiArrayBoard.push([
            board[3],
            board[4],
            board[5]
        ])        
        this.multiArrayBoard.push([
            board[6],
            board[7],
            board[8]
        ])        
    }

    isMoveLeft() {
        return this.multiArrayBoard.reduce((acc, row) => 
            acc + row.filter(r => r === "").length
        , 0); 
    }

    evaluate() {
        // check for horizontal victory
        for (let i = 0; i < this.multiArrayBoard.length; i++) {
            if (this.multiArrayBoard[i][0] === this.multiArrayBoard[i][1] && 
                this.multiArrayBoard[i][1] === this.multiArrayBoard[i][2]) {
                if (this.multiArrayBoard[i][0] === this.player) {
                    return MAXIMIZE_SCORE; 
                }
                else if (this.multiArrayBoard[i][0] == this.opponent) {
                    return -MAXIMIZE_SCORE;    
                }
            }
        }

        // check for vertical victory
        for (let i = 0; i < this.multiArrayBoard.length; i++) {
            if (this.multiArrayBoard[0][i] === this.multiArrayBoard[1][i] && 
                this.multiArrayBoard[1][i] === this.multiArrayBoard[2][i]) {
                if (this.multiArrayBoard[0][i] === this.player) {
                    return MAXIMIZE_SCORE; 
                }
                else if (this.multiArrayBoard[0][i] == this.opponent) {
                    return -MAXIMIZE_SCORE;    
                }
            }
        }

        // Checking for Diagonals for X or O victory. 
        if (this.multiArrayBoard[0][0] == this.multiArrayBoard[1][1] && this.multiArrayBoard[1][1] == this.multiArrayBoard[2][2]) 
        { 
            if (this.multiArrayBoard[0][0] == this.player) 
                return MAXIMIZE_SCORE; 
            else if (this.multiArrayBoard[0][0] == this.opponent) 
                return -MAXIMIZE_SCORE; 
        }

        if (this.multiArrayBoard[0][2] == this.multiArrayBoard[1][1] && this.multiArrayBoard[1][1] == this.multiArrayBoard[2][0]) 
        { 
            if (this.multiArrayBoard[0][0] == this.player) 
                return MAXIMIZE_SCORE; 
            else if (this.multiArrayBoard[0][0] == this.opponent) 
                return -MAXIMIZE_SCORE; 
        } 
     
        return 0;
    }
}