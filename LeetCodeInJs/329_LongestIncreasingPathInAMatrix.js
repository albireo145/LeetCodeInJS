/**
 * @param {number[][]} matrix
 * @return {number}
 */
var longestIncreasingPath = function(matrix) {
    if(matrix.length == 0) return 0;
    var row = matrix.length;
    var col = matrix[0].length;
    var memo = new Array(row);
    for(var i = 0; i < row; i++){
        var arr = new Array(col);
        arr.fill(0);
        memo[i] = arr;
    }
    var res = 0;
    var dfs = function(memo,matrix,row,col,x,y,lastval){
        if(x < 0 || x > row - 1 || y < 0 || y > col - 1 || matrix[x][y] <= lastval) return 0;
        if(memo[x][y] != 0) return memo[x][y];
        var top = arguments.callee(memo,matrix,row,col,x - 1, y,matrix[x][y]) + 1;
        var right = arguments.callee(memo,matrix,row,col,x, y + 1,matrix[x][y]) + 1;
        var bottom = arguments.callee(memo,matrix,row,col,x + 1, y,matrix[x][y]) + 1;
        var left = arguments.callee(memo,matrix,row,col, x , y - 1,matrix[x][y]) + 1;
        memo[x][y] = Math.max(left, right, top, bottom);
        return memo[x][y];
    }
     for(var i = 0; i < row; i++){ 
          for(var j = 0; j < col; j++){
              var cur;
              if(memo[i][j] != 0) cur = memo[i][j];
              else cur = dfs(memo,matrix,row,col,i,j,-1);
              res = res > cur ? res : cur;
          }
     }
    return res;
};