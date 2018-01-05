/**
 * @param {number[][]} board
 * @return {void} Do not return anything, modify board in-place instead.
 */
var gameOfLife = function(board) {
    var row = board.length;
    var col = board[0].length;
    var getNeighbors = function(board,row,col,x,y){
        var num = 0;
        for(var i = Math.max(0,x - 1); i < Math.min(row,x + 2); i++){
            for(var j = Math.max(0,y - 1); j < Math.min(col,y + 2); j++){
                if(i == x && j == y) continue;
                if( board[i][j] == 1 || board[i][j] == 2) num++;
            }
        }
        return num;
    }
    for(var i = 0; i < row; i++){
        for(var j = 0; j < col; j++){
            var num = getNeighbors(board,row,col,i,j);
            if(num == 2) continue;
            else if(num == 3) board[i][j] = board[i][j] == 0 ? 3 : 1;
            else board[i][j] = board[i][j] == 1 ? 2 : 0;
        }
    }
    for(var i = 0; i < row; i++){
        for(var j = 0; j < col; j++){
            board[i][j] %= 2;
        }
    }
};