/**
 * @param {number[]} nums
 * @return {string[]}
 */
var findRelativeRanks = function(nums) {
    var medal = ["Gold Medal", "Silver Medal", "Bronze Medal"];
    var ranks = new Array(nums.length);
    for(var i = 0; i < nums.length; i++){
        ranks[i] = i;
    }
    ranks.sort((a,b) => nums[b] - nums[a]);
    for(var i = 0; i < 3 && i < nums.length; i++){
        nums[ranks[i]] = medal[i];
    }
    for(var i = 3; i < nums.length; i++){
        nums[ranks[i]] = String(i + 1);
    }
    return nums;
};

// var findRelativeRanks = function(nums) {
//     var medal = ["Gold Medal", "Silver Medal", "Bronze Medal"];
//     var copy = nums.slice(0);
//     copy.sort((a,b) => b - a);
//     var map = {};
//     for(var i = 0; i < copy.length; i++){
//         map[copy[i]] = i;
//     }
//     for(var i = 0; i < nums.length; i++){
//         if(map[nums[i]] < 3) nums[i] = medal[map[nums[i]]];
//         else nums[i] = String(map[nums[i]] + 1);
//     }
//     return nums;
// };