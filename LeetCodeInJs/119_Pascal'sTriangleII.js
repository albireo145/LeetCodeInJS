/**
 * @param {number} rowIndex
 * @return {number[]}
 */
var getRow = function(rowIndex) {
    var res = [1];
    for(var i = 1; i <= rowIndex; i++){
        var list = [];
        for(var j = 0; j <= i; j++)  list.push((res[j - 1] || 0) + (res[j] || 0));
        res = list;
    }
    return res;
};