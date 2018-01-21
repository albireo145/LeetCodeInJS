/**
 * @param {number[]} nums
 * @return {number}
 */
var removeDuplicates = function(nums) {
    var idx = 0;
    for(var i = 0; i < nums.length; i++){
        if(idx < 2 || nums[idx - 2] != nums[i]) nums[idx++] = nums[i];
    }
    return idx;
};