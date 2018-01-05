/**
 * @param {string} s
 * @return {boolean}
 */
var isPalindrome = function(s) {
    var str = s.replace(/[^\w]/g,'');
    str = str.toLowerCase();
    var left = 0;
    var right = str.length - 1;
    while(left < right){
        if(str[left++] != str[right--]) return false;
    }
    return true;
};