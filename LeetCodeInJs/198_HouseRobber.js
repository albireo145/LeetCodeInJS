/**
 * @param {number[]} nums
 * @return {number}
 */
var rob = function(nums) {
    var dp = [[0],[0]];
    for(var i = 0; i < nums.length; i++){
        dp[0][i + 1] = Math.max(dp[0][i],dp[1][i]);
        dp[1][i + 1] = dp[0][i] + nums[i];
    }
    return Math.max(dp[0][nums.length],dp[1][nums.length])
};