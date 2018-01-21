/**
 * @param {number} n
 * @return {boolean}
 */
var isHappy = function(n) {
    if(n < 0) return false;
    var map = {};
    var str = String(n);
    var happy = 0;
    while(true){
        happy = 0;
        for(var i = 0; i < str.length; i++){
            happy += Math.pow(str[i], 2);
        }
        if(happy == 1) return true;
        if(map[happy] == null) map[happy] = 0;
        if(map[happy]++ > 0) {
            break;
        }
        str = String(happy);
    }
    return false;
};