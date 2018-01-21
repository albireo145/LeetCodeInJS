/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var searchRange = function(nums, target) {
    var lo = 0, hi = nums.length - 1;
    while(lo <= hi){
        var mid = lo + Math.floor((hi - lo) / 2);
        if(nums[mid] < target) lo = mid + 1;
        else hi = mid - 1;
    }
    if(nums[lo] != target) return [-1,-1];
    var res = [];
    res.push(lo);
    hi = nums.length - 1;
    while(lo <= hi){
        var mid = lo + Math.floor((hi - lo) / 2);
        if(nums[mid] < target + 1) lo = mid + 1;
        else hi = mid - 1;
    }
    res.push(lo - 1);
    return res;
};