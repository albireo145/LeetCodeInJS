/**
 * @param {number[]} nums
 * @return {string[]}
 */
var summaryRanges = function(nums) {
    var res = [];
    for(var i = 0, len = nums.length; i < len; i++){
        var start = nums[i];
        while(i + 1 < nums.length && nums[i+1] == nums[i] + 1){
            i++;
        }
        if(start != nums[i]){
            res.push(''+start+'->'+nums[i]);
        }else{
            res.push(''+start);
        }
    }
    return res;
};
// var summaryRanges = function(nums) {
//     var res = [];
//     for(var i = 0, len = nums.length; i < len; i++){
//         var start = nums[i];
//         var end = nums[i];
//         while(i + 1 < nums.length && nums[i+1] == end + 1){
//             end++;
//             i++;
//         }
//         if(start != end){
//             res.push(''+start+'->'+end);
//         }else{
//             res.push(''+start);
//         }
//     }
//     return res;
// };