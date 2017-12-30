/**
 * @param {number} num
 * @return {number[]}
 */
var countBits = function(num) {
    var res = [0];
    for(var i = 1; i < num + 1; i++){
        res[i] = res[i&(i-1)] + 1;
    }
    return res;
};