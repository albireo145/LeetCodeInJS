var majorityElement = function(nums) {
    var major = 0;
    var count = 0;
    for(num of nums){
        if(count == 0){
            major = num;
            count++;
        }else if(major == num){
                count++;
        }else{
            count--;
        }
    }
    return major
};
