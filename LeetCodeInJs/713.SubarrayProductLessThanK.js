var numSubarrayProductLessThanK = function(nums, k) {
    var prod  = 1;
    var result = 0;
    var len = nums.length;
    var j = 0;
    for(var i = 0;i<len;i++){
        prod *= nums[i];
        while(prod >= k) prod/=nums[j++];
        result += i - j + 1;
    }
    return result;
};

// var numSubarrayProductLessThanK = function(nums, k) {
//     var prod  = 1;
//     var result = 0;
//     var len = nums.length;
//     for(var i = 0;i<len;i++){
//         prod = 1;
//         for(var j = i;j<len;j++){
//             prod *= nums[j];
//             if(prod < k) result++;
//             else{
//                 break;
//             };
//         }
//     }
//     return result;
// };
