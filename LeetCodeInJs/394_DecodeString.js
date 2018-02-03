/**
 * @param {string} s
 * @return {string}
 */
var decodeString = function(s) {
    var resStk = [];
    var numStk = [];
    var res = '';
    var i = 0
    while(i < s.length){
        if(0 < s[i] && s[i] <= 9){
            var count = 0;
            while(0 <= s[i] && s[i] <= 9){
                count = count * 10 + Number(s[i++]);
            }
            numStk.push(count);
            continue;
        }
        else if(s[i] == '['){
            resStk.push(res);
            res = '';
        }else if(s[i] == ']'){
            var num = numStk.pop();
            var str = '';
            for(var times = 0; times < num; times++){
                str += res;
            }
            res = resStk.pop() + str;
        }else{
           res += s[i]; 
        }
        i++;
    }
    return res;
};