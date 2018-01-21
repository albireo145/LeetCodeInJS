/**
 * @param {number} num
 * @return {string}
 */
var convertToBase7 = function(num) {
    if(num == 0) return '0';
    var res = '';
    var n = num > 0 ? num : -num;
    while(n != 0){
        var rem = n % 7;
        res = rem + res;
        n = (n - rem) / 7;
    }
    return num > 0 ? res : '-' + res;
};