/**
 * @param {string} s
 * @return {boolean}
 */
var repeatedSubstringPattern = function(s) {
    var ss = (s + s).slice(1, -1);
    return ss.indexOf(s) != -1;
}

var repeatedSubstringPattern = function(s) {
    var len = s.length;
    var dp = [0];
    var i = 0;
    var j = 1;
    while(i < len && j < len){
        if(s[i] == s[j]){
            dp[j] = i + 1;
            i++;
            j++;
        }else{
            if(i == 0){
                dp[j] = 0;
                j++;
            }else{
                i = dp[i - 1];
            }
        }
    }
    return (dp[len - 1] > 0 && (len % (len - dp[len - 1]) == 0));
};

// var repeatedSubstringPattern = function(s) {
//     var len = s.length;
//     for(var i =  Math.floor(len/2);i > 0;i--){
//         if(len % i == 0){
// //             substring times
//             var t = len / i;
//             var arr = [];
//             var str = s.slice(0,i);
//             while(t > 0){
//                 arr.push(str);
//                 t--;
//             }
//             if(arr.join('') == s) return true;
//         }
//     }
//     return false;
// };