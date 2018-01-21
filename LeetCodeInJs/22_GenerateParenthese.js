/**
 * @param {number} n
 * @return {string[]}
 */
var generateParenthesis = function(n) {
    var helper = function(n, str, open, close) {
        if(str.length == n * 2) res.push(str);
        else{
            if(open < n) arguments.callee(n, str + '(', open + 1, close);
            if(close < open) arguments.callee(n, str + ')', open, close + 1);
        }
    }
    var res = [];
    helper(n, '', 0, 0);
    return res;
};