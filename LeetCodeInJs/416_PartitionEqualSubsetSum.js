/**
 * @param {number[]} nums
 * @return {boolean}
 */
var canPartition = function(nums) {
    var sum = nums.reduce((ac,num) => ac + num);
    if(sum % 2 != 0) return false;
    var target = sum / 2;
    var dp = new Array(target + 1);
    dp.fill(false);
    dp[0] = true;
    for(var i = 0; i < nums.length; i++){
        for(var j = target; j > -1; j--){
            if(nums[i] <= j){
                dp[j] = dp[j] || dp[j - nums[i]];
            }
        }
    }
    return dp[target];
};
// roll array
// var canPartition = function(nums) {
//     var sum = nums.reduce((ac,num) => ac + num);
//     if(sum % 2 != 0) return false;
//     var target = sum / 2;
//     var dp = new Array(target + 1);
//     dp.fill(0);
    
//     for(var i=nums[0];i<=target;i++){  
//         dp[i]=nums[0];  
//     } 
//     for(var i = 1; i < nums.length; i++){
//         for(var j = target; j > -1; j--){
//             if(nums[i] <= j){
//                 dp[j] = Math.max(dp[j - nums[i]] + nums[i], dp[j]);
//             }
//         }
//     }
//     return dp[target] == target;
// };

// var canPartition = function(nums) {
//     var sum = nums.reduce((ac,num) => ac + num);
//     if(sum % 2 != 0) return false;
//     var target = sum / 2;
//     var dp = new Array(nums.length);
//     for(var i = 0; i < nums.length; i++){
//         dp[i] = new Array(target + 1);
//         dp[i].fill(0);
//     }
//     for(var i=nums[0];i<=target;i++){  
//         dp[0][i]=nums[0];  
//     } 
//     for(var i = 1; i < nums.length; i++){
//         for(var j = 0; j <= target; j++){
//             if(nums[i] > j){
//                 dp[i][j] = dp[i-1][j];
//             }
//             else{
//                 dp[i][j] = Math.max(dp[i - 1][j - nums[i]] + nums[i], dp[i-1][j]);
//             }
//         }
//     }
//     return dp[nums.length - 1][target] == target;
// };