/**
 * @param {number[][]} matrix
 * @param {number} target
 * @return {boolean}
 */
var searchMatrix = function(matrix, target) {
    if(matrix.length == 0) return false;
    var row = 0;
    var col = matrix[0].length - 1
    while(col >= 0 && row < matrix.length){
        if(matrix[row][col] == target) return true;
        else if(target < matrix[row][col]) col--;
        else if(target > matrix[row][col]) row++;
    }
    return false;
};