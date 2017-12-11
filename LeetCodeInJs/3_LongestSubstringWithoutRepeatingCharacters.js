/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLongestSubstring = function(s) {
    var res = 0;
    var startpos = 0;
    var endpos = 0;
    var isRepeat = false;
    var len = s.length;
    var i = 0;
    for(;i<len;i++){
        isRepeat = false;
        var j = startpos;
        var k = endpos;
        for(; j < k; j++){
            if(s[j]==s[i]){
               startpos = j + 1;
               endpos++;
               isRepeat = true;
               break;
            }
        }
        if(!isRepeat){
            endpos++;
            res = res > endpos - startpos ? res : endpos - startpos;
        }
    }
    return res;
};
