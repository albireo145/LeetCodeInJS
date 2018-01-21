/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var sortColors = function(nums) {
    var left = 0; var right = nums.length - 1;
    var i = 0;
    while(i <= right){
        while(nums[i] == 2 && i < right){
            nums[i] = nums[right];
            nums[right--] = 2;
        }
        while(nums[i] == 0 && i > left){
            nums[i] = nums[left];
            nums[left++] = 0;
        }
        i++;
    }
};
// counter sort
// var sortColors = function(nums) {
//     var color = [0,0,0];
//     for(var el of nums) color[el]++;
//     for(var i = 0,j = 0; i < 3; i++){
//         while(color[i]-- != 0) nums[j++] = i;
//     }
// };