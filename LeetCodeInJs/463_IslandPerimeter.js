/**
 * @param {number[][]} grid
 * @return {number}
 */
var islandPerimeter = function(grid) {
    if(grid == null) return 0;
    var neighbor = 0;
    var islend = 0;
    for(var i = 0; i < grid.length; i++){
        for(var j = 0; j < grid[0].length;j++){
            if(grid[i][j] == 1){
                islend++;
                if(j + 1 < grid[0].length && grid[i][j+1] == 1) neighbor++;
                if(i + 1 < grid.length && grid[i+1][j] == 1) neighbor++;
            } 
        }
    }
    return 4*islend - 2*neighbor;
};