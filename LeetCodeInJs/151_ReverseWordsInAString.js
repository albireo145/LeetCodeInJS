/**
 * @param {string} str
 * @returns {string}
 */
var reverseWords = function(str) {
    str = str.trim().replace(/\s+/g,'_').split(/_/);
    str = str.reverse().join(' ');
    return str == ' ' ? '' : str; 
};