/**
 * @param {string} str
 * @return {number}
 */
var myAtoi = function(str) {
    var base = 0;
    var sign = 1;
    var len = 0;
    var MAX_NUM = 2147483647;
    var MIN_NUM = -2147483648;
    var MAXdv10 = 214748364;
    while(str[len] == ' ') len++;
    if(str[len] == '-' || str[len] == '+'){
        sign = 1 - 2 * (str[len] == '-');
        len++;
    }
    while(str[len] >= '0' && str[len] <= '9'){
//      judge base add str[len] is bigger than Max OR equal Max;
        if (base >  MAXdv10 || (base == MAXdv10 && str[len] - '0' > 7)) {
            if (sign == 1) return MAX_NUM;
            else return MIN_NUM;
        }
        base  = 10 * base + (str[len++] - '0');
    }
    return base * sign;
};