/**
 * @param {character[][]} board
 * @return {number}
 */
var countBattleships = function(board) {
    var row = board.length;
    var col = board[0].length;
    var x = 0;
    var neighbor = 0;
    for(var i = 0; i < row; i++){
        for(var j = 0; j < col; j++){
            if(board[i][j] == 'X'){
                x++;
                if(i+1 < row && board[i+1][j] == 'X') neighbor++;
                if(j+1 < col && board[i][j+1] == 'X') neighbor++;
            }
        }
    }
    return x - neighbor;
};