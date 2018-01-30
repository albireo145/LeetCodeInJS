/**
 * @param {number[]} nums
 * @return {number}
 */
var arrayPairSum = function(nums) {
    nums.sort((a,b) => a - b);
    var n = 0;
    for(var i = 0; i < nums.length; i += 2){
        n += nums[i];
    }
    return n;
};