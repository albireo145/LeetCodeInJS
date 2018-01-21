/**
 * @param {number[]} nums
 * @param {number} target
 * @return {boolean}
 */
var search = function(nums, target) {
    var left = 0, right = nums.length - 1;
    while(left <= right){
        var mid = left + Math.floor((right - left) / 2);
        if(nums[mid] == target) return true;
        else if(nums[left] == nums[right]) left++;
        else if(nums[left] <= nums[mid] ){
            if(target >= nums[left] && target < nums[mid]){
                right = mid - 1;
            }else{
                left = mid + 1;
            }
        }else{
            if(target > nums[mid] && target <= nums[right]){
                left = mid + 1;
            }else{
                right = mid - 1;
            }
        }
    }
    return false;
};