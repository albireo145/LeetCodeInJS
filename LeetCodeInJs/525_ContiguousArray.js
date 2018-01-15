/**
 * @param {number[]} nums
 * @return {number}
 */
var findMaxLength = function(nums) {
    for(var i = 0; i < nums.length; i++){
        if(nums[i] == 0) nums[i] = -1;
    }
    var map = new Map();
    map.set(0,-1);
    var sum = 0;
    var max = 0;
    for(var i = 0; i < nums.length; i++){
        sum += nums[i];
        if(map.get(sum) != null) max = Math.max(max, i - map.get(sum));
        else map.set(sum, i);
    }
    return max;
};