/**
 * @param {string} num1
 * @param {string} num2
 * @return {string}
 */
var addStrings = function(num1, num2) {
    var carry = 0;
    var res = '';
    for(var i = num1.length - 1, j = num2.length - 1; i > -1 || j > -1 || carry > 0; i--, j--){
        var add1 = i > -1 ? Number(num1[i]) : 0;
        var add2 = j > -1 ? Number(num2[j]) : 0;
        var sum = add1 + add2 + carry;
        res = sum % 10 + res;
        carry = (sum / 10) >> 0;
    }
    return res;
};