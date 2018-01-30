/**
 * @param {number} num
 * @return {string}
 */
var toHex = function(num) {
    if(num == 0) return '0';
    num = num > 0 ? num : 4294967296 + num
    var hex = [0,1,2,3,4,5,6,7,8,9,'a','b','c','d','e','f'];
    var res = '';
    while(num > 0){
        var rem = num % 16;
        res = hex[rem] + res;
        num = (num - rem) / 16;
    }
    return res;
};

/**
 * @param {number} num
 * @return {string}
 */
var toHex = function(num) {
    if(num == 0) return '0';
    var hex = [0,1,2,3,4,5,6,7,8,9,'a','b','c','d','e','f'];
    var res = '';
    while(num != 0){
        res = hex[num & 15] + res;
        num = (num >>> 4);
    }
    return res;
};