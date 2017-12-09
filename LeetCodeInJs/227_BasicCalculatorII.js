/**
 * @param {string} s
 * @return {number}
 */
var calculate = function(s) {
    var optArr = s.replace(/\d/ig,'').split('');
    var numArr = s.replace(/[\+\*\-\/]/ig,' ').split(' ');
    var res = [];
    res.push(numArr[0]);
    for(var i = 0;i<optArr.length;i++){
        switch(optArr[i]){
            case '+':
                res.push(numArr[i+1]);
                break;
            case '-':
                res.push(-numArr[i+1]);
                break;
            case '*':
                res.push(res.pop() * numArr[i+1]);
                break;
            case '\/':
                res.push(res.pop() / numArr[i+1]);
                break;
            default:
                break;
        }
    }
    var number = 0;
    for(num of res){
        number += parseInt(num);
    }
    return number;
};