/**
 * @param {number[]} nums
 * @return {number}
 */
var findLHS = function(nums) {
    var map = {};
    var max = 0;
    for(var num of nums) map[num] = (map[num] || 0) + 1;
    for(var key in map){
        if(map[++key] != null) max = Math.max(map[key] + map[key - 1], max);
    }
    return max;
};