/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function(nums, target) {
    var len = nums.length;
    var i = 0;
    var j = 0;
    for(;i<len;i++){
        for(;j<i;j++){
            if((nums[j]+nums[i])==target){
                return [j,i];
            }
        }
    }
};