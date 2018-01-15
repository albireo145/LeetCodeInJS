/**
 * @param {number[]} nums
 * @return {boolean}
 */
// O(n) place;
var PredictTheWinner = function(nums) {
    var dp = new Array(nums.length);
    dp.fill(0);
    for(var i = nums.length - 1; i > -1; i--){
        for(var j = i + 1; j < nums.length; j++){
            dp[j] = Math.max(nums[i] - dp[j], nums[j] - dp[j - 1]);
        }
    }
    return dp[nums.length - 1] >= 0;
};
// using dp
// var PredictTheWinner = function(nums) {
//     var dp = new Array(nums.length);
//     for(var i = 0; i < dp.length; i++){
//         var arr = new Array(nums.length);
//         arr.fill(0);
//         dp[i] = arr;
//     }
//     for(var i = nums.length - 1; i > -1; i--){
//         for(var j = i + 1; j < nums.length; j++){
//             dp[i][j] = Math.max(nums[i] - dp[i + 1][j], nums[j] - dp[i][j - 1]);
//         }
//     }
//     return dp[0][nums.length - 1] >= 0;
// };

//  with memo
// var PredictTheWinner = function(nums) {
//     var helper = function(nums,start,end,memo){
//         if(memo[start][end] == null)
//         memo[start][end] = start == end ? nums[start] : Math.max(nums[start] - arguments.callee(nums,start+1,end,memo),nums[end] - arguments.callee(nums,start,end-1,memo));
//         return memo[start][end]
//     }
//     var memo = new Array(nums.length);
//     for(var i = 0; i < memo.length; i++){
//         memo[i] = [];
//     }
//     return helper(nums,0,nums.length-1,memo) >= 0;
// };

// recursion
// var PredictTheWinner = function(nums) {
//     var helper = function(nums,start,end){
//         return start == end ? nums[start] : Math.max(nums[start] - arguments.callee(nums,start+1,end),nums[end] - arguments.callee(nums,start,end-1));
//     }
//     return helper(nums,0,nums.length-1) >= 0;
// };