/**
 * @param {number} m
 * @param {number} n
 * @return {number}
 */
var uniquePaths = function(m, n) {
    var dp = [];
    dp.length = m;
    for(var i = 0;i < m;i++){
        dp[i] = [];
        dp[i][n-1] = 1;
    };
    for(var i = 0;i < n;i++){
        dp[m-1][i] = 1;
    }
    for(var i = m - 2; i > -1; i--){
        for(var j = n - 2; j > -1; j--){
            dp[i][j] = dp[i+1][j] + dp[i][j+1];
        }
    }
    return dp[0][0];
};