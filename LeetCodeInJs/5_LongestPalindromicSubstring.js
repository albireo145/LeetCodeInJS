/**
 * @param {string} s
 * @return {string}
 */
var longestPalindrome = function(s) {
    var left = 0;
    var right = 0;
    for(var i = 0; i < s.length; i++){
        var len = Math.max(expandAroundCenter(s,i,i),expandAroundCenter(s,i,i + 1));
        if(len > right - left){
            left = i - Math.floor((len - 1)/2);
            right = i + Math.floor(len/2);
        }
    }
    return s.slice(left,right + 1);
};

var expandAroundCenter = function(s,left,right){
    while(left > -1 && right < s.length && s[left] == s[right]){
        left--;
        right++;
    }
//     return length
    return right - left - 1;
};