/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */

var subarraySum = function(nums, k) {
    var count = 0;
    var summap = new Map(); 
    summap.set(0,1)
    var sum = 0;
    for(var i = 0;i < nums.length;i++){
        sum += nums[i];
        var diff = sum - k;
        var val = summap.get(diff);
        val && (count += val);
        var num = summap.get(sum);
        if(num != null){
            summap.set(sum,++num);
        }else{
            summap.set(sum,1);
        }
    }
    return count;
};


// var subarraySum = function(nums, k) {
//     var count = 0;

//     for(var i = 0;i < nums.length;i++){
//         var sum = 0;
//         for(var j = i;j < nums.length; j++){
//             sum += nums[j];
//             if(sum == k ) count++;
//         }
//     }
//     return count;
// };

 
// var subarraySum = function(nums, k) {
//     var count = 0;
//     var subsum = [0];
//     var endpos = 0;
//     for(var i = 0;i < nums.length;i++){
//         subsum[i + 1] = nums[i] + subsum[i];
//     }
//     for(var i = 0;i < nums.length;i++){
//         for(var j = i + 1;j < subsum.length; j++){
//             if(subsum[j] - subsum[i] == k ) count++;
//         }
//     }
//     return count;
// };


// var subarraySum = function(nums, k) {
//     var count = 0;
//     for(var i = 0;i < nums.length;i++){
//         for(var j = i+1;j <= nums.length;j++){
//             var sum = 0;
//             for(var s = i; s < j; s++){
//                 sum += nums[i];
//             }
//             if(sum == k) count++;
//         }
//     }
//     return count;
// };