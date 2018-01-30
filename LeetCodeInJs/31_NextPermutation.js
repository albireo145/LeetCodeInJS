/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var nextPermutation = function(nums) {
    var quickSort = function(nums, lo, hi){
        if(lo >= hi) return;
        var i = lo, j = hi + 1;
        while(true){
            while(i < hi && nums[++i] < nums[lo]);
            while(j > lo && nums[--j] > nums[lo]);
            if(i >= j) break;
            nums[i] ^= nums[j];
            nums[j] ^= nums[i];
            nums[i] ^= nums[j];
        }
        if(lo != j){
            nums[lo] ^= nums[j];
            nums[j] ^= nums[lo];
            nums[lo] ^= nums[j];
        }
        quickSort(nums, lo, j - 1);
        quickSort(nums, j + 1, hi);
    }
    for(var idx = nums.length - 2; idx > -1; idx--){
        if(nums[idx] < nums[idx + 1]){
            for(var i = nums.length - 1; i > idx ; i--){
                if(nums[i] > nums[idx]){
                    nums[i] ^= nums[idx];
                    nums[idx] ^= nums[i];
                    nums[i] ^= nums[idx];
                    quickSort(nums, idx + 1, nums.length - 1);
                    return;
                };
            }
        }
    }
    nums.reverse();
};

// after swap position array is reversed
// var nextPermutation = function(nums) {
//     for(var idx = nums.length - 2; idx > -1; idx--){
//         if(nums[idx] < nums[idx + 1]){
//             for(var i = nums.length - 1; i > idx ; i--){
//                 if(nums[i] > nums[idx]){
//                     nums[i] ^= nums[idx];
//                     nums[idx] ^= nums[i];
//                     nums[i] ^= nums[idx];
//                     var l = idx + 1, r = nums.length - 1;
//                     while( l < r){
//                         nums[l] ^= nums[r];
//                         nums[r] ^= nums[l];
//                         nums[l] ^= nums[r];
//                         l++;
//                         r--;
//                     }
//                     return;
//                 };
//             }
//         }
//     }
//     nums.reverse();
// };