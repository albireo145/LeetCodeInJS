/**
 * @param {string} s
 * @return {number}
 */
var numDecodings = function(s) {
    var n = s.length;
    if(n == 0) return 0;
    var dp = new Array(n + 1);
    dp.fill(0);
    dp[0] = 1;
    dp[1] = s[0] != '0' ? 1 : 0;
    for(var i = 2; i <= n; i++) {
        var first = s[i-1];
        var second = s[i-2] + s[i-1];
        if(first >= 1 && first <= 9) {
            dp[i] += dp[i-1];  
        }
        if(second >= 10 && second <= 26) {
            dp[i] += dp[i-2];
        }
    }
    return dp[n];
};