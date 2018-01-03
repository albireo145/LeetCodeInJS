/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var threeSum = function(nums) {
    var res = [];
    nums.sort(function(x,y){
        if(x<y) return -1;
        else if(x>y) return 1;
        else return 0;
    });
    for(var i = 0, len = nums.length; i < len - 2; i++){
        if( i > 0 && nums[i] == nums[i-1]) continue;
        var target = -nums[i];
        var j = i + 1, k = len - 1;
        while(j < k){
            if(nums[j] + nums[k] == target){
                res.push([nums[i],nums[j++],nums[k--]]);
                while (j < k && nums[j] == nums[j - 1]) j++;  // skip same result
                while (j < k && nums[k] == nums[k + 1]) k--;  // skip same result 
            } 
            else if (nums[j] + nums[k] < target) j++;
            else k--;
        }
    }
    return res;
};