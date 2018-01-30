/**
 * @param {string} a
 * @param {string} b
 * @return {string}
 */
var addBinary = function(a, b) {
    var res = '';
    var i = a.length - 1; var j = b.length - 1;var carry = 0;
    while(i > -1 || j > -1){
        var sum = carry;
        if(i > -1) sum += Number(a[i--]);
        if(j > -1) sum += Number(b[j--]);
        res += sum % 2;
        carry = (sum - sum % 2) / 2;
    }
    if(carry != 0) res += carry;
    return res.split('').reverse().join('');
};


// var addBinary = function(a, b) {
//     var res = '';
//     var i = a.length - 1; var j = b.length - 1;var carry = 0;
//     while(i > -1 || j > -1 || carry){
//         var sum = 0;
//         if(i > -1 && a[i--] == 1) sum++;
//         if(j > -1 && b[j--] == 1) sum++;
//         if(carry == 1){
//             sum++;
//             carry--;
//         }
//         if(sum > 1){
//             sum -= 2;
//             carry++;
//         }
//         res = sum + '' + res;
//     }
//     if(res == '') return '0';
//     return res;
// };