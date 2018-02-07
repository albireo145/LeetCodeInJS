/**
 * @param {number[]} nums
 * @return {number}
 */
var findUnsortedSubarray = function(nums) {
    var begin = -1;
    var end = -2;
    var max = nums[0];
    var min = nums[nums.length - 1];
    for(var i = 1; i < nums.length; i++){
        max = Math.max(max, nums[i]);
        min = Math.min(min, nums[nums.length - 1 - i]);
        if(max > nums[i]) end = i;
        if(min < nums[nums.length - 1 - i]) begin = nums.length - 1 - i;
    }
    return end - begin + 1;
};
var findUnsortedSubarray = function(nums) {
    var copy = Array.from(nums);
    copy.sort((a,b) => a - b);
    var begin = 0;
    var end = nums.length - 1;
    while(begin <= end && nums[begin] == copy[begin]) begin++;
    while(end >= begin && nums[end] == copy[end]) end--;
    return end - begin + 1;
};