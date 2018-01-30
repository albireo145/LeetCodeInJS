/**
 * @param {number[][]} M
 * @return {number}
 */

var findCircleNum = function(M) {
    var visited = new Array(M.length);
    visited.fill(0);
    var num = 0;
    var dfs = function(M, row, visited){
        for(var j = 0; j < M.length; j++){
            if(M[row][j] == 1 && visited[j] == 0){
                visited[j] = 1
                dfs(M, j, visited);
            }
        }
    }
    for(var i = 0; i < M.length; i++){
        if(visited[i] == 0){
            dfs(M, i, visited);
            num++;
        }
    }
    return num;
};