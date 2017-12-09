/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLongestSubstring = function(s) {
    var res = 0;
    var curlen = 0;
    var startpos = 0;
    var isRepeat = false;
    var len = s.length;
    var i = 0;
    for(;i<len-1;i++){
        isRepeat = false;
        var substring = s.slice(startpos,startpos+curlen);
        for(var j=0;j<curlen;j++){
            if(substring[j]==s[i]){
               isRepeat = true;
            }
        }
        if(!isRepeat){
            curlen++;
            res = res > curlen ? res : curlen;
        }else{
            startpos = i;
            curlen = 1;
        }
    }
    return res;
};