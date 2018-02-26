/**
 * @param {number[]} nums
 * @return {boolean}
 */
var canJump = function(nums) {
    var rightReach = 0;
    for(var i = 0; i < nums.length; i++){
        if(rightReach < i) return false;
        else rightReach = Math.max(rightReach, i + nums[i]);
    }
    return true;
};