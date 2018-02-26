/**
 * @param {number[]} nums
 * @return {number}
 */
var pivotIndex = function(nums) {
    var sum = 0;
    //Get the sum of the array
    for (var i = 0; i < nums.length; i++) {
        sum += nums[i];
    }
    var leftSum = 0;
    for (var i = 0; i < nums.length; i++) {
        //if sum - nums[i] == preSum * 2, mean left(0 ~ i - 1) sum equals to right(i + 1 ~ n) sum 
        if (sum - nums[i] == leftSum << 1) {
            return i;
        }
        leftSum += nums[i];
    }
    //not found the index
    return -1;
};