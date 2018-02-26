/**
 * @param {number[][]} grid
 * @return {number}
 */
// O(n)
var minPathSum = function(grid) {
    var row = [];
    var sum = 0;
    for(var i = 0; i < grid[0].length; i++){
        row[i] = sum += grid[0][i];
    }
    sum = row[0];
    for(var i = 1; i < grid.length; i++){
        row[0] = sum += grid[i][0];
        for(var j = 1; j < grid[0].length; j++){
            row[j] = Math.min(row[j] , row[j - 1]) + grid[i][j];
        }
    }
    return row[row.length - 1];
};
// space O(mn)
// var minPathSum = function(grid) {
//     var row = [];
//     var col = [];
//     var sum = 0
//     for(var i = 0; i < grid[0].length; i++){
//         row[i] = sum += grid[0][i];
//     }
//     sum = 0;
//     for(var j = 0; j < grid.length; j++){
//         col[j] = sum += grid[j][0];
//     }
//     for(var i = 1; i < grid.length; i++){
//         row[0] = col[i];
//         for(var j = 1; j < grid[0].length; j++){
//             row[j] = Math.min(row[j] , row[j - 1]) + grid[i][j];
//         }
//     }
//     return row[row.length - 1];
// };