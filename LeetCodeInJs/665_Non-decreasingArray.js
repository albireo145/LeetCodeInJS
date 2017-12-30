/**
 * @param {number[]} nums
 * @return {boolean}
 */
var checkPossibility = function(nums) {
    var flag = false;
    for(var i = 1; i < nums.length; i++){
        if(nums[i - 1] > nums[i]){
            if(flag) return false;
            if( i - 2 < 0 || nums[i-2] <= nums[i]) nums[i - 1] = nums[i];
            else nums[i] = nums[i - 1];
            flag = true;
        }
    }
    return true;
};