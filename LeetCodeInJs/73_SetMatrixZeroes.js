/**
 * @param {number[][]} matrix
 * @return {void} Do not return anything, modify matrix in-place instead.
 */
var setZeroes = function(matrix) {
    var col0 = false;
    var row = matrix.length;
    var col = matrix[0].length;
    for(var i = 0; i < row; i++){
        if(matrix[i][0] == 0) col0 = true;
        for(var j = 1; j < col; j++){
            if(matrix[i][j] == 0){
                matrix[i][0] = 0;
                matrix[0][j] = 0;
            }
        }
    }
    for(var i = row - 1; i > -1; i--){
        for(var j = col - 1; j > 0; j--){
            if(matrix[i][0] == 0 || matrix[0][j] == 0) matrix[i][j] = 0;
        }
        if(col0) matrix[i][0] = 0;
    }
};

// var setZeroes = function(matrix) {
//     var col0 = false;
//     var row = matrix.length;
//     var col = matrix[0].length;
//     for(var i = 0; i < row; i++){
//         if(matrix[i][0] == 0) col0 = true;
//         for(var j = 1; j < col; j++){
//             if(matrix[i][j] == 0){
//                 matrix[i][0] = 0;
//                 matrix[0][j] = 0;
//             }
//         }
//     }
//     for(var i = 1; i < row; i++){
//         if(matrix[i][0] == 0) matrix[i].fill(0);
//     }
//     for(var j = 1; j < col; j++){
//         if(matrix[0][j] == 0){
//             for(var i = 1; i < row; i++){
//                 matrix[i][j] = 0;
//             }
//         }
//     }
//     if(matrix[0][0] == 0) matrix[0].fill(0);
//     if(col0){
//         for(var i = 0; i < row; i++){
//             matrix[i][0] = 0;
//         }
//     }
// };