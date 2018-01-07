/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var subsetsWithDup = function(nums) {
    if(nums.length == 0) return [[]];
    var res = [];
    var list = [];
    nums.sort();
    var backTrace = function(res,nums,list,start){
        res.push(Array.from(list));
        for(var i = start,len = nums.length; i < len; i++){
            list.push(nums[i]);
            arguments.callee(res,nums,list,i+1);
            list.pop();
            while(i + 1 < nums.length && nums[i] == nums[i+1]) i++;
        }
    }
    backTrace(res,nums,list,0)
    return res;
};