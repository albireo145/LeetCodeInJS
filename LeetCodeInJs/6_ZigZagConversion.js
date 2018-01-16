/**
 * @param {string} s
 * @param {number} numRows
 * @return {string}
 */
// straight forward
var convert = function(s, numRows) {
    if(numRows == 1) return s;
    var res = new Array(numRows);
    res.fill('');
    var i = 0, len = s.length;
    while(i < len){
        for(var idx = 0; idx < numRows && i < len; idx++, i++){
            res[idx] += s[i];
        }
        for(var idx = numRows - 2; idx > 0 && i < len; idx--, i++){
            res[idx] += s[i];
        }
    }
    return res.join('');
};
// var convert = function(s, numRows) {
//     if(numRows == 1) return s;
//     var str = '';
//     var res = new Array(numRows);
//     res.fill(0);
//     res = res.map(() => []);
//     var row = 0, delta = 1;
//     for(var i = 0; i < s.length; i++){
//         res[row].push(s[i]);
//         row += delta;
//         if(row == numRows - 1){
//             delta = -1;
//         } 
//         else if(row == 0) delta = 1;
//     }
//     for(var i = 0; i < numRows; i++){
//         str += res[i].join('');
//     }
//     return str;
// };