/**
 * @param {number[]} A
 * @param {number[]} B
 * @return {number}
 */
var findLength = function(A, B) {
    var m = A.length;
    var n = B.length;
    var ans = 0;
    var dp = new Array(m + 1);
    for(var i = 0; i <= m; i++){
        var arr = new Array(n + 1);
        arr.fill(0)
        dp[i] = arr;
    }
    for(var i = m - 1; i > -1; i--){
        for(var j = n - 1; j > -1; j--){
            if(A[i] == B[j]) dp[i][j] = dp[i+1][j+1] + 1;
            else dp[i][j] = 0;
            ans = Math.max(ans, dp[i][j]);
        }
    }
    return ans;
};