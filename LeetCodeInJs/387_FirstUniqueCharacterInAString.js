/**
 * @param {string} s
 * @return {number}
 */
var firstUniqChar = function(s) {
    for(var i = 0; i < s.length; i++){
        if(s.indexOf(s[i]) == s.lastIndexOf(s[i])) return i;
    }
    return -1;
};
var firstUniqChar = function(s) {
    var map = {};
    for(var el of s){
        map[el] = (map[el] ? map[el] : 0) + 1;
    }
    for(var key in map){
        if(map[key] == 1) return s.indexOf(key);
    }
    return -1;
};