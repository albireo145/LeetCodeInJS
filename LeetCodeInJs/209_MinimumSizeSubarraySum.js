/**
 * @param {number} s
 * @param {number[]} nums
 * @return {number}
 */
var minSubArrayLen = function(s, nums) {
    var begin = 0, end = 0;
    var sum = 0, len = Infinity;
    while(end < nums.length){
        sum += nums[end++];
        while(sum >= s && begin < end){
            len = Math.min(len, end - begin);
            sum -= nums[begin++];
        }
    }
    return len == Infinity ? 0 : len;
};