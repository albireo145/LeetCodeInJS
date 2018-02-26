/**
 * @param {number[]} nums
 * @return {number}
 */
var arrayNesting = function(nums) {
    var res = 0;
    var curr = 0;
    var set = new Set();
    for(var i = 0; i < nums.length; i++){
        if(!set.has(nums[i])){
            curr = 1;
            set.add(nums[i]);
            var k = nums[i];
            while(!set.has(nums[k])){
                k = nums[k];
                curr++;
            }
            res = Math.max(res, curr);
        }
    }
    return res;
};