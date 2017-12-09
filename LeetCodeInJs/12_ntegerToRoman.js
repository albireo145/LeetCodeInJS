/**
 * @param {number} num
 * @return {string}
 */
var intToRoman = function(num) {
    var numstr = num + "";
    var result = [];
    var sign = ['I','X','C','M']
    var middle = ['V','L','D']
    numstr = numstr.split('').reverse();
    for(var i = 0;i<numstr.length;i++){
        var str = '';
        var cnum = numstr[i];
        if(cnum%5==4){
            if(cnum<5){
                str = sign[i]+middle[i];
            }
            else{
                str = sign[i]+sign[i+1];
            }
        }else if(cnum<5){
            for(var j=0;j<cnum;j++){
                str += sign[i];
            }
        }
        else{
            str = middle[i];
            for(var j=0;j<cnum-5;j++){
                str += sign[i];
            }
        }
        result.unshift(str);    
    }
    result = result.join('')
    return result;
};