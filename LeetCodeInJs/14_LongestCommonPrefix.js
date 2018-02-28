/**
 * @param {string[]} strs
 * @return {string}
 */
var longestCommonPrefix = function(strs) {
    if(strs.length == 0) return '';
    var res = [];
    for(var i = 0; i < strs[0].length; i++){
        for(var j = 1; j < strs.length; j++){
            if(strs[j].length - 1 < i || strs[j][i] != strs[0][i]) return res.join('');
        }
        res.push(strs[0][i]);
    }
    return res.join('');
};