/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var findKthLargest = function(nums, k) {
    var partition = function(nums, lo, hi){
        var i = lo, j = hi + 1;
        while(true){
            while(i < hi && nums[++i] < nums[lo]);
            while(j > lo && nums[--j] > nums[lo]);
            if(i >= j) break;
            var temp = nums[i];
            nums[i] = nums[j];
            nums[j] = temp;
        }
        var temp = nums[lo];
        nums[lo] = nums[j];
        nums[j] = temp;
        return j;
    }
    k = nums.length - k;
    var lo = 0, hi = nums.length - 1;
    while(lo < hi){
        var j = partition(nums,lo,hi);
        if(j > k) hi = j - 1;
        else if(j < k) lo = j + 1;
        else break;
    }
    return nums[k];
};

// var findKthLargest = function(nums, k) {
//     nums.sort((a,b) => b - a);
//     return nums[k - 1];
// };