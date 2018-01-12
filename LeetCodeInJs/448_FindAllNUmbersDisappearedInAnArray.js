/**
 * @param {number[]} nums
 * @return {number[]}
 */
var findDisappearedNumbers = function(nums) {
    var res = [];
    for(var i = 0, len = nums.length; i < len; i++){
        var idx = Math.abs(nums[i]) - 1;
        nums[idx] = nums[idx] > 0 ? -nums[idx] : nums[idx];
    }
    for(var i = 0, len = nums.length; i < len; i++){
        if(nums[i] > 0) res.push(i + 1);
    }
    return res;
};

// other solution
// var findDisappearedNumbers = function(nums) {
//     var res = [];
//     for(var i = 0, len = nums.length; i < len; i++){
//         var idx = nums[i] - 1;
//         if(nums[i] != nums[idx]){
//             var temp = nums[i];
//             nums[i] = nums[idx];
//             nums[idx] = temp;
//             i--;
//         }
//     }
//     for(var i = 0, len = nums.length; i < len; i++){
//         if(nums[i] != i + 1) res.push(i + 1);
//     }
//     return res;
// };