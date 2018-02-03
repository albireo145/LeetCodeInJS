/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var findSubsequences = function(nums) {
    var res = [];
    var list = [];
    var dfs = function(nums, pos, prev){
        if(list.length >= 2) res.push(list.slice(0));
        var set = new Set();
        for(var i = pos; i < nums.length; i++){
            if(set.has(nums[i])) continue;
            if(list.length == 0 || nums[i] >= prev){
                list.push(nums[i]);
                set.add(nums[i]);
                arguments.callee(nums, i + 1, nums[i]);
                list.pop();
            }
        }
    }
    dfs(nums, 0, -Infinity);
    return res;
};