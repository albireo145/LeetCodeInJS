/**
 * @param {string} s
 * @return {string}
 */
var reverseWords = function(s) {
    return s.split(' ').map((el) => el.split('').reverse().join('')).join(' ');
};
// var reverseWords = function(s) {
//     var arr = s.split(' ');
//     for(var i = 0; i < arr.length; i++){
//         arr[i] = arr[i].split('').reverse().join('');
//     }
//     return arr.join(' ');
// };