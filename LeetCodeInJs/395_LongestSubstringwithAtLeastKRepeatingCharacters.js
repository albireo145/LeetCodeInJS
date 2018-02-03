/**
 * @param {string} s
 * @param {number} k
 * @return {number}
 */
var longestSubstring = function(s, k) {
    var longestSubstringWithNUniqueChars = function(s, k, NUniqueNums){
        var map = {};
        var begin = 0, end = 0;
        var numUnique = 0, numNoLessK = 0;
        var diff = 0;
        while(end < s.length){
            if(map[s[end]] == null){
                numUnique++;
                map[s[end]] = 1;
            }
            else if(map[s[end]]++ == 0) numUnique++;
            if(map[s[end++]] == k) numNoLessK++;
            while(numUnique > NUniqueNums){
                if(map[s[begin]]-- == k) numNoLessK--;
                if(map[s[begin++]] == 0) numUnique--;
            }
            if(numUnique == NUniqueNums && numUnique == numNoLessK){
                diff = Math.max(diff, end - begin);
            }
        }
        return diff;
    }
    var d = 0;
    for(var i = 1; i <= 26; i++){
        d = Math.max(d, longestSubstringWithNUniqueChars(s, k, i));
    }
    return d;
};
// DC TLE
var longestSubstring = function(s, k) {
    var helper = function(start, end){
        if(end - start < k) return 0;
        var map = {};
        for(var i = start; i < end; i++){
            map[s[i]] = (map[s[i]] ? map[s[i]] : 0) + 1;
        }
        for(var i = start; i < s.length; i++){
            if(map[s[i]] < k){
                return Math.max(helper(start, i), helper(i + 1, end));
            }
        }
        return end - start;
    }
    return helper(0, s.length);
};