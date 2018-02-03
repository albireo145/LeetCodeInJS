/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var findMaxAverage = function(nums, k) {
    var begin = 0, end = 0, sum = 0, max = -Infinity;
    while(end < nums.length){
        while(end - begin < k) sum += nums[end++];
        max = Math.max(sum / k, max);
        sum -= nums[begin++];
    }
    return max;
};