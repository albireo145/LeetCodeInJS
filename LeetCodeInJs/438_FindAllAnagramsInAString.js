/**
 * @param {string} s
 * @param {string} p
 * @return {number[]}
 */
var findAnagrams = function(s, p) {
    var map = {};
    var res = [];
    for(var i = 0; i < p.length; i++) map[p[i]] = map[p[i]] == null ? 0 : map[p[i]] - 1;
    var begin = 0, end = 0;
    var count = 0;
    while(end < s.length){
        while(end - begin < p.length){
            if(map[s[end]] != null && map[s[end]]++ <= 0) count++;
            end++;
        }
        if(count == p.length) res.push(begin);
        if(map[s[begin]] != null && map[s[begin]]-- <= 1) count--;
        begin++;
    }
    return res;
};