/**
 * @param {number[]} nums
 * @return {number}
 */
var maximumGap = function(nums) {
    var arr = [];
    var gap = 0;
    for(var el of nums) arr[el] = (arr[el] || 0) + 1;
    var prev;
    for(var idx in arr){
        if(prev != null) gap = Math.max(idx - prev, gap);
        prev = idx;
    }
    return gap;
};