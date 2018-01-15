/**
 * @param {number[]} nums
 * @return {number}
 */
var minMoves = function(nums) {
    var min = Infinity;
    for(var i = 0; i < nums.length; i++){
        min = Math.min(nums[i],min);
    }
    var sum = 0;
    for(var i = 0; i < nums.length; i++){
        sum += nums[i] - min;
    }
    return sum;
};