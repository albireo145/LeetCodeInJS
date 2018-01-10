/**
 * @param {number[]} nums
 * @return {number}
 */

var maximumProduct = function(nums) {
    var min1 = Infinity, min2 = Infinity, max1 = -Infinity, max2 = -Infinity, max3 = -Infinity;
    for(var el of nums){
        if(el > max1){
            max3 = max2;
            max2 = max1;
            max1 = el;
        }else if(el > max2){
            max3 = max2;
            max2 = el
        }else if(el > max3){
            max3 = el;    
        }
        if(el < min1){
            min2 = min1;
            min1 = el
        }else if(el < min2){
            min2 = el;
        }
    }
    return Math.max(min1*min2*max1,max1*max2*max3);
};

// var maximumProduct = function(nums) {
//     nums.sort((a,b) => a-b);
//     return Math.max(nums[0]*nums[1]*nums[nums.length-1],nums[nums.length-1]*nums[nums.length-2]*nums[nums.length-3])
// };