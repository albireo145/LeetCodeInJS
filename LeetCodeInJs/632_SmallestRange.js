/**
 * @param {number[][]} nums
 * @return {number[]}
 */

/**
 * sort nums to PriorityQueue
 * using two pointer find out the min diff
 */
var smallestRange = function(nums) {
    //     array stores pointers 
        var res = [];
    //     PriorityQueue
        var temp = [];
        // record every col has howmany elments in the range bewteen two pointer
        var map = {};
        for(var i = 0; i < nums.length; i++){
            map[i] = 0;
            for(var j = 0; j < nums[i].length; j++){
                temp.push([nums[i][j] , i]);
            }
        }
        temp.sort((a,b) => a[0] - b[0]);
        console.log(temp)
        // count : the number of col in current range 
        var left = 0, count = 0, diff = Infinity, res = [];
        for(var right = 0; right < temp.length; right++){
            if(map[temp[right][1]]++ == 0) count++; 
            while(count == nums.length && left <= right){
                if(diff > temp[right][0] - temp[left][0]){
                    diff = temp[right][0] - temp[left][0];
                    res = [temp[left][0], temp[right][0]];
                }
                // move left pointer and check out the col still in the range
                if(--map[temp[left][1]] == 0) count--;
                left++;
            }
        }
        return res;
    };
// var smallestRange = function (nums) {
//     //     array stores pointers 
//     var next = [];
//     next.length = nums.length;
//     next.fill(0);
//     var min = 0; var max = Infinity;
//     var endFlag = true;
//     while (endFlag) {
//         var min_i = 0, max_i = 0;
//         for (var k = 0, numslen = nums.length; k < numslen; k++) {
//             if (nums[min_i][next[min_i]] > nums[k][next[k]])
//                 min_i = k;
//             if (nums[max_i][next[max_i]] < nums[k][next[k]])
//                 max_i = k;
//         }
//         if (max - min > nums[max_i][next[max_i]] - nums[min_i][next[min_i]]) {
//             max = nums[max_i][next[max_i]];
//             min = nums[min_i][next[min_i]];
//         }
//         if (++next[min_i] == nums[min_i].length) endFlag = false;
//     }
//     return [min, max];
// };