/**
 * @param {number[]} nums
 * @return {number}
 */
var lengthOfLIS = function(nums) {
    if(nums.length == 0) return 0;
    var dp = new Array(nums.length);
    dp.fill(1);
    var max = 1;
    for(var i = nums.length - 2; i > -1; i--){
        for(var j = i; j < nums.length; j++){
            if(nums[i] < nums[j]) dp[i] = Math.max(dp[j] + 1, dp[i]);
        }
        max = Math.max(dp[i], max);
    }
    return max;
};