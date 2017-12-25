/**
 * @param {string} s
 * @return {string[]}
 */
var restoreIpAddresses = function(s) {
    var res = [];
    var length = s.length;
    for(var i = 1;i < 4 && i < length - 2; i++){
        for(var j = i + 1 ; j < i + 4 && j < length - 1;j++){
            for(var k = j + 1; k < j + 4 && k < length; k++){
                s1 = s.slice(0,i);
                s2 = s.slice(i,j);
                s3 = s.slice(j,k);
                s4 = s.slice(k,length);
                if(isValid(s1) && isValid(s2) && isValid(s3) && isValid(s4)){
                    res.push(s1+"."+s2+"."+s3+"."+s4);
                }
            }
        }
    }
    return res;
};
var isValid = function(s) {
    if(s.length > 3 || s.length == 0 || (s[0] == 0 && s.length > 1) ||s > 255){
        return false;
    }
    return true;
}