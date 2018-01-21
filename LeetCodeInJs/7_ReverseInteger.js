/**
 * @param {number} x
 * @return {number}
 */
var reverse = function(x) {
    var cin = x > 0 ? x : -x;
    var out = 0;
    while(cin > 0){
        out = out * 10 + cin % 10;
        cin = Math.floor(cin/10);
    }
    var max = 2147483647;
    if(out > max || out < -max){
        return 0;
    }
    return x > 0 ? out : -out;
};