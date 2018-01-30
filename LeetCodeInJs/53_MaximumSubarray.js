/**
 * @param {number[]} nums
 * @return {number}
 */
var maxSubArray = function(nums) {
    var res = -2147483648;
    var right = 0;
    var sum = 0;
    while(right < nums.length){
        sum += nums[right++];
        res = res > sum ? res : sum;
        sum = sum > 0 ? sum : 0;
    }
    return res;
};
// slide window
// var maxSubArray = function(nums) {
//     var res = -2147483648;
//     var left = 0;
//     var right = 0;
//     var sum = 0;
//     while(right < nums.length){
//         sum += nums[right++];
//         res = res > sum ? res : sum;
//         while(sum < 0) sum -= nums[left++];
//     }
//     return res;
// };

// dp solution
// var maxSubArray = function(nums) {
//     var res = -2147483648;
//     var dp = [0]
//     for(var i = 0; i < nums.length; i++){
//         dp[i] = nums[i] + (dp[i - 1] > 0 ? dp[i - 1] : 0);
//         res = Math.max(res, dp[i]);
//     }
//     return res;
// };

// var maxSubArray = function(nums) {
//     var res = -2147483648;
//     var prev = -2147483648;
//     var next = -2147483648;
//     for(var i = 0; i < nums.length; i++){
//         prev = next;
//         next = nums[i] + (prev > 0 ? prev : 0);
//         res = Math.max(prev, next, res);
//     }
//     return res;
// };