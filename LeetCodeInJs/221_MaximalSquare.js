/**
 * @param {character[][]} matrix
 * @return {number}
 */
var maximalSquare = function(matrix) {
    if(matrix.length == 0) return 0;
    var row = matrix.length;
    var col = matrix[0].length;
    var max = 0;
    for(var j = 0; j < col; j++){
        if(matrix[0][j] == 1){
            max = 1;
            break;
        } 
    }
    if(max==0){
        for(var i = 0; i < row; i++){
            if(matrix[i][0] == 1){
                max = 1;
              break;
            } 
        }
    }
    for(var i = 1; i < row; i++){
        for(var j = 1; j < col; j++){
            if(matrix[i][j] == 1){
                matrix[i][j] = Math.min(matrix[i-1][j],matrix[i][j-1],matrix[i-1][j-1]) + 1;
                max = Math.max(max,matrix[i][j]);
            }
        }
    }
    return Math.pow(max,2);
};