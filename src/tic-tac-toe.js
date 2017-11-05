class TicTacToe {
    constructor() {
        this.matrix = [[null,null,null],[null,null,null],[null,null,null]];
        this.turn = 0;
        this.current = 'x';
        this.winner = null;
        this.draw = false;
    }

    tick(curState){
        if(curState === 'x') {
            return 'o';
        }
        if(curState === 'o') {
            return 'x';
        }
    }

    getCurrentPlayerSymbol() {
        return this.current;
    }

    nextTurn(rowIndex, columnIndex) {
        let x = 'xxx';
        let o = 'ooo';
        let check = true;
        if(this.matrix[rowIndex][columnIndex] !== null){
            check = false;
        }
        if(check) {            
            this.matrix[rowIndex][columnIndex] = this.getCurrentPlayerSymbol();
            for(let i = 0; i < 3; i++){
                if(this.matrix[i][0] + this.matrix[i][1] + this.matrix[i][2] === x){
                    this.winner = 'x';
                }
                if(this.matrix[i][0] + this.matrix[i][1] + this.matrix[i][2] === o){
                    this.winner = 'o';
                }
                if(this.matrix[0][i] + this.matrix[1][i] + this.matrix[2][i] === x){
                    this.winner = 'x';
                }
                if(this.matrix[0][i] + this.matrix[1][i] + this.matrix[2][i] === o){
                    this.winner = 'o';
                }
            }
            if(this.matrix[0][0] + this.matrix[1][1] + this.matrix[2][2] === x){
                this.winner = 'x'
            }
            if(this.matrix[0][0] + this.matrix[1][1] + this.matrix[2][2] === o){
                this.winner = 'o'
            }
            if(this.matrix[0][2] + this.matrix[1][1] + this.matrix[2][0] === x){
                this.winner = 'x'
            }
            if(this.matrix[0][2] + this.matrix[1][1] + this.matrix[2][0] === o){
                this.winner = 'o'
            }
            this.current = this.tick(this.current);
        }        
    }

    isFinished() {
        if(this.winner !== null || this.isDraw() === true) {
            return true;
        }
        else {
            return false;
        }
    }

    getWinner() {
        return this.winner;
    }

    noMoreTurns() {
        for(let i = 0; i < 3; i++){
            for(let j = 0; j < 3; j++) {
                if(this.matrix[i][j] === null){
                    return false;
                }
            }
        }
        return true;
    }

    isDraw() {
        if(this.winner === null && this.noMoreTurns() === true){
            this.draw = true;
        }
        return this.draw;
    }

    getFieldValue(rowIndex, colIndex) {
        return this.matrix[rowIndex][colIndex];
    }
}

module.exports = TicTacToe;
