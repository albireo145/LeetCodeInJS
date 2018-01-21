var updateMatrix = function(matrix) {
    var queue = [];
    var row = matrix.length;
    var col = matrix[0].length;
    var dist = [[-1,0],[0,1],[1,0],[0,-1]];
    for(var i = 0; i < row; i++){
        for(var j = 0; j < col; j++){
            if(matrix[i][j] == 0) queue.push([i,j]);
            else matrix[i][j] = Infinity;
        }
    }
    while(queue.length > 0){
        var pos = queue.shift(); 
        var r = pos[0];
        var c = pos[1];
        for(var el of dist){
            var nx = r + el[0];
            var ny = c + el[1];
            if(nx < 0 || nx >= row || ny < 0 || ny >= col || matrix[nx][ny] <= matrix[r][c] + 1) continue;
            queue.push(nx,ny);
            matrix[nx][ny] = Math.min(matrix[r][c] + 1, matrix[nx][ny]);
        }
    }
    return matrix;
};