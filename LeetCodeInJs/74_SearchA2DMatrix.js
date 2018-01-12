/**
 * @param {number[][]} matrix
 * @param {number} target
 * @return {boolean}
 */
var searchMatrix = function(matrix, target) {
    if(matrix.length == 0) return false;
    var row = matrix.length;
    var col = matrix[0].length
    var left = 0;
    var right = row * col - 1;
    while(left <= right){
        var mid = left + Math.floor((right - left) / 2);
        if(target == matrix[Math.floor(mid / col)][mid % col]) return true;
        if(target > matrix[Math.floor(mid / col)][mid % col]) left = mid + 1;
        else right = mid - 1;
    }
    return false;
};