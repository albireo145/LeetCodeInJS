/**
 * @param {number[][]} matrix
 * @return {boolean}
 */
var isToeplitzMatrix = function(matrix) {
    var row = matrix.length;
    var col = matrix[0].length;
    for(var i = 0; i < row; i++){
        var x = i, y = 0;
        while(x < row && y < col) if(matrix[x++][y++] != matrix[i][0]) return false; 
    }
    for(var i = 1; i < col; i++){
        var x = 0, y = i;
        while(x < row && y < col) if(matrix[x++][y++] != matrix[0][i]) return false;
    }
    return true;
};