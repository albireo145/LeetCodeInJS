/**
 * @param {number[]} nums
 * @return {number}
 */
var findMaxConsecutiveOnes = function(nums) {
    var len = nums.length;
    var i = 0;
    var max = 0;
    var curMax = 0;
    while(i < len){
        max = Math.max((curMax = nums[i] == 0 ? 0 : ++curMax), max);
        i++;
    }
    return max;
};