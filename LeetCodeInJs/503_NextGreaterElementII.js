/**
 * @param {number[]} nums
 * @return {number[]}
 */
// O(n);
var nextGreaterElements = function(nums) {
    var next = [];
    var len = nums.length;
    var stk = [];
    for(var i = 0; i < len * 2; i++){
        var num = nums[i % len];
        while(stk.length > 0 && nums[stk[stk.length - 1]] < num)    next[stk.pop()] = num;
        if(i < len) stk.push(i);
    }
    while(stk.length > 0) next[stk.pop()] = -1;
    return next;
};

// O(n)~O(nlogn)?
// var nextGreaterElements = function(nums) {
//     var map = {};
//     var stk = [];
//     for(var i = 0; i < nums.length; i++){
//         while(stk.length > 0 && stk[stk.length - 1][1] < nums[i])
//             map[stk.pop()[0]] = nums[i];
//         stk.push([i, nums[i]]);
//     }
//     while(stk.length > 0){
//         var cp = 0;
//         while(nums[cp] < stk[stk.length - 1][1]){
//             if(nums[cp] == stk[stk.length - 1][1]) break;
//             cp++;
//         } 
//         if(nums[cp] == stk[stk.length - 1][1]) map[stk.pop()[0]] = map[cp] || -1;
//         else{
//             while(stk.length > 0 && stk[stk.length - 1][1] < nums[cp])
//                 map[stk.pop()[0]] = nums[cp];
//         }
//     }
//     for(var i = 0; i < nums.length; i++){
//         nums[i] = map[i];
//     }
//     return nums;
// };