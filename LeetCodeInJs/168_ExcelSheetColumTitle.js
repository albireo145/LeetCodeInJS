/**
 * @param {number} n
 * @return {string}
 */
var convertToTitle = function(n) {
    var chars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
    var res = '';
    while(n > 0){
        n--;
        res = chars[n % 26] + res;
        n = Math.floor(n/26);
    }
    return res;
};