/**
 * @param {string[]} words
 * @return {string[]}
 */
// Regexp 
var findWords = function(words) {
    return words.filter(s => (/^[QWERTYUIOP]*$|^[ASDFGHJKL]*$|^[ZXCVBNM]*$/.test(s.toUpperCase())));
};
// straight forward
// var findWords = function(words) {
//     var row = ['QWERTYUIOP','ASDFGHJKL','ZXCVBNM'];
//     var res = [];
//     for(var el of words){
//         for(var i = 0; i < 3; i++){
//             var flag = true;
//             var str = el.toUpperCase();
//             var n = 0;
//             while(n < el.length){
//                 if(row[i].indexOf(str[n++]) == -1){
//                     flag = false; break;
//                 }
//             }
//             if(flag) res.push(el);
//         }
//     }
//     return res;
// };