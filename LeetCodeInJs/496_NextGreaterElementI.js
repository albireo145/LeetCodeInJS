/**
 * @param {number[]} findNums
 * @param {number[]} nums
 * @return {number[]}
 */
var nextGreaterElement = function(findNums, nums) {
    var map = {};
    var stk = [];
    for(var i = 0; i < nums.length; i++){
        while(stk.length > 0 && stk[stk.length - 1] < nums[i])
            map[stk.pop()] = nums[i];
        stk.push(nums[i]);
    }
    for(var i = 0; i < findNums.length; i++){
        findNums[i] = map[findNums[i]] || -1;
    }
    return findNums;
};