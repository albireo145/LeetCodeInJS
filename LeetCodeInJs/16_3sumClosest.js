/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var threeSumClosest = function(nums, target) {
    var closest = Infinity;
    nums.sort((a,b) => a-b);
    for(var i = 0; i < nums.length - 2; i++){
        var j = i + 1;
        var k = nums.length - 1;
        while(j < k){
            var sum = nums[i] + nums[j] + nums[k];
            if(sum == target) return target;
            sum < target ? j++ : k--;
            closest = Math.abs(target - sum) < Math.abs(target - closest) ? sum : closest;
        }
    }
    return closest;
};