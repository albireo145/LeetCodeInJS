/**
 * @param {number[]} nums
 * @param {number} S
 * @return {number}
 */
var findTargetSumWays = function(nums, S) {
    var subsetSum = function(nums, target){
        var dp = new Array(target + 1);
        dp.fill(0);
        dp[0] = 1;
        for(var el of nums){
            for(var i = target; i >= el; i--){
                dp[i] += dp[i - el];
            }
        }
        return dp[target];
    }
    var sum = 0;
    for(var el of nums){
        sum += el;
    }
    return sum < S || (sum + S) % 2 > 0 ? 0 : subsetSum(nums, (sum + S) >>> 1);
};
// dfs memo
var findTargetSumWays = function(nums, S) {
    var sum = [];
    var memo = new Array(nums.length);
    for(var i = 0; i < memo.length; i++) memo[i] = [];
    var helper = function(nums, S, pos, sum){
        if(pos == nums.length){
            if(S == sum) return 1;
            else return 0;
        }
        if(memo[pos][sum] != null) return memo[pos][sum];
        var add = arguments.callee(nums, S, pos + 1, sum + nums[pos]);
        var minus = arguments.callee(nums, S, pos + 1, sum - nums[pos]);
        memo[pos][sum] = add + minus;
        return memo[pos][sum];
    }
    return helper(nums, S, 0, 0);
};

var findTargetSumWays = function(nums, S) {
    var res = 0;
    var sum = [];
    sum[nums.length - 1] = nums[nums.length - 1];
    for(var i = nums.length - 2; i > -1; i--){
        sum[i] = sum[i + 1] + nums[i];
    }
    var helper = function(nums, S, pos, add){
        if(pos == nums.length){
            if(S == add) res++;
            return;
        }
        if(sum[pos] < Math.abs(S - add)) return;
        arguments.callee(nums, S, pos + 1, add + nums[pos]);
        arguments.callee(nums, S, pos + 1, add - nums[pos]);
    }
    helper(nums, S, 0, 0);
    return res;
};