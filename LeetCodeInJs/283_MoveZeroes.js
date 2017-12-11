/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var moveZeroes = function(nums) {
    var len = nums.length;
    if (len == 0) return;
    var i = 0;
    for(num of nums){
        if(num != 0) nums[i++] = num;
    }
    while(i<len){
        nums[i++] = 0;
    }
};