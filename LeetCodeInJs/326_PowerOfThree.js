/**
 * @param {number} n
 * @return {boolean}
 */
var isPowerOfThree = function(n) {
    var max3pow = 1162261467;
    if(n > 0 && n <= max3pow){
        return max3pow % n == 0;
    }
    return false;
};