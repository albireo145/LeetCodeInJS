/**
 * @param {number} numRows
 * @return {number[][]}
 */
var generate = function(numRows) {
    if(numRows == 0) return [];
    var res = [[1]];
    for(var i = 1; i < numRows; i++){
        var list = [];
        for(var j = 0; j <= i; j++)  list.push((res[i - 1][j - 1] || 0) + (res[i - 1][j] || 0));
        res.push(list);
    }
    return res;
};