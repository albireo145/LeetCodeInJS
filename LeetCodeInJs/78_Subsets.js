/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var subsets = function(nums) {
    if(nums.length == 0) return [[]];
    var res = [];
    var list = [];
    var backTrace = function(res,nums,list,start){
        res.push(Array.from(list));
        for(var i = start,len = nums.length; i < len; i++){
            list.push(nums[i]);
            arguments.callee(res,nums,list,i+1);
            list.pop();
        }
    }
    backTrace(res,nums,list,0)
    return res;
};

// bit manipulation
// var subsets = function(nums) {
//     if(nums.length == 0) return [[]];
//     var res = [];
//     var len = nums.length;
//     var bit = Math.pow(2,len);
//     res.length = bit;
//     for(var i = 0; i < bit; i++){
//         res[i] = [];
//     }
//     for(var i = 0; i < len; i++){
//         for(var j = 0; j < bit; j++){
//             if( j >> i & 1) res[j].push(nums[i]);
//         }
//     }
//     return res;
// };