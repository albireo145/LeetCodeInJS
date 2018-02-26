/**
 * @param {number[]} A
 * @return {number}
 */
// scroll dp;
var numberOfArithmeticSlices = function(A) {
    if(A.length == 0) return 0;
    var dp = 0;
    var len = 2;
    for(var i = 2; i < A.length; i++){
        if(A[i] - A[i - 1] == A[i - 1] - A[i - 2]){
            len++;
        }
        else{
            len = 2;
        } 
        if(len > 2) dp += len - 2;
    }
    return dp;
};
// var numberOfArithmeticSlices = function(A) {
//     if(A.length == 0) return 0;
//     var dp = new Array(A.length);
//     dp.fill(0);
//     var len = 2;
//     for(var i = 2; i < A.length; i++){
//         if(A[i] - A[i - 1] == A[i - 1] - A[i - 2]){
//             len++;
//         }
//         else{
//             len = 2;
//         } 
//         if(len > 2) dp[i] = dp[i - 1] + len - 2;
//         else dp[i] = dp[i - 1];
//     }
//     return dp[A.length - 1];
// };