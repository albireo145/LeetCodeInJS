/**
 * @param {string} s
 * @param {string} t
 * @return {number}
 */
var numDistinct = function(s, t) {
    var dp = new Array(t.length + 1);
    for(var i = 0; i <= t.length; i++){
        dp[i] = new Array(s.length + 1);
        dp[i].fill(0);
    }
    dp[0].fill(1);
    for(var i = 0; i < t.length; i++){
        for(var j = 0; j < s.length; j++){
            if(t[i] == s[j]) dp[i + 1][j + 1] = dp[i][j] + dp[i + 1][j];
            else dp[i + 1][j + 1] = dp[i + 1][j];
        }
    }
    return dp[t.length][s.length];
};