/**
 * @param {number[]} nums
 * @param {number} k
 * @return {void} Do not return anything, modify nums in-place instead.
 */
// O(n) solution
var rotate = function(nums, k) {
    var n = nums.length;
    var temp = nums[0],temp2 = 0;
    var next = 0;
    for(var i = 0,j = 0;j < n;j++){
        next = (next + k) % n;
        temp2 = nums[next];
        nums[next] = temp;
        temp = temp2;
        if(next == i){
           next = ++i;
            temp = nums[next];
        }
    }
};

// Using reverse
// var rotate = function(nums, k) {
//     var left = 0;
//     var right = nums.length - 1;
//     var pos = k % nums.length;
//     rotateUtil(nums,left,right);
//     rotateUtil(nums,left,pos - 1);
//     rotateUtil(nums,pos,right);
// };

// var rotateUtil = function(nums,left,right){
//     while(left < right){
//         var temp = nums[left];
//         nums[left++] = nums[right];
//         nums[right--] = temp;
//     }
// };