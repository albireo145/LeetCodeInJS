/**
 * @param {number[]} nums
 * @return {number[]}
 */
var findDuplicates = function(nums) {
    var res = [];
    for(var i = 0; i < nums.length; i++){
        var next = Math.abs(nums[i]) - 1;
        if(nums[next] < 0) res.push(next + 1);
        else nums[next] = -nums[next];
    }
    return res;
};