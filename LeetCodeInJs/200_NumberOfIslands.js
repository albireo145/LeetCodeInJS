/**
 * @param {character[][]} grid
 * @return {number}
 */
var numIslands = function(grid) {
    if(grid.length <= 0) return 0;
    var islandNum = 0;
    var row = grid.length;
    var col = grid[0].length;
    var dfs = function(grid,i,j){
        if(i < 0 || j < 0 || i >= row || j >= col || grid[i] == null || grid[i][j] != '1') return;
        grid[i][j] = 0;
        arguments.callee(grid,i-1,j);
        arguments.callee(grid,i,j+1);
        arguments.callee(grid,i+1,j);
        arguments.callee(grid,i,j-1);
    }
    for(var i = 0; i < row; i++){
        for(var j = 0; j < col; j++){
            if(grid[i][j] == '1'){
                dfs(grid,i,j);
                islandNum++;
            }
        }
    }
    return islandNum;
};