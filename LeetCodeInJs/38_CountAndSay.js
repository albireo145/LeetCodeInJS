/**
 * @param {number} n
 * @return {string}
 */
var countAndSay = function(n) {
    if(n==1) return "1";
    else return helper("1",n-1);
};
var helper = function(s,n){
    if(n == 0) return s;
    var arr = [];
    var counter = 1;
    for(var i = 0;i<s.length;i++){
        if(s[i] == s[i+1]) counter++;
        else{
            arr.push(counter + "" + s[i]);
            counter = 1;
        } 
    }
    return arguments.callee(arr.join(""),n-1);
};