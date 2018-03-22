/**
 * @param {string} s
 * @return {number}
 */
var longestPalindrome = function(s) {
    var map = {};
    var res = 0;
    for(var i = 0; i< s.length; i++){
        map[s[i]] = (map[s[i]] || 0) + 1;
    }
    var flag = false
    for(var key in map) {
        var val = map[key];
        if(val % 2 === 0){
            res += val;
        } else {
            res += val - 1;
            flag = true;
        }
    }
    return res + flag;
};
