/**
 * @param {number[]} nums
 * @return {number}
 */
var rob = function(nums) {
    if(nums.length == 0) return 0;
    if(nums.length == 1) return nums[0];
    var helper = function(nums) {
        var include = 0, exclude = 0;
        for(var i = 0; i < nums.length; i++){
            var tempMax = Math.max(exclude,include);
            include = exclude + nums[i];
            exclude = tempMax;
        }
        return Math.max(exclude,include)
    }
    return Math.max(helper(nums.slice(1)),helper(nums.slice(0,-1)))
};