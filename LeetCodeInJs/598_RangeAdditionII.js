/**
 * @param {number} m
 * @param {number} n
 * @param {number[][]} ops
 * @return {number}
 */
var maxCount = function(m, n, ops) {
    for(var el of ops){
        m = Math.min(el[0], m);
        n = Math.min(el[1], n);
    }
    return m * n;
};