/**
 * @param {number[]} numbers
 * @param {number} target
 * @return {number[]}
 */
// two pointers
var twoSum = function(numbers, target) {
    var left = 0, right = numbers.length-1;
    while(left < right){
        if(numbers[left] + numbers[right] == target) return [left + 1,right + 1];
        else if (numbers[left] + numbers[right] > target) right--;
        else left++;
    }
};
// binary search
// var twoSum = function(numbers, target) {
//     for(var i = 0; i < numbers.length; i++){
//         var left = i + 1, right = numbers.length - 1;
//         var k = target - numbers[i];
//         while(left <= right){
//             var mid = left + Math.floor((right - left)/2);
//             if(numbers[mid] == k) return [i+1,mid+1];
//             else if(numbers[mid] > k) right = mid - 1;
//             else left = mid + 1;
//         }
//     }
// };