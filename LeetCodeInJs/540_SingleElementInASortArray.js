/**
 * @param {number[]} nums
 * @return {number}
 */
var singleNonDuplicate = function(nums) {
    var start = 0, end = nums.length - 1;
    while(start < end){
        var mid = (start + end) / 2;
        mid = mid % 2 == 1 ? mid - 1 : mid;
        if(nums[mid] != nums[mid + 1]) end = mid;
        else start = mid + 2;
    }
    return nums[start];
};