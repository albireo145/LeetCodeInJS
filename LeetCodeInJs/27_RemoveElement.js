/**
 * @param {number[]} nums
 * @param {number} val
 * @return {number}
 */
var removeElement = function(nums, val) {
    var i = 0, n = nums.length;
    while(i < n){
        if(val == nums[i]){
            nums[i] = nums[n-- - 1];
        }else{
            i++;
        }
    }
    return n;
};
var removeElement = function(nums, val) {
    var idx = 0;
    for(var el of nums){
        if(el != val) nums[idx++] = el;
    }
    return idx;
};