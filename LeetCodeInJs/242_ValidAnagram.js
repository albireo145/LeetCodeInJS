/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var isAnagram = function(s, t) {
    if(s.length != t.length) return false;
    var alphabet = new Array(26);
    alphabet.fill(0);
    for(var i = 0,len = s.length; i < len; i++){
        alphabet[s[i].charCodeAt() - 97]++;
    }
    for(var i = 0,len = t.length; i < len; i++){
        if(--alphabet[t[i].charCodeAt() - 97] < 0) return false;
    }
    return true;
};