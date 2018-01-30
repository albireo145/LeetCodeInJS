/**
 * @param {number} n
 * @return {number}
 */
var numSquares = function(n) {
    var res = [0];
    for(var i = 0; i < n; i++){
        var m = res.length;
        var curr = Infinity;
        for(var j = 1; j * j <= m; j++){
           curr  = Math.min(curr, res[m - j * j] + 1);
        }
        res.push(curr);
    }
    return res[n];
};