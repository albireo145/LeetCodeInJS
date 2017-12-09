/**
 * @param {number[]} nums
 * @return {number[]}
 */
var majorityElement = function(nums) {
    var n1 = nums[0];
    var n2 = nums[0];
    var c1 = 0;
    var c2 = 0;
    var res = [];
    for(num of nums){
        if(n1 == num){
            c1++;
        }else if(n2 == num){
            c2++;
        }else if(c1==0){
            n1 = num;
            c1++;
        }else if(c2==0){
            n2 = num;
            c2++;
        }else{
            c1--;
            c2--;
        }
    }
    var counter1 = 0;
    var counter2 = 0;
    for(num of nums){
        if(num==n1) counter1++
        if(num==n2) counter2++
    }
    if(counter1 > nums.length/3) res.push(n1);
    if(counter2 > nums.length/3) res.push(n2);
    return res
};
