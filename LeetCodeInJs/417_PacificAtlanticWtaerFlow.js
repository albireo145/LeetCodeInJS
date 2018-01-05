/**
 * @param {number[][]} matrix
 * @return {number[][]}
 */
var pacificAtlantic = function(matrix) {
    if(matrix.length == 0) return [];
    var m = matrix.length;
    var n = matrix[0].length;
    var Pacific = [];
    for(var i = 0; i < m; i++){
        var arr = new Array(n);
        arr.fill(false);
        Pacific.push(arr);
    }
    var Atlantic = [];
    for(var i = 0; i < m; i++){
        var arr = new Array(n);
        arr.fill(false);
        Atlantic.push(arr);
    }
    var pQueue = [];
    var aQueue = [];
    for(var i = 0; i < m; i++){
        pQueue.push([i,0]);
        aQueue.push([i,n-1]);
        Pacific[i][0] = true;
        Atlantic[i][n-1] = true;
    }
    for(var i = 1; i < n; i++){
        pQueue.push([0,i]);
        aQueue.push([m-1,n-1-i]);
        Pacific[0][i] = true;
        Atlantic[m-1][n-1-i] = true;
    }
    var dis = [[-1,0],[0,1],[1,0],[0,-1]];
    var bfs = function(matrix,queue,board,dis,m,n){
        while(queue.length > 0){
            var pos = queue.shift();
            for(var ele of dis){
                var x = pos[0] + ele[0];
                var y = pos[1] + ele[1];
                if(x < 0 || x >= m || y < 0 || y >= n || board[x][y] || matrix[pos[0]][pos[1]] > matrix[x][y]){
                    continue;
                }
                board[x][y] = true;
                queue.push([x,y]);
            }
        }
    }
    bfs(matrix,pQueue,Pacific,dis,m,n);
    bfs(matrix,aQueue,Atlantic,dis,m,n);
    var res = [];
    for(var i = 0; i < m; i++){
        for(var j = 0; j < n; j++){
            if(Pacific[i][j] && Atlantic[i][j]){
                res.push([i,j]);
            }
        }
    }
    return res;
};