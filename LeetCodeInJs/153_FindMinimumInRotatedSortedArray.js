/**
 * @param {number[]} nums
 * @return {number}
 */
// Binary O(logN)
var findMin = function(nums) {
    var left = 0;
    var right = nums.length - 1;
    while(left < right){
        var mid = Math.floor(left + (right - left) / 2);
        if(nums[mid] > nums[right]) left = mid + 1;
        else right = mid;
    }
    return nums[left];
};
// O(n)
// var findMin = function(nums) {
//     for(var i = 1 ; i < nums.length;i++){
//         if(nums[i] < nums[i-1]) return nums[i];
//     }
//     return nums[0];
// };