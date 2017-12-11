/**
 * @param {string} num1
 * @param {string} num2
 * @return {string}
 */
var multiply = function(num1, num2) {
    var res = [];
    var len1 = num1.length;
    var len2 = num2.length;
    var total = len1 + len2;
    var pos1 = 0;
    var pos2 = 0;
    var temp = 0;
    res.length = total;
    for(var k = total - 1; k >= 0 ; k--) res[k] = 0;
    for(var i = len1 - 1 ; i >= 0; i--){
        for(var j = len2 - 1; j >= 0; j--){
            pos1 = i + j;
            pos2 = i + j + 1;
            temp = num1[i] * num2[j] + res[pos2];
            res[pos1] += Math.floor(temp / 10);
            res[pos2] = temp % 10;
        }
    }
    for(num of res){
        if(num != 0) break;
        else pos1++;
    }
    res = res.slice(pos1);
    return res.length == 0 ? "0" : res.join('');
};