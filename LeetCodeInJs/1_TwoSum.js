/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function(nums, target) {
    var map = new Map();
    for(var i = 0, len = nums.length; i < len; i++){
        var k = target - nums[i];
        if(map.get(k) != null) return [map.get(k),i];
        map.set(nums[i],i);
    }
};

// var twoSum = function(nums, target) {
//     var len = nums.length;
//     var i = 0;
//     for(;i<len-1;i++){
//         for(var j = i+1;j<len;j++){
//             if((nums[j]+nums[i])==target){
//                 return [i,j];
//             }
//         }
//     }
// };
