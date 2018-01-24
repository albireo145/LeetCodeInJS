/**
 * @param {string} haystack
 * @param {string} needle
 * @return {number}
 */
var strStr = function(haystack, needle) {
    var hlen = haystack.length;
    var nlen = needle.length;
    for(var i = 0; i <= hlen - nlen; i++){
        var s = haystack.substring(i, i + nlen);
        if(s == needle) return i;
    }
    return -1;
};

// var strStr = function(haystack, needle) {
//     return haystack.indexOf(needle);
// };