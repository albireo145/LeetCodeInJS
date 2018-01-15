/**
 * @param {number[]} nums
 * @return {number}
 */
var minMoves2 = function(nums) {
    nums.sort((a,b) => a-b);
    var j = 0, k = nums.length-1;
    var res = 0;
    while(j < k){
        res += nums[k--] - nums[j++] ;
    }
    return res;
};