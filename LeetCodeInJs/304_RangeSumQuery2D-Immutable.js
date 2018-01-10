/**
 * @param {number[][]} matrix
 */
var NumMatrix = function(matrix) {
    this.sum = [];
    var row = matrix ? matrix.length + 1 : 0;
    var col = matrix[0] ? matrix[0].length + 1 : 0;
    this.sum.length = row;
    var arr = new Array(col);
    arr.fill(0)
    this.sum[0] = arr;
    for(var i = 1;i < row; i++){
        this.sum[i] = [0];
    }
    for(var i = 1;i < row; i++){
        for(var j = 1; j < col; j++){
            this.sum[i][j] = matrix[i-1][j-1] + this.sum[i-1][j] + this.sum[i][j-1] - this.sum[i-1][j-1];
        }
    }
};

/** 
 * @param {number} row1 
 * @param {number} col1 
 * @param {number} row2 
 * @param {number} col2
 * @return {number}
 */
NumMatrix.prototype.sumRegion = function(row1, col1, row2, col2) {
    return this.sum[row2+1][col2+1] - this.sum[row2+1][col1] - this.sum[row1][col2+1] + this.sum[row1][col1];
};

/** 
 * Your NumMatrix object will be instantiated and called as such:
 * var obj = Object.create(NumMatrix).createNew(matrix)
 * var param_1 = obj.sumRegion(row1,col1,row2,col2)
 */