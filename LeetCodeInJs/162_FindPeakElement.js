/**
 * @param {number[]} nums
 * @return {number}
 */
var findPeakElement = function(nums) {
    return helper(nums,0,nums.length-1)
};
var helper = function(nums,start,end){
    if(start == end) return start;
    else if(end - start == 1) return nums[end] > nums[start] ? end : start;
    var middle = Math.floor((start + end) / 2);
    if( nums[middle - 1] < nums[middle] && nums[middle] > nums[middle + 1])
        return middle;
    else if( nums[middle - 1] > nums[middle] && nums[middle] > nums[middle + 1]) return arguments.callee(nums,start,middle - 1);
    else return arguments.callee(nums,middle + 1,end);
};