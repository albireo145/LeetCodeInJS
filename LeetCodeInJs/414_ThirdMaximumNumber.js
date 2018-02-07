/**
 * @param {number[]} nums
 * @return {number}
 */
var thirdMax = function(nums) {
    var max1 = -Infinity, max2 = -Infinity, max3 = -Infinity;
    for(var el of nums){
        if(max1 == el || max2 == el || max3 == el) continue;
        if(max1 < el){
            max3 = max2;
            max2 = max1;
            max1 = el;
        }else if(max2 < el){
            max3 = max2;
            max2 = el;
        }else if(max3 < el){
            max3 = el;
        }
    }
    return max3 != -Infinity ? max3 : max1;
};