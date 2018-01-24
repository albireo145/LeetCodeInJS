/**
 * @param {number[]} nums
 * @return {number[]}
 */
var productExceptSelf = function(nums) {
    var res = new Array(nums.length);
    res[0] = 1;
    for(var i = 1; i < nums.length; i++){
        res[i] = res[i - 1] * nums[i - 1];
    }
    var right = 1;
    for(var i = nums.length - 2; i > -1; i--){
        right *= nums[i + 1];
        res[i] *= right;
    }
    return res;
};
// var productExceptSelf = function(nums) {
//     var res = new Array(nums.length);
//     var sum = 0;
//     var zero = 0;
//     for(var el of nums){
//         if(el == 0){
//             zero++;
//         }else{
//             if(sum == 0) sum = 1;
//             sum = sum * el;
//         }
//     }
//     if(zero == 1){
//         for(var idx in nums){
//             res[idx] = nums[idx] == 0 ? sum : 0;
//         }
//         return res;
//     }
//     if(zero > 1){
//         res.fill(0);
//         return res;
//     }
//     for(var idx in nums){
//         res[idx] = nums[idx] == 0 ? sum : sum / nums[idx];
//     }
//     return res;
// };