/**
 * @param {string} s
 * @return {boolean}
 */
var isValid = function(s) {
    var stk = [];
    var map = {')': '(', '}': '{', ']': '['}
    for(var i = 0, len = s.length; i < len; i++){
        switch(s[i]){
            case '(':
            case '[':
            case '{':
                stk.push(s[i]);
                break;
            case ')':
            case ']':
            case '}':
                if(stk[stk.length - 1] == map[s[i]]) stk.pop();
                else return false;
        }
    }
    return stk.length == 0;
};