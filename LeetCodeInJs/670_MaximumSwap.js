/**
 * @param {number} num
 * @return {number}
 */

var maximumSwap = function(num) {
    var str = Array.from(num + '');
//    record number last pos;
    var last = new Array(10);
    for(var i = 0; i < str.length; i++){
        last[str[i]] = i;
    }
    for(var i = 0; i < str.length; i++){
        for(var j = 9; j > str[i]; j--){
            if(last[j] > i){
                var temp = str[i];
                str[i] = j;
                str[last[j]] = temp;
                return parseInt(str.join(''));
            }
        }
    }
    return num;
};
// dp
// var maximumSwap = function(num) {
//     var str = Array.from(num + '');
//     var dp = new Array(str.length + 1);
//     dp.fill(0);
//     var pos = 0;
//     for(var i = str.length - 1; i > -1; i--){
//         dp[i] = Math.max(parseInt(str[i]),dp[i+1]);
//     }
//     for(var i = 0; i < str.length; i++){
//         if(str[i] < dp[i]){
//             var temp = str[i];
//             str[i] = dp[i];
//             while(dp[i] == dp[i+1]) i++;
//             str[i] = temp;
//             break;
//         }
//     }
//     return parseInt(str.join(''));
// };