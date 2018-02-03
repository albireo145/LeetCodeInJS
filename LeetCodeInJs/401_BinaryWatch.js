/**
 * @param {number} num
 * @return {string[]}
 */
var readBinaryWatch = function(num) {
    var countBit = function countBit(n){
        // countBit trick
        return n.toString(2).replace(/0/g,"").length;
    }
    var res = [];
    for(var h = 0; h < 12; h++){
        for(var m = 0; m < 60; m++){
            if(countBit(h) + countBit(m) == num){
                res.push('' + h + ":" + (m < 10 ? '0' + m : m));
            }
        }
    }
    return res;
};