/**
 * @param {number[]} answers
 * @return {number}
 */
var numRabbits = function(answers) {
    var numMap = {}
    for (var num of answers) {
        if (numMap[num]) {
            numMap[num]++
        } else {
            numMap[num] = 1
        }
    }
    // 2t1 = 2; 3t1 = 4; 4t1 = 4     t: count of number
    // 2t2 = 3; 3t2 = 3; 4t2 = 6; 5t2 = 6; 6t2 = 6;
    var count = 0;
    for (var key in numMap) {
        var num = Number(key) + 1
        var hasRem = numMap[key] % num > 0
        var base = Math.floor(numMap[key] / num)
        count += hasRem ? (base + 1) * num : base * num
    }
    return count
};
