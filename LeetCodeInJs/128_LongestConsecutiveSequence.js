/**
 * @param {number[]} nums
 * @return {number}
 */

// using set 
var longestConsecutive = function(nums) {
    var map = {};
    var max = 0;
    for(var i = 0; i < nums.length; i++){
        map[nums[i]] = 1;
    }
    for(var i = 0; i < nums.length; i++){
        if(map[nums[i] - 1] == null){
            map[nums[i]] = 1;
            var cur = 1;
            var num = nums[i];
            while(map[++num] != null) cur++;
            max = Math.max(cur, max);
        }
    }
    return max;
};

//  sort O(nlogn)
// var longestConsecutive = function(nums) {
//     if(nums.length == 0) return 0;
//     var max = 1;
//     nums.sort((a,b) => a-b);
//     var cur = 1;
//     for(var i = 1; i < nums.length; i++){
//         if(nums[i-1] == nums[i] - 1){
//             while(nums[i+1] == nums[i]) i++;
//             cur++;
//         } 
//         else cur = 1;
//         max = Math.max(cur, max);
//     }
//     return max;
// };