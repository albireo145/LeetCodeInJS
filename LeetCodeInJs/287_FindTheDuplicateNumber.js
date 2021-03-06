/**
 * @param {number[]} nums
 * @return {number}
 */
var findDuplicate = function(nums) {
    if(nums.length>0){
        var slow = nums[0];
        var fast = nums[nums[0]];
        while(slow != fast){
            slow = nums[slow];
            fast = nums[nums[fast]];
        }
        fast = 0;
        while(fast != slow){
            fast = nums[fast];
            slow = nums[slow];
        }
        return slow;
    }
    return -1;
};