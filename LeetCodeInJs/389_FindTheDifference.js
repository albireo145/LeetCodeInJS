/**
 * @param {string} s
 * @param {string} t
 * @return {character}
 */
var findTheDifference = function(s, t) {
    var map = {}
    for(var i = 0; i < s.length; i++){
        map[s[i]] = (map[s[i]] || 0) + 1
    }
    for(var i = 0; i < t.length; i++){
        debugger
        if(map[t[i]]-- > 0) continue
        else return t[i]
    }
    return ''
};
