/**
 * @param {character[][]} board
 * @return {void} Do not return anything, modify board in-place instead.
 */
var solveSudoku = function(board) {
    var isValid = function(board, row, col, num){
        var blkrow = Math.floor(row / 3) * 3;
        var blkcol = Math.floor(col / 3) * 3;
        for(var i = 0; i < 9; i++){
            if(board[i][col] == num || board[row][i] == num || 
               board[blkrow + Math.floor(i / 3)][blkcol + i % 3] == num) return false;
        }
        return true;
    }
    var backtrace = function(board, row, col){
        for(var i = row; i < 9; i++, col = 0){
            for(var j = col; j < 9; j++){
                if(board[i][j] != '.') continue;
                for(var k = 1 ; k < 10; k++){
                    if(isValid(board, i, j, k)){
                        board[i][j] = '' + k;
                        if(backtrace(board, i, j + 1))    return true;
                        else board[i][j] = '.';
                    }
                }
                return false;
            }
        }
        return true;
    }
    backtrace(board, 0, 0);
};