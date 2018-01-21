/**
 * @param {string} digits
 * @return {string[]}
 */
var letterCombinations = function(digits) {
    if(digits.length == 0) return [];
    // if(digits.indexOf(1) > -1 ||digits.indexOf(0) > -1) return [];
    var phoneKey = ["0", "1", "abc", "def", "ghi", "jkl", "mno", "pqrs", "tuv", "wxyz"];
    var queue = [''];
    for(var i = 0; i < digits.length; i++){
        var num = digits[i];
        while(queue[0].length == i){
            var t = queue.shift();
            for(var j = 0; j < phoneKey[num].length; j++){
                queue.push(t + phoneKey[num][j]);
            }
        }
    }    
    return queue;
};