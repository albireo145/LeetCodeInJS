/**
 * @param {character[][]} board
 * @param {string} word
 * @return {boolean}
 */
var height;
var width;
var exist = function(board, word) {
    height = board.length;
    if(height == 0) return false;
    width = board[0].length;
    var mask = [];
    for(var i = 0;i < height;i++){
        var arr = new Array(width);
        arr.fill(0);
        mask.push(arr);
    }
    for(var i = 0;i < height;i++){
        for(var j = 0;j < width;j++){
            if(backtrace(board,word,i,j,0,mask))
                return true;
        }
    }
    return false
};
var backtrace = function(board,word,i,j,pos,mask){
    if(board[i][j] != word[pos])  return false;
    if(pos == word.length - 1) return true;
    
    mask[i][j] = 1;
//     right
    if(j+1<width && mask[i][j+1] == 0 && arguments.callee(board,word,i,j+1,pos+1,mask))
        return true;
//     bottom
    if(i+1<height && mask[i+1][j] == 0 && arguments.callee(board,word,i+1,j,pos+1,mask))
        return true;
//     left
    if(i>0 && mask[i-1][j] == 0 && arguments.callee(board,word,i-1,j,pos+1,mask))
        return true;
//     top
    if(j>0 && mask[i][j-1] == 0 && arguments.callee(board,word,i,j-1,pos+1,mask))
        return true;
    mask[i][j] = 0;
    return false;
}