
/**
 * @param {number} x
 * @param {number} y
 * @return {number}
 */

var hammingDistance = function(x, y) {
    var num = x^y;
    var count = 0;
    var s = num.toString(2);
    // regexp match nums of 1
    var matcher = s.match(/1/g); 
    return matcher? matcher.length : 0;
};
var hammingDistance = function(x, y) {
    var num = x^y;
    var count = 0;
    while(num){
        if(num & 1) count++;
        num = num >> 1;
    }
    return count;
};

var hammingDistance = function(x, y) {
    var num = x^y;
    var s = num.toString(2);
    var res = 0;
    for(var i = 0; i < s.length; i++){
        if(s[i] == 1) res ++;
    }
    return res;
};