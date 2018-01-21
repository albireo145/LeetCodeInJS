/**
 * @param {string} S
 * @param {number} K
 * @return {string}
 */
var licenseKeyFormatting = function(S, K) {
    S = S.trim().replace(/-/g,'').toUpperCase();
    var res = ''
    for(var i = S.length - 1; i > -1; i--){
        res = S[i] + res;
        if((S.length - i) % K == 0) res = '-' + res;
    }
    return res[0] == '-' ? res.substring(1) : res;
};