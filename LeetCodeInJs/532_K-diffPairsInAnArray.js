/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
// single pass with map
var findPairs = function(nums, k) {
    var res = 0;
    var map = {};
    for(var i = 0; i < nums.length; i++){
        var count = map[nums[i]] ? map[nums[i]] : 0;
        map[nums[i]] = count > 0 ? map[nums[i]] + 1 : 1;
        if(k > 0 && count == 0){
            if(map[nums[i] + k] != null) res++;
            if(map[nums[i] - k] != null) res++;
        }else if(count == 1 && k == 0){
            res++;
        }
    }
    return res;
};
//  two pointer
// var findPairs = function(nums, k) {
//     var res = 0;
//     nums.sort((a,b)=>a-b);
//     var left = 0, right = 1;
//     while(right < nums.length){
//         var diff = nums[right] - nums[left];
//         if(diff == k){
//             res++;
//             while(nums[right] == nums[right + 1]) right++;
//             right++;
//         }else if(diff < k){
//             right++;
//         }else{
//             while(nums[left] == nums[left + 1]) left++;
//             left++;
//             right = Math.max(left + 1,right);
//         }
//     }
//     return res;
// };