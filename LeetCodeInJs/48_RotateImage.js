/**
 * @param {number[][]} matrix
 * @return {void} Do not return anything, modify matrix in-place instead.
 */
var rotate = function(matrix) {
    var swap = function(row, col){
        var temp = matrix[row][col];
        matrix[row][col] = matrix[col][row];
        matrix[col][row] = temp;
    }
    matrix.reverse();
    for(var i = 0, len = matrix.length; i < len; i++){
        for(var j = i; j < len; j++){
            swap(i, j);
        }
    }
};